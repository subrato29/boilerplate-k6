import http from 'k6/http'
import { sleep } from 'k6'
import concurrency from '../config/concurrency.js'
import endpoints from '../config/endpoints.js'
import authToken from '../config/authToken.js'
import perfUtils from '../utils/perfUtils.js'
import { check } from 'k6'

const random = perfUtils.generateAlphaNumericNo(6);

const email = random + '@email.com';
const name = 'Cypress_Test_' + random;
const gender = 'male';
const status = 'active';

export const options = concurrency

export default function () {
    let requestBody = {
        "name" :  name,
        "gender" : gender,
        "email" : email,
        "status" : status
    }
    const res = http.post (endpoints.getAllUsers(), requestBody, {
        headers: authToken,
    })
    check(res, {
        'is status 201': (res) => res.status == 201
    })
    sleep (3);
}