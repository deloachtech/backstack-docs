# Payment Methods

Allow accounts to provide payment methods for billing purposes.


## Prerequisites

Payment methods are managed using a proxy and your Stripe account. Backstack doesn't store your customer data on its servers.
Your app must have a Stripe account connected to the Backstack dashboard.


## Payment method object {#payment-method-object}

```http request
GET https://api.backstack.com/account/payment-methods/:id
```

Returns a payment method object.

```json
{
  "id": "pym_1234567890",
  "card_number": "**** **** **** 1111",
  "expires": "01/2900",
  "type": "Visa",
  "expired": false,
  "default": true
}
```

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)



## Payment methods list

```http request
GET https://api.backstack.com/account/payment-methods
?collection=true
```

Returns a [collection list](lists.md#collection) of the accounts payment methods.

```json
[
  {
    "id": "pay_1234567890",
    "card_number": "**** **** **** 1111",
    "expires": "01/2900",
    "type": "Visa",
    "expired": false,
    "default": true
  },
  ...
]
```

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)



## Create payment method

```http request
POST https://api.backstack.com/account/payment-methods
{
  "card_number": "4111111111111111",
  "expiration_month": 12,
  "expiration_year": 2045,
  "cvv": "123",
}
```

Returns a payment method object.

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)



## Update payment method

Update the expiration date of a payment method.

```http request
POST https://api.backstack.com/account/payment-methods/:id
{
  "expiration_month": 12,
  "expiration_year": 2045,
}
```
Returns a payment method object.

<!--@include: includes/update-info.md-->

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)



## Delete payment method

```http request
DELETE https://api.backstack.com/account/payment-methods/:id
```

### Resources

- [TODO demo.backstack.com/](https://demo.backstack.com/)
- [TODO github.com/../.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/)

