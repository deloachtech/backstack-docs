# Changing Passwords

Allow users to change their password.


## Password rules

Passwords must be at least 8 characters long and cannot be the username.

## Change password

```http request
POST https://api.backstack.com/user/change-password
{
  "password": "new-password",
  "confirm": "new-password"
}
```

### Resources

- [demo.backstack.com/](https://demo.backstack.com/change-password)
- [github.com/../ChangePassword.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/user/ChangePassword.vue)

