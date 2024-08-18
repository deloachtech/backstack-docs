# Account Invoicing

Account-based invoices are automatically generated for any implemented fees, requiring no additional action on your behalf. You can display the current account invoices in your UI and process account payments automatically if desired.

## List invoices

The current account invoices can be presented in your UI.

### Request

```sh
GET /v1/account/invoices
?page_size=25&page_index=1&search=&filters[status]=unpaid
```

<!--@include: includes/list-parameters.md-->

| Filter | Type | Options |
| --- | --- | --- |
| `status` | Optional string | `paid` or `unpaid`. Omit to list all. |

### Response

<!--@include: includes/list-response.md-->

| List item property | Type | Description |
| --- | --- | --- |
| `id` | String | The invoice ID. |
| `todo` | todo | todo |


## Read invoice

todo

### Request

```sh
GET /v1/account/invoices/:id
```

### Response

<!--@include: includes/objects/invoice.md-->

## Update invoice

Invoices cannot be updated or deleted.

## Auto-invoiced items

<!--@include: includes/auto-invoiced-fees.md-->

See [versions](/versions) and [version assignment workflow](/version-assignment) for additional information.

## Custom invoice items

You can create an invoice item for the current account by posting the required values to the API. The item will be included in the next account invoice.

```js
// pseudocode
const amount = 123.45; 
const charge = await createCharge(amount);

if(charge.success)
  const result = await processFee(
    (amount * 100) * 0.035, // 3.5% of the charge amount in cents.
    "Percent of charge number " + charge.id + "."
  );
  ...
```

### Request

The _processFee_ function in the example code above would post the following:

```sh
POST /v1/account/invoice-items
{ 
  "amount": 432
  "description": "Percent of charge number chg_1234567890."
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| `amount` | Required integer | The amount (in cents) for which to create a transaction value. Submit a negative amount to perform a credit. |
|  `description` | Optional string | Any fee description you want displayed on the invoice transaction (max 200 characters). If empty, the app title will be used. |

### Response


<!--@include: includes/objects/partials/invoice-item.md-->


## Read invoice item

### Request

```shell
GET /v1/account/invoice-items/:id
```


### Response


<!--@include: includes/objects/invoice-item.md-->


## Update invoice item


Invoice items serve as transactional sources of truth, and as such, they cannot be updated or deleted. To nullify an invoice item, you can create an offsetting item to eliminate its value.

### Request

```js
// original item
POST /v1/account/invoice-items
{
  "amount": 1234,
  "description": "Purchase of item #12345.",
}

// offset item
POST /v1/account/invoice-items
{
  "amount": -1234,
  "description": "Refund purchase of item #12345.",
}
```

### Response

<!--@include: includes/objects/partials/invoice-item.md-->


## List invoice items

Retrieve a list of items included in an invoice or those that have not yet been invoiced by omitting the filter.

### Request

```sh
GET /v1/account/invoice-items
?page_size=25&page_index=1&search&filters[invoice_id]=inv_1234567890
```

<!--@include: includes/list-parameters.md-->

| Filter | Type | Options |
| --- | --- | --- |
| `invoice_id` | Optional string | The invoice ID for which to filter the items. If omitted, all un-invoiced items will be returned. |


### Response

<!--@include: includes/list-response.md-->


| List item property | Type | Description |
| --- | --- | --- |
| `id` | String | The invoice ID. |
| `todo` | todo | todo |



## Processing payments

todo

::: tip
Invoice periods are determined by the `account.created` date and processed in thirty-day increments. Fees are prorated
as required when related activity occurs between periods.
:::

### Automatically

Provide your [Stripe restricted key](https://docs.stripe.com/keys) in your application settings and enable the auto invoice payment option. This will allow Backstack to perform the following on behalf of your Stripe platform account:

- Create a Stripe customer for each invoiced account.
- Process payments on account invoices.
- Email invoice payment details to accounts.



::: warning
Backstack does not provide functionality for further management of account payments (e.g. refunds, transfers). Use your Stripe dashboard for any additional payment management requirements.
:::


### Webhook

A webhook can be sent to a URL for you to process invoice payments. The payload will contain all [invoices](/invoices) due.

```js
// webhook
{
  "invoices": [
    // invoice objects
    {
      "id": "inv_1234567890",
      ...
    },
    ...
  ]
}
```



