boilerplate-k6
------------------------------
```
This is a performance testing framework

Tool used: Grafana k6

Author: Subrato Sarkar

````

What is `k6`?
-----------------------------------
```
Grafana `k6` is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible.

Using k6, you can test the reliability and performance of your systems and catch performance regressions and problems earlier. k6 will help you to build resilient and performant applications that scale.

k6 is developed by Grafana Labs and the community.

K6 does not run in NodeJS.

```

Executors
------------------------------
```
Executors are the workhorses of the k6 execution engine. Each one schedules VUs and iterations differently, and you'll choose one depending on the type of traffic you want to model to test your services.

- `Shared iterations`
    A fixed amount of iterations are "shared" between a number of VUs. The test ends once all iterations are executed.
    Iterations are not guaranteed to be evenly distributed with this executor. VU that executes faster will complete more iterations than slower VUs. 
    - When to use
        This executor is suitable when you want a specific amount of VUs to complete a fixed number of total iterations, and the amount of iterations per VU is not important. 

- `Per VU iterations`
    Each VU executes an exact number of iterations. The total number of completed iterations will be vus * iterations.
    - When to use
        Use this executor if you need a specific amount of VUs to complete the same amount of iterations. This can be useful when you have fixed sets of test data that you want to partition between VUs.
        
```

Official documentation
-----------------------------------
```
https://k6.io/docs/

```

Installation
--------------------------------
```
For macOS, using Homebrew
`brew install k6`

```

Run in local
--------------------------
```
`npm run perf`

```

Run in k6 cloud
-------------------------
```
`npm run cloud`
```

Local run
--------------------------
```
Locally k6 run on `6565` port
`http://127.0.0.1:6565/`

If user wants to run different port, the port can be passed as argument as below
`k6 run script.js -- address=:5050`

```

What is batch( requests )
------------------------------
```
Batch multiple HTTP requests together to issue them in parallel over multiple TCP connections.

```

Thresholds
------------------
```
Thresholds are the pass/fail criteria that you define for your test metrics. If the performance 
of the system under test (SUT) does not meet the conditions of your threshold, the test will finish 
with a failed status.

```