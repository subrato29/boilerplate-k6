import http from 'k6/http'
import { sleep } from 'k6'
import concurrency from '../config/concurrency.js'
import urls from '../config/urls.js'

export const options = concurrency

export default function () {
    http.get (urls.getAllUsers);
    sleep (1);
}