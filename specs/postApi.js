import http from 'k6/http'
import { sleep } from 'k6'
import concurrency from '../config/concurrency.js'
import endpoints from '../config/endpoints.js'
import authToken from '../config/authToken.js'
import { check } from 'k6'
import requestBody from '../testData/requestBody.js'

export const options = concurrency

export default function () {
    const res = http.post (endpoints.getAllUsers(), requestBody.create, {
        headers: authToken,
    })
    check(res, {
        'is status 201': (res) => res.status == 201
    })
    sleep (3);
}