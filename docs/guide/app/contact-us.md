# Contact Us

Provide a simple way for users to contact you through your application.


## Prerequisites

Your application must have a contact email address defined in the dashboard settings. This email address is used as the recipient for all user messages submitted through the API.


## Process a contact form

Provide a form for the user to submit their message.

```html
<form id="contact-form">
    <input type="text" name="name" placeholder="Your name" required>
    <input type="email" name="email" placeholder="Email" required>
    <textarea name="message" placeholder="Your message" required></textarea>
    <button type="submit">Send Message</button>
</form>
```

Post the form content to the API for processing.

```http request
POST https://api.backstack.com/app/contact-us
{
    "name": "John Doe",
    "email": "jdoe@acme-corp.com",
    "message": "I have a question about..."
}
```
An email with the form data is sent to the defined contact email address for processing.


::: info
A successful response does not guarantee that the email was successfully delivered. The API only confirms that the email was accepted for delivery.
:::


### Resources

- [demo.backstack.com/app/contact-us](https://demo.backstack.com/app/contact-us)
- [github.com/../app/ContactUs.vue](https://github.com/deloachtech/backstack-demo/blob/main/src/views/app/ContactUs.vue)



