'use strict'

import http from 'k6/http'
import { check, sleep } from 'k6'
import scenarios from '../config/scenarios.js'
import endpoints from '../config/endpoints.js'

export const options = scenarios.shared

export default function () {
    const res = http.get (endpoints.getAllUsers());
    check(res, {
        'is get status 200': (res) => res.status == 200
    })
    sleep (1);
}