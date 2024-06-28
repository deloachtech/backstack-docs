
```json
// app schema object
{
  "schema_version": "0.8.1",
  "app": {
    "id": "app_1234567890",
    "title": "Acme Service",
    "pub_key": "pub_key_1234567890",
    "alow_signup": true,
    ...
  },
  "domains": {
    "dom_1234567890": {
      "title": "App",
      "allow_signup": true,
      ...
      "versions": {
        "ver_1234567890": {
          "title": "App",
          ...
        },
        ...
      },
      "network": {
        "dom_2345678901": {
          "monetized": true
        },
        ...
      }
    },
    ...
  },
  "optional_features": {
    "distribution": {
      "ver_1234567890": [
        "account-invoices",
        ...
      ],
      ...
    },
    "list": {
      "account-invoices": {
        "title": "Account Invoices",
        "description": null
      },
      ...
    }
  },
  "access": {
    "ver_1234567890": {
      "account-versions": {
        "rol_1234567890": "crud",
        ...
      },
      ...
    },
    ...
  },
  "roles": {
    "distribution": {
      "ver_1234567890": [
        "rol_1234567890",
        ...
      ],
      ...
    },
    "list": {
      "rol_1234567890": {
        "title": "Super User",
        "description": "The Super User can do anything on the system."
      },
      ...
  }
}
```
