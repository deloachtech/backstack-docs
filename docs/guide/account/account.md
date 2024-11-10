# Account

The account object associated with the current [app/session](../app/session.md).

## Account object

The account object is a subset of the [app/session](../app/session.md) `account` with additional
account-specific information.

Use this endpoint to independently retrieve the account object of the current session, disregarding the session object
itself.

```http request
GET https://api.backstack.com/account
```

Returns an account object.

```json
{
  "id": "acc_1234567890",
  "created": 1234567890,
  "title": "Acme Corp",
  "address": "123 Any Street",
  "city": "New Orleans",
  "state": "LA",
  "zip": "12345",
  "url": "https://acme-corp.com",
  "contact_name": "Bill Rogers",
  "contact_email": "bill@acme-corp.com",
  "timezone_id": "America/Chicago",
  "country_id": "us",
  "is_app_account": false,
  "phone": "555-555-5555",
  "domain_id": "dom_1234567890",
  "version_id": "ver_1234567890"
}
```

### Resources

- [demo.backstack.com/account](https://demo.backstack.com/account)
- [github.com/../account/Account.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/Account.vue)


## Create account

Accounts are created using the [app/signup](../app/signup.md) endpoint.
and [account/network-accounts](../account/networks#create-network-invitation) endpoints.

## Update account

```http request
POST https://api.backstack.com/account
{
  "title": "Acme Corp" // required
  "address": "123 Any Street",
  "city": "New Orleans",
  "state": "LA",
  "zip": "12345",
  "phone": "555-555-5555",
  "url": "https://acme-corp.com",
  "contact_name": "Bill Rogers", // required
  "contact_email": "brogers@acme-corp.com", // required
  "country_id": "us", // required
  "timezone_id": "America/Chicago" // required
}
```

Returns the updated account object.

<!--@include: includes/update-info.md-->


### Resources

- [demo.backstack.com/account](https://demo.backstack.com/account)
- [github.com/../account/Account.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/Accoun.vue)


## Delete account

Delete the current account and expires the session.

```http request
DELETE https://api.backstack.com/account
```

Returns the deleted account ID.

```json
{
  "account_id": "acc_1234567890"
}
```


