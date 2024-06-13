
```js
// extracting app schema vaues  for creating an optional features list

optional_features.distribution[session.account.version_id].map((id) => {
  console.log({
    "id": id,
    "title": optional_features.list[id].title,
    "description": optional_features.list[id].description,
    "active": session.account.optional_features.contains(id)
  });
});
```
