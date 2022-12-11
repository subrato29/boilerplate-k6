'use strict'

import http from 'k6/http'
import { sleep } from 'k6'
import concurrency from '../config/concurrency.js'
import endpoints from '../config/endpoints.js'
import authToken from '../config/authToken.js'
import { check } from 'k6'
import requestBody from '../testData/requestBody.js'

export const options = concurrency

export default function () {
    const ENDPOINT = endpoints.getAllUsers();
    let res = http.post (ENDPOINT, requestBody.create, {
        headers: authToken,
    })
    check(res, {
        'is create status 201': (res) => res.status == 201
    })
    const ID_KEY = res.json().id;
    res = http.put (`${ENDPOINT}/${ID_KEY}`, requestBody.update, {
        headers: authToken,
    })
    check(res, {
        'is update status 200': (res) => res.status == 200
    })
    res = http.del (`${ENDPOINT}/${ID_KEY}`, {
        headers: authToken,
    })
    check(res, {
        'is delete status 404': (res) => res.status == 404
    })
    sleep (3);
}