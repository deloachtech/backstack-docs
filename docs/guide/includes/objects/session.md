```json
// session object
{
  "auth": true,
  "demo": false,
  "app": {
    "id": "app_1234567890",
    "title": "My App",
    "created":"",
    "login_url":"https://acmecorp.com/login",
    "reset_url":"https://acmecorp.com/reset-password",
    "signup_url":"https://acmecorp.com/signup",
    "network_url":"https://acmecorp.com/network",
    "stripe_pub_key":"pk_1234567890",
    "stripe_key_exists":true,
    "allow_signup": true
  }
  "account": {
    "id": "acc_1234567890",
    "domain_id": "dom_1234567890",
    "version_id": "ver_1234567890",
    "title": "Acme Corp",
    "address": "123 Any Street",
    "city": "New Orleans",
    "state": "LA",
    "zip": "12345",
    "phone": "555-555-5555",
    "contact_name": "James Doe",
    "contact_email": "jamesdoe@acmecorp.com",
    "country_id": "US",
    "url": "https://www.acmecorp.com",
    "is_app_account": 0,
    "timezone_id": "America\/Adak",
    "utc_offset": -32400,
    "counters": {
      "charges": 21,
      ...
    },
    "optional_features": [
      "payment-processing",
      ...
    ],
    "stats": {
      "user_count": 15,
      "children_count": 4,
      "role_count": 12
    }
  },
  "user": {
    "id": "usr_1234567890",
    "username": "jamesdoe",
    "name": "James Doe",
    "email": "jamesdoe@acmecorp.com",
    "avatar": "https://cdn.bckstack.com/avatars/hs737jfgc637e.jpg",
    "roles": [
      "rol_1234567890",
      ...
    ]
  },
  "access": {
    "account-users": "crud",
    ...
  },
  "access_signature": "8923jfcmo734vmpqnc49qfymIYGikU6fu6ewoufh2ou",
  "alerts": {
     ...    
  }
}
```
