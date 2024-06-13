

```js
// extracting app schema values for creating a signup domain dropdown

let options = []
Object.keys(domains).map((id) => {
    if (domains[id].allow_signup) {
        options.push({
            value: id,
            label: domains[id].title
        })
    }
})

// select.onChange event
console.log({
  "domainDesc": domains[select.value].description;
  "domainHelp": domains[select.value].help;
});
```