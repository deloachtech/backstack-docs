# Invoices

Invoices are generated automatically for fees configured in the Backstack dashboard and for items created by your codebase.


## Invoice object {#invoice-object}

```http request
GET https://api.backstack.com/account/invoices/:id
```

Returns an invoice object.

```json
{
  "id": "inv_1234567890",
  "description": "Invoice for application services.",
  "account_id": "acc_1234567890",
  "date": 1234567890,
  "amount": 12345, // cents
  "items": [
    {
      "id": "ivi_1234567890",
      "description": "Monthly user fees (10 @ $15.00).",
      "amount": 15000 // cents
    },
    ...
  ]
}
```

## Invoice list

```http request
GET https://api.backstack.com/account/invoices
```

Returns a [records list](../lists.md#records) of invoices for the current account.

```json
{
  "list": [
    {
      "id": "inv_1234567890",
      "created": 1234567890,
      "description": "Invoice for application services.",
      "payment_date": 1234567890,
      "amount": 12345, // cents
      "payment_id": "pay_1234567890",
      "status": "paid" // paid or unpaid
    },
    ...
  ],
  "total": 30,
  "search": "",
  "filter": "",
  "filters": [
    "paid",
    "unpaid"
  ],
  "pages": 2
}
```

### Resources

- [demo.backstack.com/account/invoices](https://demo.backstack.com/account/invoices)
- [github.com/../account/Invoices.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/account/Invoices.vue)


## Create an invoice

Invoices are automatically generated every thirty days based on the accounts creation date.

## Pay an invoice

Invoices are processed automatically. In the event of a failed payment, the API will notify the account and retry automatically when the accounts payment method is updated.

## Delete an invoice

When an invoice is deleted, an invoice item is created to offset the invoice amount and the invoice is marked as paid.

```http request
DELETE https://api.backstack.com/account/invoices/:id
```

Returns the invoice object.

## Invoice items {#invoice-items}

Invoices consist of multiple items included in the total amount.

Invoice items are created automatically for fees defined in the Backstack dashboard. You can also create them via your codebase to bill accounts for usage or other services.

## Invoice item object {#invoice-item-object}

```http request
GET https://api.backstack.com/account/invoices/:id/items/:id
```

Returns an invoice item object.

```json
{
  "id": "ivi_1234567890",
  "account_id": "acc_1234567890",
  "amount": 432, // cents
  "description": "Percent of charge number chg_1234567890.",
  "timestamp": 1234567890,
  "invoice_id": "inv_1234567890"
}
```

## Invoice items list


```http request
GET https://api.backstack.com/account/invoices/:id/items
```

Returns a [records list](../lists.md#records) of invoice items for a specific invoice.

```json
{
  "list": [
    {
      "id": "ini_1234567890",
      "description": "Percent of charge number chg_1234567890.",
      "amount": 432, // cents
      "timestamp": 1234567890
    },
    ...
  ],
  "invoice_id": "inv_1234567890",
  "total": 20,
  "search": "",
  "filter": "",
  "filters": [],
  "pages": 1
}
```



## Create an invoice item {#create-invoice-item}

Create an invoice item for inclusion in the next account invoice.


```http request
POST https://api.backstack.com/account/invoice-items
{
  "amount": 500, // cents
  "description": "API calls over 1000"
}
```

Returns the invoice item object.


## Update an invoice item

Invoice items cannot be updated. Instead, create a new item with an offsetting amount and reference the original item in the description.

```http request
POST https://api.backstack.com/account/invoice-items
{
  "amount": -500, // cents
  "description": "Credit for API calls over 1000 (ivi_1234567890)"
}
```

Returns the invoice item object.


