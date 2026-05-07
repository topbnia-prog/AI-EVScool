import { NextRequest, NextResponse } from "next/server";
import { authAccounts } from "./app/lib/auth";
import { getRoleHome, sessionCookieName } from "./app/lib/session";

const protectedPrefixes = ["/admin", "/api", "/operator", "/parent"];
const authPages = ["/login", "/register"];

function getAccountFromRequest(request: NextRequest) {
  const accountId = request.cookies.get(sessionCookieName)?.value;
  if (!accountId) return undefined;
  return authAccounts.find((account) => account.id === accountId);
}

function isProtectedPath(pathname: string) {
  return protectedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

function isRoleAllowed(pathname: string, role: string) {
  if (pathname === "/api" || pathname.startsWith("/api/")) return true;
  if (pathname === "/admin" || pathname.startsWith("/admin/")) return role === "admin";
  if (pathname === "/parent" || pathname.startsWith("/parent/")) return role === "parent";
  if (pathname === "/operator" || pathname.startsWith("/operator/")) return role === "operator";
  return true;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const account = getAccountFromRequest(request);

  if (account && authPages.includes(pathname)) {
    return NextResponse.redirect(new URL(getRoleHome(account.role), request.url));
  }

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  if (!account) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (!isRoleAllowed(pathname, account.role)) {
    return NextResponse.redirect(new URL(getRoleHome(account.role), request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"]
};
