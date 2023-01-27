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
                executor: executor.shared,
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
                executor: executor.perVu,
                vus: 10,
                iterations: 200,
                maxDuration: '30s',
            },
        },
    },
    batchReq: {
        batch: 5,
        batchPerHost: 5
    }
}