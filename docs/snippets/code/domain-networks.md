```js
// extracting app schema values for creating a network domain dropdown

Object.keys(domains[session.account.domain_id].network).map((child_id) => {
  console.log({
    "value": child_id,
    "text": domains[child_id].title,
    "show_fee_option": domains[session.account.domain_id].network[child_id].monetized
  });
});
```