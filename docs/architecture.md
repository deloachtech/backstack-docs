# Architecture

The Backstack architecture is designed to streamline the management of intricate data schemas. Familiarizing yourself with the terminology and the underlying structure will provide a thorough understanding of the process.

![Images](/images/diagrams/architecture.svg)

## Accounts and users

Accounts, like "Acme Corp", are entities _with_ users. When someone signs up, they become the first user of an account. Accounts and users are managed through your application's user interface and the Backstack API.

## App schemas

Application schemas encapsulate all pre-authentication and feature distribution information necessary for your codebase to serve your application directly from the client, eliminating the need for an API call.

```json
// app schema
{
    "app": { ... },
    "access": { ... },
    "versions": { ... },
    "roles": { ... },
    ...
}
```

## Sessions

Sessions are immutable objects created from online specifications and other distinctive values initiated during the login process.

These objects receive dynamic updates through the outcomes of various processes. As online specifications evolve or application resources are modified, all affected sessions are updated in real-time.

```json
// session object
{
  "account": { ... },
  "user": { ... },
  "access": { ... },
  ...
}
```

## Domains

Domains represent the highest level of application categorization. Each account is associated with a single domain, and each domain provides distinct versions of the application's functionality.

![Images](/images/diagrams/domains.svg)

Domains are managed using the Backstack dashboard. They're assigned to an account during the sign-up process. See the [sign-up workflow](/signup) for more information.

## Versions

Versions are containers of features, organizing account-level application functionality. While accounts may have access to multiple versions, they can only subscribe to one at any time.

![Images](/images/diagrams/versions.svg)

Versions are managed using the Backstack dashboard. The default version is assigned during the sign-up process, and the account upgrades/downgrades using your UI. See the [versions](/versions) page for more information.

## Features

Features are version-based, access-controlled containers of fine-grained application functionality. Once defined, they can be used in any of your applications.

See the [features](/features) page for more information.

![Images](/images/diagrams/features.svg)

Features are fully managed and assigned to versions using the Backstack dashboard.

## Optional features

Features can be independently offered, providing additional account-level options beyond the current version functionality. Use optional features for offering unique functionality that might not be suitable for all accounts in the version schema.

![Images](/images/diagrams/optional-features.svg)

Optional features are managed using the Backstack dashboard. Accounts subscribe/unsubscribe to them using your UI. See the [optional features workflow](/optional-features) for more information.

## Account networks

Networks operate on a domain basis and are configured through the Backstack dashboard. Parent domain accounts have the ability to create child accounts in subordinate domains. Additionally, networks can incorporate optional revenue-sharing features.

![Images](/images/diagrams/networks.svg)
