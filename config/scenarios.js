import executor from './executor.js'

module.exports = {
  basic: {
    vus: 5,
    duration: '3s',
  },
  shared: {
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: executor.shared, // 200 / 10 = 20 iterations per vu, total 200 iteration
        vus: 10,
        iterations: 200,
        maxDuration: '30s',
      },
    },
  },
  perVu: {
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: executor.perVu, // 10 * 200 = 2000 iteration
        vus: 10,
        iterations: 200,
        maxDuration: '30s',
      },
    },
  },
  batchReq: {
    batch: 5,
    batchPerHost: 5,
  },
}
