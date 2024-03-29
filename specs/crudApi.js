'use strict'

import http from 'k6/http'
import { check, sleep } from 'k6'
import scenarios from '../config/scenarios.js'
import endpoints from '../config/endpoints.js'
import authToken from '../config/authToken.js'
import requestBody from '../testData/requestBody.js'

export const options = scenarios.basic

export default function () {
  const ENDPOINT = endpoints.getAllUsers
  const BEARER_TOKEN = authToken

  let res = http.post(ENDPOINT, requestBody.create, {
    headers: BEARER_TOKEN,
  })
  check(res, {
    'is create status 201': (res) => res.status == 201,
  })

  const id = res.json().id
  const endpointWithId = `${ENDPOINT}/${id}`
  res = http.put(endpointWithId, requestBody.update, {
    headers: BEARER_TOKEN,
  })
  check(res, {
    'is update status 200': (res) => res.status == 200,
  })

  res = http.del(endpointWithId, null, {
    headers: BEARER_TOKEN,
  })
  check(res, {
    'is delete status 204': (res) => res.status == 204,
  })
  sleep(3)
}
