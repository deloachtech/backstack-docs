
| Property | Type | Description |
| -------- | ---- | ----------- |
| `id` | String | The user ID. |
| `created` | Integer | The date the relationship was created. |
| `username` | String | The users log-in name. |
| `name` | String | The users real name. Required when creating the relationship. Read-only once the user logs in. |
|  `email` | String | The users email address. Required when creating the relationship. Read-only once the user logs in. |
| `avatar` | String | The URL for avatar image uploaded by the user. |
| `editable` | Boolean | Indicates if the system will accept edits on the particular user. |
| `roles` | Array | The role IDs assigned by the account to the user. |
| `roles_csv` | String | The roles assigned to the user in a comma separated string. |
| `last_login` | Integer | The timestamp of the users last log in for the account. |
