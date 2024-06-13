---
title: App schemas
nextjs:
  metadata:
    title: App schemas
    description: All about application schemas.
---

Application schemas encapsulate all pre-authentication and feature distribution information necessary for your codebase to serve your these values directly from the client, without making API calls.

The API will handle the [login process](/docs/login) and provide a unique [Session object](/docs/sessions) for post-authentication logic processing.

---

## Creating app schemas

Use the Backstack dashboard to specify all elements of your application, then download the schema for integration into your codebase.

Schemas are compiled using values from various resources, and the dashboard alerts you when any changes impact an existing applications schema.

---

## Codebase implementation

Incorporate the schema values into your codebase using the method of your choice.

```js
// javascript
<script type="text/javascript" src="configs/app-schema.json"></script>

// react
import {app, uri} from '@/configs/app-schema.json'

...

console.log(app.title, uri.login)
```

---

## The App Schema object

{% partial file="objects/app-schema.md" /%}

---

## Extracting data from the schema

The schema is structured to offer valuable data with minimal file size. 

[//]: # (While this enhances efficiency, it can pose a challenge in gathering information.)


### Sign-up domain selection

Provide a select using the following logic. Show a help div and change the form action with the select onChange() event.

{% partial file="code/signup-domain.md" /%}



### User role assignment

The following logic will provide for a group of checkboxes when assigning roles.

{% partial file="code/role-assignment.md" /%}



### Version subscription

Provide radios to allow accounts to change versions. Indicate the current selection.

{% partial file="code/version-list.md" /%}



### Optional feature subscription

If the accounts version has optional features available, you'll want to offer methods for activating/deactivating them on your page.

{% partial file="code/optional-features.md" /%}



