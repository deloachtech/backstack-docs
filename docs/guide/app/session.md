# App Sessions

Sessions are immutable objects created from online specifications and other distinctive values initiated during the login process.

These objects receive dynamic updates through the outcomes of various processes. As online specifications evolve or application resources are modified, all affected sessions are updated in real-time.

We recommend storing the session object on the browser itself, and updating it based on your applications use load and functionality (e.g. every _n_ minutes). The API monitors and caches environmental changes, so you can efficiently update it on every request.

## Session object

```http request
GET https://api.backstack.com/app/session
```

Returns the current session object.

```json
// demo values
{
  "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "demo": true,
  "provider_id": "",
  "app": {
    "id": "app_1234567891",
    "title": "Demo App",
    "created": 1620000000,
    "login_url": "https://demo.app/login",
    "reset_url": "https://demo.app/reset",
    "signup_url": "https://demo.app/signup",
    "network_url": "https://demo.app/network",
    "stripe_pub_key": "pk_test_1234567890",
    "stripe_key_exists": true,
    "allow_signup": true
  },
  "auth": true,
  "account": {
    "id": "acc_1234567891",
    "created": 1670635932,
    "title": "Acme Corp",
    "address": "123 Main St",
    "city": "Any Town",
    "state": "NY",
    "zip": "12345",
    "url": "https://demo.account1.com",
    "contact_name": "John Doe",
    "contact_email": "j.doe@acme-corp.com",
    "timezone_id": "America/New_York",
    "country_id": "US",
    "is_app_account": true,
    "phone": "123-456-7890",
    "domain_id": "demo_domain",
    "version_id": "demo_version",
    "last_login": 1727003260,
    "utc_offset": -14400,
    "counters": {
      "demo_counter": 0
    },
    "optional_features": [],
    "stats": {
      "user_count": 10,
      "role_count": 23,
      "children_count": 4
    }
  },
  "user": {
    "id": "usr_1234567897",
    "created": 1670635932,
    "last_login": 1670635932,
    "username": "demo",
    "name": "Demo User",
    "email": "demo@backstack.com",
    "avatar": "<svg>...</svg>",
    "avatar_color": "#952c8b",
    "hidden_tips": [],
    "screen_locked": false,
    "mobile_number": "123-456-7890",
    "roles": [
      "rol_1234567898",
      ...
    ],
    "account_user": 3
  },
  "access": {
    "account-users": "crud",
    ...
  },
  "alerts": [
    {
      "id": "expired-card",
      "title": "Expired payment method",
      "description": "Alerts you when a payment method has expired.",
      "text": "One or more of your credit cards has expired. Please update your payment methods.",
      "href": "/account-payment-methods",
      "access": "account-payment-methods:u",
      "priority": 1,
      "timestamp": 1727348860
    },
    ...
  ],
  "access_signature": "d751713988987e9331980363e24189ce"
}
```

### Resources

- [TODO github.com/../session.js](https://github.com/deloachtech/backstack-demo/blob/main/src/session.js)
- [TODO github.com/../router.js](https://github.com/deloachtech/backstack-demo/blob/main/src/router.js)





