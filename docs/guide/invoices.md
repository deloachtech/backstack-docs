# Invoices

todo

## The Invoice object

<!--@include: includes/objects/invoice.md-->
<!--@include: includes/objects/properties/invoice.md-->


## Invoice items

todo

### Create

todo

### Read

todo

### Update

Invoice items serve as transactional sources of truth, and as such, they cannot be updated or deleted. To nullify an invoice item, you can create an offsetting item to eliminate its value.

```js
POST /v1/account/invoice-item
{
  "amount": 100,
  "description": "Purchase of item.",
  ...
}

POST /v1/account/invoice-item
{
  "amount": -100,
  "description": "Refund purchase of item.",
  ...
}
```