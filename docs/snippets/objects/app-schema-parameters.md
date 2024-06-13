
| Property | Type | Description |
| - | - | - |
| `schema_version` | String | The version of the compiled schema. |
| `app.id` | String | The application ID. |
| `app.title` | String | The application title. |
| `app.description` | String | The application description. |
| `app.pub_key` | String | The Backstack public API key for the application. |
| `app.allow_signup` | Boolean | Whether there are domains configured for signup. Use this value to determine displaying signup information during login. |
| `domains` | Array | The application domains. Keys are domain IDs and values are domain details. |
| `domains[domain_id].title` | String |  The domain title. |
| `domains[domain_id].description` | String | The domain description. |
| `domains[domain_id].allow_signup` | Boolean |  Whether the domain allows public signup. |
| `domains[domain_id].signup_help` | String | The domain signup help. |
| `domains[domain_id].versions` | Array | An array of versions configured for the domain. Keys are version IDs and values are additional data. |
| `domains[domain_id].versions[version_id].title` | String | The version title. |
| `domains[domain_id].versions[version_id].description` | String | The version description. |
| `domains[domain_id].network` | Array | An array of domains configured as child domains. The `session.account.domain_id` will be able to create networked accounts in these domains. |
| `domains[domain_id].network[domain_id].monetized` | Boolean |  Whether the network allows fees. Use this value for displaying the fee percentage option during account network creation. |
| `optional_features.distribution[version_id]` | Array | Keys are version IDs and values are an array of feature IDs available optionally for the version. Use these values coupled with the `optional_features.list` data to compile an HTML list for managing account subscriptions. |
| `optional_features.list[feature_id].title` | String | The feature title. |
| `optional_features.list[feature_id].description` | String | The feature description. |
| `access[version.id]` | Array | Keys are the version IDs and values are an array of feature IDs and the assigned RBAC. |
| `access[version.id][feature_id]` | Array | Keys are role IDs and values access permissions. |
| `roles.distribution[version_id]` | Array | Keys are version IDs and values are an array of role IDs available for the version. Use these values coupled with the `roles.list` data to compile an HTML list for managing user roles. |
| `roles.list[role.id].title` | Array | The role title. |
| `roles.list[role.id].description` | Array | The role description. |
