Running k6 test in k6 cloud
================================

Login to your account and Run the below command
----------------------
```
k6 login cloud -t 174226c3a961f473af0881cd46aca485b535fd6ce800e1386eba6fe460cb5d70

```

Running tests in k6 cloud
-----------------------------
- Cloud executed tests (k6 cloud)
```
k6 cloud script.js

```

- Local executed tests with streaming to cloud (k6 run -o cloud)
```
k6 run -o cloud script.js

```

Cloud address of remote execution
--------------------------------
```
https://app.k6.io/projects/3624170

```