'use strict'

import http from 'k6/http'
import endpoints from '../config/endpoints.js'

export const options = {
  thresholds: {
    http_req_failed: ['rate < 0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95) < 900'], // 95% of requests should be below 200ms
  },
}

export default function () {
  http.get(endpoints.getAllUsers)
}
