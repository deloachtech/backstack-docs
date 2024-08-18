# Account Stats

<!--@include: includes/alpha-note.md-->

The `session.account.stats` array contains system-generated values you can use for managing resources.

## Example codebase implementation

```js
// pseudocode

if (session.account.stats.users === 10) {
  <button>Update Plan</button>;
} else {
  <button>Add User</button>;
}
```

## Available statistics

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

| Property            | Type    | Description                                                          |
| ------------------- | ------- | -------------------------------------------------------------------- |
| `users`             | Integer | The count of account users.                                          |
| `children`          | Integer | The child accounts networked under the account.                      |
| `optional_features` | Integer | The count of optional features for which the account has subscribed. |
