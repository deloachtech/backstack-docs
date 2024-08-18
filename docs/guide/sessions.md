# Sessions


Sessions are immutable objects created from online specifications and other distinctive values initiated during the login process. 

These objects receive dynamic updates through the outcomes of various processes. As online specifications evolve or application resources are modified, all affected sessions are updated in real-time.


## How it works

The initial session object is provided during the [log in process](login).

We recommend storing the session object on the browser itself, and updating it based on your applications use load and functionality (e.g. every _n_ minutes). The API monitors and caches environmental changes, so you can efficiently update it on every request if desired.

```sh
GET /v1/auth/session
```


## The Session object

<!--@include: includes/objects/session.md-->
<!--@include: includes/objects/properties/session.md-->


