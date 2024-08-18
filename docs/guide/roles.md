# Roles

A role serves as a container for permission-based application feature access. A single user may be assigned multiple roles, allowing access to various features.

As a developer, you won't need to worry about RBAC within your codebase. These restrictions have been pre-determined and integrated into the feature access layer.



## Defining roles

Roles are fully managed using the Backstack dashboard, including assigning permission-based [feature](features) access.


::: tip
Gradually expand your role library by adding new roles as you develop for different domains. Keep in mind that app schemas include only the roles relevant to the application.
:::

### Example roles

The roles below can be applied to nearly any application. 

| Role | Description |
| --- | --- |
| `Super User` | Grant full access to everything. Designate this role as the default for new account creation. |
| `System Administrator` | Grant access to almost everything with `r`ead access to all features. |
| `CEO` |  Grant `r`ead-only access to everything and assign other roles for specific resource management. |
| `Clerk` | A good general role for multi-feature access. |
| `Finance Manager` |  Grant `c`reate, `r`ead and `u`pdate access to finance related features. Let the Super User or System Admin `d`elete sensitive records. |
|  `Finance Clerk` | Assistant ot the Finance Manager. |

## Granting feature access

Grant permission-based feature access to roles using the Backstack dashboard. Once defined, these schemas are available for use on any application. 

See the [access control](access-control) page for additional information.


## Assigning roles to users

Manage your roles and feature access configurations through the Backstack dashboard. Assign roles to users using your user interface, leveraging pre-configured app schema data and the API.

<!--@include: includes/role-assignment.md-->


See the [account users workflow](account-users) for more information.

