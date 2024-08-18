# Version Assignment

Offer an interface for users to modify their application version.



## Allowing accounts to select versions

The app schema contains versions relevant to the accounts domain. The `domains.[session.account.domain_id]` is an array of version IDs and their values contain the version information.

```json
// app schema object
{
  ...
  "dom_1234567890": {
    "ver_1234567890": {
      "title": "Basic",
      "description": "Everything needed to get started."
    },
    ...
  },
  ...
}
```

The following will provide values for a group of radios for allowing selection of the application version.

<!--@include: includes/version-list.md-->



### Request

Submit the selected version ID to the API for processing.

```sh
POST /v1/account/versions/:version_id
```

### Response

The selected Version object.

<!--@include: includes/objects/version.md-->
<!--@include: includes/objects/properties/version.md-->


