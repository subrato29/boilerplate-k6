import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
    vus: 10,
    duration: '10s',
}

export default function () {
    http.get ('https://gorest.co.in/public/v2/users');
    sleep (1);
}