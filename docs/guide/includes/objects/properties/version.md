| Property | Type | Description |
| -------- | ---- | ----------- |
| `id` | String | The version ID. |
| `title` | String | The title of the version. |
| `description` | String | The description iof the version. |
| `tag` | String | The sort tag associated with the version. |
| `is_default` | Boolean |  Whether the version is the default when signing up. |
| `status` | String | The status of the version (`active` or `inactive`). An inactive version haa no accounts subscribed. |
| `features` | Array | An array of features included in the version. |
| `features.id` | String | The feature ID. |
| `features.title` | String | The title of the feature. |
| `features.human_id` | String | The human-readable ID. |
