
# Networks

Accounts can establish B2B relationships and revenue sharing.


## Prerequisites

Your application must have a network URL defined in the dashboard settings. This URL serves as the base activation endpoint for the network invitation email link.

```text
Example link included in the activation email:
https://yourapp.com/networks?token={{token}}
```

## Initiate the network {#create-network-invitation}

Networks are created by the current session account via invitations. An email is sent to the proposed child account with a tokened link to accept the invitation.

Provide a form for the user to submit the network invitation information.

```html
<form id="network-invitation-form">
    <input type="email" name="email" placeholder="Email" required>
    <input type="number" name="fee_proposed" placeholder="Proposed Fee"><!-- optional -->
    <select name="domain_id" required>
        <option value="dom_1234567890">Government Agency</option>
        ...
    </select>
    <button type="submit">Send</button>
</form>
```

### Form data

Make a call to the API to retrieve the domains available.

```http request
GET https://api.backstack.com/account/network-domains
?collection=true
```

Returns a [collection list](../lists.md#collection) of domain values.

```json
[
  {
    "dom_1234567890": {
      "title":  "Government Agency",
      "description": "Government agency account type"
    }
  },
  ...
] 
```


### Submit network invitation

Submit the network invitation data to the API for processing. An activation email is sent, containing a tokened link to the network URL defined in the dashboard settings.


```http request
POST https://api.backstack.com/account/network-invitations
```

```json
{
  "email": "jdoe@acme-corp.com",
  "domain_id": "dom_1234567890",
  "fee_proposed": 2.5
}
```

An activation email with a tokened link is sent to the email address provided.

::: info
A successful response does not guarantee that the email was successfully delivered. The API only confirms that the email was accepted for delivery.
:::

### Resources

- [github.com/../account/NetworkInvitations.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/NetworkInvitations.vue)


## Activate the network

The link in the initial email includes a token that needs to be submitted to the API for network activation.

```js
// Retrieve token from the incoming email link
var token = new URLSearchParams(window.location.hash).get('token');
```

Submit the token to the API for processing.

```http request
POST https://api.backstack.com/account/network-invitations/:token
```

A new account and user will be created, and the network relationship will be established. The response will include the relevant IDs for your information. You can begin the login process with the new user.

Deletes the associated network invitation.

```json
{
  "account_id": "act_1234567890",
  "user_id": "usr_1234567890",
  "domain_id": "dom_1234567890",
  "version_id": "ver_1234567890"
}
```

## Network invitations list {#network-invitations}

```http request
GET https://api.backstack.com/account/network-invitations
```

Returns a [record list](../lists.md#records) of network invitations for the current session account.

```json
{
  "list": [
    {
      "id": "nwi_1234567890",
      "created": 1234567890,
      "domain_id": "dom_1234567890",
      "fee_proposed": 2.5, // percent
      "email": "jdoe@acme-corp.com",
      "status": "pending"
    },
    ...
  ],
  "total": 8,
  "search": "",
  "filter": "",
  "filters": [
    "pending",
    "expired"
  ],
  "pages": 2
}
```

### Resources

- [demo.backstack.com/account/networks](https://demo.backstack.com/account/networks)
- [github.com/../account/NetworkInvitations.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/NetworkInvitations.vue)


## Update network invitation

```http request
POST https://api.backstack.com/account/network-invitations/:id
{
  "email": "jdoe2@acme-corp.com",
  "fee_proposed": 1.5 // percent
}
```

Updates the network invitation and resends the activation email.

<!--@include: includes/update-info.md-->


### Resources

- [demo.backstack.com/account/networks](https://demo.backstack.com/account/networks)
- [github.com/../NetworkInvitations.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/NetworkInvitations.vue)


## Delete network invitation

```http request
DELETE https://api.backstack.com/account/network-invitations/:id
```

Deletes the network invitation.


### Resources

- [demo.backstack.com/account/networks](https://demo.backstack.com/account/networks)
- [github.com/../account/NetworkInvitations.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/NetworkInvitations.vue)


## Network object

The network relationship between the current session account (parent account) and a child account.

```http request
GET https://api.backstack.com/account/networks/:child_account_id
```

Returns a network object.

```json
{
  "account_id": "acc_2345678901", // child account
  "fee": 1.5, // percent
  "fee_proposed": 2.0 // percent,
  "proposed_date": 12345678980,
  "proposed_account_id": "acc_2345678901",
  "proposed_user_id": "usr_1234567890",
  "account_title": "Acme Seafood",
  "domain_title": "Wholesale Distributor"
}
```

### Resources

- [demo.backstack.com/account/networks](https://demo.backstack.com/account/networks)
- [github.com/../account/Networks.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/Networks.vue)


## Networks list

```http request
GET https://api.backstack.com/account/networks
```

Returns a [record list](../lists.md#records) of networked accounts established for the current session account.

```json
{
  "list": [
    {
      "account_id": "acc_2345678901", // child account
      "account_title": "Acme Seafood",
      "domain_title": "Wholesale Distributor",
      "fee": 1.5, // percent
      "fee_proposed": 2.0, // percent
      "fee_proposed_date": 1234567890
    },
    ...
  ],
  "total": 25,
  "search": "",
  "filter": "",
  "filters": [],
  "pages": 1
}
```

### Resources

- [demo.backstack.com/account/networks](https://demo.backstack.com/account/networks)
- [github.com/../account/Networks.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/Networks.vue)



## Update network

```http request
POST https://api.backstack.com/account/networks/:child_account_id
{
  "fee": 1.5 // percent
}
```

### Resources

- TODO

## Delete network

Deletes the network relationship only. The child account remains active in the system.

```http request
DELETE https://api.backstack.com/api/account/networks/:child_account_id
```

Returns the related account IDs.

```json
{
  "parent_account_id": "acc_1234567890",
  "child_account_id": "acc_2345678901"
}
```

### Resources

- [demo.backstack.com/account/networks](https://demo.backstack.com/account/networks)
- [github.com/../account/Networks.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/Networks.vue)


