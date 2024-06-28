# Monetization

Backstack supports various monetization models for your application:

- **Subscriptions**: Offer different versions of the application with built-in feature sets for distribution across various tiers.
- **Revenue Sharing**: Distribute revenue across multiple accounts.
- **In-app Purchases**: Set usage limits with upgrade options available through optional features.
- **User Licenses**: Provide scalable access based on the number of users.
- **Trial Limits**: Set limits to expire over time, offering users a temporary experience with enhanced features and functionality.
- **Custom Fees**: Collect a fee for any monetary transaction performed during the account session.


## How it works

Account-based invoices are automatically generated for any implemented fees, requiring no additional action on your behalf. You can display the current account invoices in your UI and process account payments automatically if desired.

See the [invoicing-accounts workflow](/account-invoicing) for information on managing account invoices.

## User license fees

User license fees are set in the version settings through the Backstack dashboard, and the invoice amounts are automatically adjusted as the account adds or removes users.

See the [versioning](/versioning) and [invoicing-accounts](/account-invoicing) workflows for additional information.


## Subscription fees

Assign a monthly subscription fee to any version using the Backstack dashboard, and provide a user interface for accounts to manage their current version. Backstack automatically tracks version changes and adjusts invoice amounts accordingly.

See the [versioning](/versioning) and [invoicing-accounts](/account-invoicing) workflows for additional information.


## In-app purchases

Use the BackStack dashboard to set monthly subscription fees for optional features when configuring application versions. Implement a user interface within your application for account management of integrations. BackStack monitors changes and automatically adjusts invoice amounts.

See the [optional features](/optional-features) and [invoicing-accounts](/account-invoicing) workflows for additional information.


## Custom fees


You can collect a fee for any event performed by the current account using an API call. The amount will be included in the account's invoice.

See the [invoicing-accounts workflow](/account-invoicing) for additional information.
