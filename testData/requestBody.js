'use strict'

import perfUtils from '../utils/perfUtils.js'

const random = perfUtils.generateAlphaNumericNo(6)

const requestBody = {
  create: {
    name: 'Perf_Test_' + random,
    gender: 'male',
    email: random + '@email.com',
    status: 'active',
  },
  update: {
    name: 'Perf_Test_' + random + '_UPDATED',
    gender: 'male',
    email: random + '@email.com',
    status: 'active',
  },
}

module.exports = requestBody
