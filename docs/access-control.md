
# Access Control


Considered the flagship aspect of the Backstack architecture, extremely simplified access control can be achieved with minimal codebase intrusion across multiple layers of specifications simultaneously.


## How it works

The computed `access` values specific to the active user are included in the current [Session object](/docs/sessions) for your processing.

::: tip
Backstack employs the CRUD permission methodology, which stands for Create, Read, Update, and Delete – representing the fundamental operations applicable to any model.
:::

Validating feature access is the only requirement necessary to enforce every layer of the application environment. Backstack incorporates the application's domain, version and optional feature settings when compiling the `session.access` values.

### Request

```shell
GET v1/auth/session
```

### Response

```js
// session object
 {
  ...
  "access": {
    "payment-methods": "crud",
    "another-feature": "r"
    ...
  }
  ...
}
```


## The architecture

![Image](/images/diagrams/access-control.svg)

Examples using the above schema:

```js
// pseudocode

// Result is TRUE, as the current account is subscribed to
// the Coupons optional feature and the current user has the 
// ability to delete a coupon through the Accounting role.

if hasAccess('coupons:d')
   <button>Delete Coupon</button>


// Result is FALSE, as the current version does
// not have access to the Templates feature.

if hasAccess('templates:*')
   <button>Manage Templates</button>
```


## Validating access

Create a function in your preferred language to validate feature access based on the computed results provided in the current Session object.


```js
// Example access control function

function hasAccess(controlString, accessGranted) {
    // Check if the controlString is "*"
    if (controlString === "*") {
        return true; // Grant access to all users
    }

    // Split the control string into individual features and their permissions
    const controlList = controlString.split(',');

    // Iterate through each feature in the control string
    for (const control of controlList) {
        // Split each feature and its permissions
        const [feature, permissions] = control.split(':');

        // Check if the feature exists in the accessGranted object
        if (accessGranted.hasOwnProperty(feature)) {
            // If permissions is "*", consider it as a wildcard and return true
            if (permissions === "*") {
                return true;
            }

            // Check if the user's permissions include any of the required permissions
            for (const permission of permissions) {
                if (accessGranted[feature].includes(permission)) {
                    // If any permission is granted, return true
                    return true;
                }
            }
        }
    }

    // If none of the features have been found or none of the permissions match, return false
    return false;
}

// Example usage:
const controlString = "*"; // Grant access to all users
const accessGranted = {feature1: "crud", feature3: "cr"};

const userHasAccess = hasAccess(controlString, accessGranted);
console.log(userHasAccess); // Output: true
```



