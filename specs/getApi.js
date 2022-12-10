import http from 'k6/http'
import { sleep } from 'k6'
import concurrency from '../config/concurrency.js'
import endpoints from '../config/endpoints.js'

export const options = concurrency

export default function () {
    http.get (endpoints.getAllUsers());
    sleep (1);
}