

```js
// extracting app schema values for creating role checkboxes

Object.keys(roles.distribution[session.account.version_id]).map((id) => {
  console.log({
    "name": "roles",
    "value": id,
    "selected": session.user.roles.includes(id),
    "text": roles.distribution[session.account.version_id][id].title + ': ' + roles.distribution[session.account.version_id][id].description
  });
}
```