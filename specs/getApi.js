import http from 'k6/http'
import { sleep } from 'k6'
import concurrency from '../config/concurrency.js'

export const options = {
    vus: concurrency.vus,
    duration: concurrency.duration,
}

export default function () {
    http.get ('https://gorest.co.in/public/v2/users');
    sleep (1);
}