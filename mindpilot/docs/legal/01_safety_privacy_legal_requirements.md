# Safety, Privacy, And Legal Requirements

## Important

This is a product requirements document, not legal advice. Before paid launch, local legal review is required for Israeli privacy, consumer, tax, and child-safety obligations.

## Data Minimization

Collect only what the MVP needs:

- Parent account email
- Parent payment status
- Operator display name or alias
- Operator age
- Operator language
- Operator progress
- Mission responses
- Mentor messages for limited retention

Do not collect:

- Photos
- Biometrics
- Geolocation
- School name unless absolutely required later
- Address
- Phone number unless needed for payment/support
- Private family problems

## Parent Consent

For minors, parent or guardian owns the account and creates the operator profile. Consent is required before the child uses the platform.

## Account Model

- Parent account owns subscription.
- Parent creates child operator.
- Child logs in with operator username/code and PIN.
- Child email is not required for MVP.

## Chat Retention

- Full mentor session messages are retained for 90 days.
- After 90 days, full messages are automatically deleted.
- Session summaries and metric deltas remain.
- Safety alerts remain as compliance records.

## Safety Alerts

If a child writes about self-harm, violence, sexual content, serious distress, or other high-risk content:

1. Mentor stops the topic.
2. Mentor gives a neutral safe response.
3. Backend creates a safety alert.
4. Admin is notified.
5. Parent receives an appropriate signal when required.

The mentor must not act as therapist, doctor, lawyer, or emergency responder.

## Homework And Cheating Policy

MindPilot does not complete school assignments for the child.

Allowed:
- Help understand the task
- Break the task into steps
- Ask guiding questions
- Teach verification
- Review the child's own work at a high level

Not allowed:
- Write the answer for the child
- Produce a full essay/homework submission
- Bypass school rules
- Hide AI use

## Public Repository Rule

Never commit real child data, parent data, private test outputs, chat logs, diagnostics, or personal family details.
