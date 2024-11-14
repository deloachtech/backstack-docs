# Hidden Tips

Users can hide tips that are displayed in the app.


## Hide a tip

```http request
POST https://api.backstack.com/user/hidden-tips/:id
```

Updates the session object to hide the tip with the specified ID.

```json
// updated session object
{
  ...
  "user": {
    ...
    "hidden_tips": [
      "tip_1234567890",
      ...
    ]
  }
  ...
}
```


### Resources

- [demo.backstack.com/hidden-tips](https://demo.backstack.com/hidden-tips)
- [github.com/../HiddenTips.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/user/HiddenTips.vue)




## Reset hidden tips

Resets all tips to display again.

```http request
DELETE https: //api.backstack.com/user/hidden-tips
```

Updates the session object to remove all hidden tips.

```json
// updated session object
{
  ...
  "user": {
    ...
    "hidden_tips": []
  }
  ...
}
```

### Resources

- [demo.backstack.com/](https://demo.backstack.com/reset-tips)
- [github.com/../ResetTips.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/user/ResetTips.vue)


