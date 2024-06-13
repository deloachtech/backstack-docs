<script setup>
import CustomComponent from 'components/Foo.vue'
</script>

# Account

The current session account.


## The Account object

{% partial file="objects/account.md" /%}



## Create an account

Accounts are created using the [sign-up](/docs/signup) and [account network](/docs/account-networking) workflows.



## Read an account

Retrieves the current session Account object.

### Request 

```shell
GET /v1/auth/account
```

### Response

The Account object.

:::tip
You can read the `session.account` to get an extended version of the account object.
:::


## Update an account

Updates the current session Account object.

### Request

```shell
POST /v1/auth/account
{
  "title": "Acme Corp"
  ...
}
```

{% table %}
* Parameter
* Type
* Note
---
* `title`
* Required string
* 
---
* `address`
* Optional string
* 
---
* `city`
* Optional string
* 
---
* `state`
* Optional string
* 
---
* `zip`
* Optional string
* 
---
* `phone`
* Optional string
* 
---
* `url`
* Required string
* 
---
* `contact_name`
* Required string
* 
---
* `contact_email`
* Optional string
* 
---
* `timezone_id`
* Optional string
* See the [timesones](/docs/timezones) resource for more information.
---
* `country_id`
* Required string
* See the [countries](/docs/countries) resource for more information.
{% /table %}

{% partial file="update-note.md" /%}

### Response

The Account object.

---

## Delete an account

Deletes an account and expires the session.

### Request

```shell
DELETE /v1/auth/account
```

### Response

Returns the deleted account `id`.

