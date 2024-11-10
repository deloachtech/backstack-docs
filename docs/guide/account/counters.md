# Counters

Counters are integer-based values defined in the Backstack dashboard to store account based statistics, such as tracking how often a feature is used.

::: info
Counters are set up in the Backstack dashboard and managed in your codebase.
:::

## Counter transactions

Counter transactions are managed in your codebase, and the current [app/session](../app/session.md) `account.counters` contains an
aggregate of their values.

The API endpoint syntax to update a counter is as follows. Where `:value` is a positive or negative integer to add to the existing counter integer.

```http request
POST https://api.backstack.com/account/counters/:counter_id/:value
```

The API updates the accounts counter value.


## Codebase implementation

Initiate a transaction on counters you want to track for future assessment.

```js
// pseudocode

if (session.account.counters.foo_downloads === 10)
    <button>Get More Foos</button>
else
    <button onClick="downloadFoo()">Download Foo</button>

function downloadFoo() {
    const result = processDownload('foo_downloads');
    if (result.success) {
        updateFooDownloads(1);
    }
}
```

In the pseudocode above, the `updateFooDownloads()` function would update the `foo_downloads` counter using the following endpoint.

```http request
POST https://api.backstack.com/account/counters/foo_downloads/1
```

The [app/session](../app/session) is updated with the counters total value.

```json
// session object
{
  ...
  "account": {
    "counters": {
      "foo_downloads": 1,
      ...
    }
    ...
  }
}
```


## Subtracting values

Use negative integers to offset existing counter values.

```http request
POST https://api.backstack.com/account/counters/foo_downloads/-1
```

The [app/session](../app/session) is updated with the counters total value.


## Resetting counters

Submit a delete request to reset the counter to zero.

```http request
DELETE https://api.backstack.com/account/counters/foo_downloads
```

The [app/session](../app/session) is updated with the counters total value.


## Monetizing counters

You can use counters to track feature use and invoice accounts based on their usage. For example, you can track the number of API calls an account makes and bill them accordingly.

```http request
POST https://api.backstack.com/account/counters/api_calls/1
```

After a certain threshold, create an [invoice item](../account/invoices.md#invoice-items) for the account.

```http request
POST https://api.backstack.com/account/invoice-items
{
  "amount": 500, // cents
  "description": "API calls over 1000",
}
```

Reset the counter after creating the invoice item.

```http request
DELETE https://api.backstack.com/account/counters/api_calls
```


