boilerplate-k6
------------------------------
```
This is a performance testing framework

Tool used: Grafana k6

Author: Subrato Sarkar

````

What is k6?
-----------------------------------
```
Grafana k6 is an open-source load testing tool that makes performance testing easy and productive for engineering teams. k6 is free, developer-centric, and extensible.

Using k6, you can test the reliability and performance of your systems and catch performance regressions and problems earlier. k6 will help you to build resilient and performant applications that scale.

k6 is developed by Grafana Labs and the community.

K6 does not run in NodeJS.
```

Executors
------------------------------
```
Executors are the workhorses of the k6 execution engine. Each one schedules VUs and iterations differently, and you'll choose one depending on the type of traffic you want to model to test your services.

- Shared iterations
    A fixed amount of iterations are "shared" between a number of VUs. The test ends once all iterations are executed.
    Iterations are not guaranteed to be evenly distributed with this executor. VU that executes faster will complete more iterations than slower VUs. 

- Per VU iterations
    Each VU executes an exact number of iterations. The total number of completed iterations will be vus * iterations.
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
brew install k6

```

How to run
--------------------------
```
npm run perf

```