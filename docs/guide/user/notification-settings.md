# User Notification Settings

Allow users to manage their notification settings.


## Retrieve notification settings

```http request
GET https://api.backstack.com/user/notification-settings
```

Returns a [collection list](lists.md#collection) of notification settings available for the current user.

```json
[
  {
    "id": "expired-card",
    "title": "Expired payment method",
    "description": "Alerts you when a payment method has expired.",
    "email": true,
    "app": true,
    "text": false
  },
  ...
]
```

### Resources

- [demo.backstack.com/user/notification-settings](https://demo.backstack.com/user/notification-settings)
- [github.com/../UserNotificationSettings.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/user/notification-settings/UserNotificationSettings.vue)



## Update notification settings

You can update one or more notification settings. It's easier to update all settings at once.

```http request 
POST https://api.backstack.com/user/notification-settings
{
    "expired-card": {
        "email": false,
        "app": true,
        "text": false
    },
    ...
}
```

### Resources

- [demo.backstack.com/](https://demo.backstack.com/manage-notifications)
- [github.com/../ManageNotifications.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/user/ManageNotifications.vue)


