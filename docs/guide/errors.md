# Errors
<!--@include: includes/alpha-note.md-->

The API uses conventional HTTP response codes to indicate the failure of a request. Codes in the `4xx` range indicate a request failed (i.e. a required parameter was omitted). Codes in the `5xx` range indicate a system error.

The API returns an error object with each unsuccessful request.

## Response

```json
// error object
{
  "error": {
    "url": "/v1/auth/login",
    "request_method": "post",
    "type": "user",
    "code": 400,
    "message": "Required values are missing.",
    "fields": {
      "username": "This value is required."
      "password": "This value is required."
    },
    "dev_message": "Unknown resource."
  }
}
```

| Property | Type | Description |
| --- | --- | --- |
| `error.url` | String | The URL the error was generated from. |
| `error.request_method` | String | The request method.Use this to evaluate your response message. |
| `error.type` | String | The error type. (See error type definitions for more information.) |
| `error.code` | Integer | The error code. (See error code definitions for more information.) |
| `error.message` | String | The error message. This value is always suitable for user feedback. When the error type is `user`, details are provided to assist the user in recovery. Otherwise, the generic "An error occurred. Please try again later." is provided. |
| `error.fields` | Array | An array of field names and their associated error messages for display in your form. |
| `error.dev_message` | string | A message that better explains the issue. |

## Error types

You can also evaluate the error by checking the `error.type`. All errors are categorized by one of the following types.

| Type | Description |
| --- | --- |
| `user` | An error occurred as a result of user provided values (e.g. invalid password, required data missing). |
| `codebase` | The request was invalid or missing required parameters that could not be provided by the user (e.g. uri, api keys, record IDs). |
| `system` | System errors indicate there was a problem on our end. |

## Error codes

| Code | Type | Description |
| --- | --- | --- |
| `400` | Bad Request | The request was unacceptable, often due to missing a required parameter. |
| `401` | Unauthorized | Invalid API initialization. |
| `403` | Forbidden | The API key doesn't have permissions to perform the request. |
| `404` | Not Found | The requested resource doesn't exist. |
| `429` | Too Many Requests | Too many requests hit the API too quickly. |
| `500` | Server Errors | Something went wrong on our end. |
