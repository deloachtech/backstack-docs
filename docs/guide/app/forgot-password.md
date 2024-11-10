# Forgot Password

Enable users to reset their passwords during the log in process.


## Prerequisites

Your application must have a reset password URL defined in the dashboard settings. This URL serves as the base endpoint for the link included in the email sent to the user.

```text
Example link included in the reset password email:
https://yourapp.com/reset-password?token={{token}}
```

## Send reset password email

Provide a form for the user to submit their email address for account lookup.

```html
<form id="forgot-password-form">
    <input type="email" name="email" placeholder="Email" required>
    <button type="submit">Send email</button> 
</form>
```

Submit the email address to the API for processing.

```http request
POST https://api.backstack.com/app/forgot-password
{
    "email": "jdoe@acme-corp.com"
}
```
An email is sent to the user containing a tokened link back to your reset password page. Otherwise, an [error object](errors.md#error-object) is returned.


::: info
A successful response does not guarantee that the email was successfully delivered. The API only confirms that the email was accepted for delivery.
:::

### Resources

- [demo.backstack.com/app/forgot-password](https://demo.backstack.com/app/forgot-password)
- [github.com/../app/ForgotPassword.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/ForgotPassword.vue)



## Process reset password email

The link in the lookup user email includes a token that needs to be submitted with the new password.

```js
// Retrieve token from the incoming email link
var token = new URLSearchParams(window.location.hash).get('token');
```

Provide a form for the user to submit their new password and the token.

```html
<form id="reset-password-form">
    <input type="hidden" name="token" value="{{token}}">
    <input type="password" name="password" placeholder="New password" required>
    <input type="password" name="confirm" placeholder="Confirm password" required>
    <button type="submit">Reset my password</button>
</form>
```
 
Submit the new password values to the API for processing.

```http request
POST https://api.backstack.com/app/reset-password
{  
    "token": "123456789"
    "password": "newpassword"
    "confirm": "newpassword"
}
```

Upon success, the API will respond with the [user object](../user/user.md#user-object), and you can begin the [log in](login.md) process.


### Resources

- [demo.backstack.com/app/reset-password](https://demo.backstack.com/app/reset-password)
- [github.com/../app/ResetPassword.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/ResetPassword.vue)




## Pre-flight token check

You can verify the email token before presenting the user with the reset password form. This will save the user time if the token is invalid.


```js
// Retrieve token from the incoming email link
var token = new URLSearchParams(window.location.hash).get('token');
```

Submit the token to the API for verification.

```http request
GET https://api.backstack.com/app/reset-password/:token
```

Upon success, the API will respond with the token submitted, and you can present the reset password form.

```json
{
  "token": "123456789"
}
```



