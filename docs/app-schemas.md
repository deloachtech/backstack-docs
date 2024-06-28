# Application Schemas

Application schemas encapsulate all pre-authentication information necessary for your codebase to serve these values directly from the client, without making API calls.

- App settings
- Sign up values
- Domain settings
- App versioning data
- RBAC

The API will handle the [login process](/login) and provide a unique [Session object](/sessions) for post-authentication logic processing.

## Creating app schemas

Use the Backstack dashboard to specify all elements of your application, then download the schema for integration into your codebase.

Schemas are compiled using values from various resources, and the dashboard alerts you when any changes impact an existing applications schema.

## Codebase implementation

Incorporate the schema values into your codebase using the method of your choice.

```js
<script type="text/javascript" src="configs/app-schema.json"></script>

// or

import { appSchema } from '@/configs/app-schema.json'
```

## The App Schema object

<!--@include: ./includes/objects/app-schema.md-->
<!--@include: ./includes/objects/properties/app-schema.md-->

## Extracting data from the schema

The schema is structured to offer valuable data with minimal file size.

### Sign-up domain selection

Provide a select using the following logic. Show a help div and change the form action with the select onChange() event.

<<< @/snippets/signup-domain.js

### User role assignment

The following logic will provide for a group of checkboxes when assigning roles.

<<< @/snippets/role-assignment.js

### Version subscription

Provide radios to allow accounts to change versions. Indicate the current selection.

<<< @/snippets/version-list.js

### Optional feature subscription

If the accounts version has optional features available, you'll want to offer methods for activating/deactivating them on your page.

<<< @/snippets/optional-features.js
