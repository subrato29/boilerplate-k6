'use strict'

import http from 'k6/http';
import { check } from 'k6';
import endpoints from '../config/endpoints.js'
import requestBody from '../testData/requestBody.js'
import authToken from '../config/authToken.js'
import scenarios from '../config/scenarios.js'

export const options = scenarios.batchReq

export default function () {
    const BEARER_TOKEN = authToken;

    const req1 = {
        method: 'GET',
        url: `${endpoints.baseUrl}/public/v2/users` ,
    };
    const req2 = {
        method: 'GET',
        url: `${endpoints.baseUrl}/public/v2/comments`,
    };
    const req3 = {
        method: 'POST',
        url: endpoints.getAllUsers,
        body: requestBody.create,
        params: {
            headers: BEARER_TOKEN,
        },
    };
    const responses = http.batch([req1, req2, req3]);
    check(responses[2], {
        'res.status == 201': (res) => res.status == 201,
    });
}
