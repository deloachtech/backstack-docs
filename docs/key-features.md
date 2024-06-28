

# Key Features

TODO



## What it does

Backstack manages backend functionality and data infrastructure for an expanding array of application functionality.

- **Authentication**: Including log-in and password recovery.
- **Sign Up**: New account creation with related transactional emails.
- **Account Management**: Multi-user accounts with RBAC.
- **Access Control**: For multi layer access configurations.
- **SaaS**: Multi domain entry points with unlimited application versioning schemas.
- **Monetization**: Monetize anything with automatic invoicing and optional payment processing.
- **B2B Networks**: Incorporating optional revenue-sharing models.
- **Much More**: We're always creating new features.



## How it does it

Backstack utilizes pre-configured application schemas (via the dashboard), JSON Web Tokens (JWT), HttpOnly cookies, and API-managed user sessions. This combination provides dynamically compiled, user-specific values for seamless processing within your codebase.

```sh
GET /v1/auth/session
```

```sh
HTTP/2.0 200 OK
...
Set-Cookie: BackstackJWT=emn367db...; Secure; HttpOnly
...
Content-Type: application/json
{
  "app": {
    "id": "app_1234567890"
    ...
  },
  "auth": false,
  ...
}
```

You have the flexibility to integrate features incrementally, ensuring a smooth and controlled transition without disrupting your current workflow.



## Who it's for

Backstack is designed for developers for integration into their existing codebase.



## What it doesn't do

Backstack doesn't offer any HTML but provides logic and data to be utilized in the user interface layer.
