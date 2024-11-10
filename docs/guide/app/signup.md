# Signing Up

Creates a new account and its first user.


## Prerequisites

Your application must have a sign-up URL defined in the dashboard settings. This URL serves as the base activation endpoint for the new accounts email link.

```text
Example link included in the activation email:
https://yourapp.com/signup?token={{token}}
```

## Is sign-up allowed?

Before starting the sign-up process, verify if new accounts are allowed. The session object provides an `app.allow_signup` boolean. If `false`, the app does not have any domains allowing for new accounts.

```js
// On your log-in page
if (session.app.allow_signup) {
    <a href="/signup">Sign Up</a>
}
```


## Initiate the sign-up

Provide a form for the user to submit the new account information.

```html
<form id="signup-form">
    <input type="text" name="account_title" placeholder="Account name" required>
    <input type="text" name="name" placeholder="Your name" required>
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <input type="email" name="email" placeholder="Email" required>
    <select name="country_id" required>
        <option value="US">United States</option>
        ...
    </select>
    <select name="domain_id" required>
        <option value="dom_1234567890">Government Agency</option>
        ...
    </select>
    <button type="submit">Sign up</button>
```

### Form data

See [app/locales](app-locales.md#countries) for retrieving a [selection list](../lists.md#selections) of countries for your HTML selection logic.

Make a call to the API to retrieve the domains available for sign up.

```http request
GET https://api.backstack.com/app/signup-domains
?collection=true
```

Returns a [collection list](../lists.md#collection) of domain values.
    
```json
[
  {
    "dom_1234567890": {
      "title":  "Government Agency",
      "description": "Government agency account type",
      "signup_help": "Select this account type..."
    }
  },
  ...
] 
```

Use the `description` and `signup_help` values to assist the user in selecting the appropriate account type.

### Resources

- [github.com/../signup/SelectDomain.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/components/SugnupSelectDomain.vue)


### Submit sign-up form

Submit the new account data to the API for processing. An activation email is sent to the new account user, containing a tokened link to the sign-up URL defined in the dashboard settings.


```http request
POST https://api.backstack.com/app/signup
{
  "domain_id": "dom_1234567890"
  "account_title": "Acme Corp",
  "name": "June Doe",
  "username": "junedoe",
  "password": "eomcpmdp2jp2ijvekklmlkm",
  "email": "junedoe@acmecorp.com",
  "country_id": "US"
}
```

An activation email with a tokened link is sent to the email address provided.


::: info
A successful response does not guarantee that the email was successfully delivered. The API only confirms that the email was accepted for delivery.
:::

### Resources

- [demo.backstack.com/app/signup](https://demo.backstack.com/app/signup)
- [github.com/../app/Signup.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/Signup.vue)




## Activate the sign-up

The link in the initial email includes a token that needs to be submitted to the API for sign-up activation.

```js
// Retrieve token from the incoming email link
var token = new URLSearchParams(window.location.hash).get('token');
```

Submit the token to the API for processing.

```http request
GET https://api.backstack.com/app/signup/:token
```

The response will include the associated IDs for your information. You can begin the login process with the new user.

```json
{
  "account_id": "act_1234567890",
  "user_id": "usr_1234567890",
  "domain_id": "dom_1234567890",
  "version_id": "ver_1234567890"
}
```

### Resources

- [github.com/../app/ActivateSignup.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/ActivateSignup.vue)



