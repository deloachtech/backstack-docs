# Managing Resource Usage

Backstack offers a variety of methods for managing resource usage within your codebase.


## Counters

Counters are defined in the Backstack dashboard for use in any of your applications. Initiate a counter on events you want to track for future usage assessment.

```js
// pseudocode

<button onClick="updateFooCount(1)">Add Foo</button>

<button onClick="updateFooCount(-1)">Delete Foo</button>
```

The `session.account.counters` is an array of aggregated values for the current account.

```js
// session object
{
  ...
  "account": {
    "counters": {
      "foo": 23,
      ...
    }
    ...
  }
}
```

See the [counters resource](counters) for more information.

## Account stats

The `session.account.stats` array contains system-generated values you can use for managing resource usage.

```js
// session object
{
  ...
  "account": {
    "stats": {
      "users": 5,
      "children": 4,
      "optional_features": 2
    }
    ...
  }
}
```

See the [account stats resource](account-stats) for more information.
