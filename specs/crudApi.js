'use strict'

import http from 'k6/http'
import { check, sleep } from 'k6'
import concurrency from '../config/concurrency.js'
import endpoints from '../config/endpoints.js'
import authToken from '../config/authToken.js'
import requestBody from '../testData/requestBody.js'

export const options = concurrency

export default function () {
    const ENDPOINT = endpoints.getAllUsers();
    const BEARER_TOKEN = authToken;

    let res = http.post (ENDPOINT, requestBody.create, {
        headers: BEARER_TOKEN,
    })
    check(res, {
        'is create status 201': (res) => res.status == 201
    })
    const id = res.json().id;
    res = http.put (`${ENDPOINT}/${id}`, requestBody.update, {
        headers: BEARER_TOKEN,
    })
    check(res, {
        'is update status 200': (res) => res.status == 200
    })
    res = http.del (`${ENDPOINT}/${id}`, {
        headers: BEARER_TOKEN,
    })
    check(res, {
        'is delete status 404': (res) => res.status == 404
    })
    sleep (3);
}