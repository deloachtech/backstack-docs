# Access Control

Access control is available for various layers of the application schema.

* Application functionality
* Functional versioning
* Optional features
* Role Based Access Control (RBAC)


## How it works

Define your access control schemas using the Backstack dashboard. Validate within your codebase against the [session objects](app-session) `access` node to enforce _every_ aspect simultaneously.


### Request

```http request
GET https://api.backstack.com/app/session
```


### Response


```json
// session object
 {
  ...
  "access": {
    "payment-methods": "crud",
    "account-users": "r",
    "another-feature": "cr",
    ...
  },
  ...
}
```

### Validating access

Examples using the above response:

```js
// pseudocode

// Result is TRUE
if(hasAccess('payment-methods:d'))
   <button>Delete Payment Method</button>

// Result is FALSE
if(hasAccess('account-users:c'))
   <button>Add User</button>
```


Backstack employs the CRUD (Create, Read, Update, and Delete) permission methodology, representing the fundamental operations applicable to any model.



## Validation function


Create a function in your preferred language to validate feature access against the session `access` object.

```js
// Example access control function
//
// Usage:
// const requiredAccess = "*"; // Grant access to all users
// const sessionAccess = {feature1: "crud", feature2: "cr"};
//
// console.log(hasAccess('*', session.access)); // Output: true
// console.log(hasAccess('account-users:NotInAccessControl', session.access)); // Output: false
// console.log(hasAccess('unknown-feature:*', session.access)); // Output: false

export function hasAccess(requiredAccess, sessionAccess) {
  // Check if the requiredAccess is "*"
  if (requiredAccess === "*") {
      return true; // Grant access to all users
  }

  if (requiredAccess?.length > 0) {

      // Split the control string into individual features and their permissions
      const controlList = requiredAccess.split(',');

      // Iterate through each feature in the control string
      for (const control of controlList) {

          // requiredAccess could be "*,*,*" (e.g. combining '*' constants)
          if (control === "*") {
              return true; // Grant access to all users
          }

          // Split each feature and its permissions. If no permissions assume any.
          const [feature, permissions = "*"] = control.split(':');

          // Check if the feature exists in the sessionAccess object
          if (sessionAccess.hasOwnProperty(feature)) {
              // If permissions is "*", consider it as a wildcard and return true
              if (permissions === "*") {
                  return true;
              }

              // Check if the user's permissions include any of the required permissions
              for (const permission of permissions) {
                  if (sessionAccess[feature].includes(permission)) {
                      // If any permission is granted, return true
                      return true;
                  }
              }
          }
      }
  }

  // If none of the features have been found or none of the permissions match, return false
  return false;
}
```



## Resources

- [github.com/../session.js](https://github.com/deloachtech/backstack-demo/blob/main/src/session.js)
- [github.com/../router.js](https://github.com/deloachtech/backstack-demo/blob/main/src/router.js)
- [github.com/../hasAccess.js](https://github.com/deloachtech/backstack-demo/blob/main/src/utils/hasAccess.js)




