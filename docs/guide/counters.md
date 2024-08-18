# Counters

Counters are integer-based values stored for account-specific statistics. (For instance, tracking how often an account uses a feature.)

## How it works

Counters are defined in the Backstack dashboard and transactions are implemented in your application codebase. The current `session.account.counters[id]` contains an aggregate of the transacted values.

::: info 
Counters can be configured to be time-based, allowing for aggregate totals for the past _n_ days. 
:::

## Codebase implementation

Initiate a counter on events you want to track for future usage assessment.

```js
// pseudocode

if(session.account.counters.foo-downloads === 10)
  <button>Get More Foos</button>
else
  <button onClick="downloadFoo()">Download Foo</button>

function downloadFoo() {
  const result = await processDownload('Foo');
  if(result.success) {
    updateFooDownloads(1);
  }
```

### Request

The `updateFooDownloads()` in the example code above would update the counter.

```sh
POST /v1/account/counters
{
  "id": "foo-downloads"
}
```

| Parameter | Type | Description |
| --- | --- | --- |
| `id` | Required string | The counter ID. |
| `integer` | Optional integer | A positive or negative integer (e.g. 12345) you want added to the existing total. If empty the value of 1 will be used. |

### Response

The [Session object](sessions) is updated with the counter total value.

```json
// session object
{
  ...
  "account": {
    "counters": {
      "foo-downloads": 1,
      ...
    }
    ...
  }
}
```

## Subtracting values

Use negative integers to offset existing values.

```sh
POST /v1/account/counters
{
  "id": "foo-downloads",
  "integer": -1
}
```

## Resetting counters

Post an `action` with the value `reset` to reset a counter value to zero.

```sh
POST /v1/account/counters
{
  "id": "foo-downloads",
  "action": "reset"
}
```
