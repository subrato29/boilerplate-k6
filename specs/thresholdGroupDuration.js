'use strict'

import http from 'k6/http';
import { group, sleep } from 'k6';
import endpoints from '../config/endpoints.js';

export const options = {
  thresholds: {
    'group_duration{group:::individualRequests}': ['avg < 1500'],
    'group_duration{group:::batchRequests}': ['avg < 1500'],
  },
  vus: 1,
  duration: '10s',
};

export default function () {
  group('individualRequests', function () {
    http.get(`${endpoints.baseUrl}/public/v2/users`);
    http.get(`${endpoints.baseUrl}/public/v2/comments`);
    http.get(`${endpoints.baseUrl}/public/v2/posts`);
  });

  group('batchRequests', function () {
    http.batch([
      ['GET', `${endpoints.baseUrl}/public/v2/users`],
      ['GET', `${endpoints.baseUrl}/public/v2/comments`],
      ['GET', `${endpoints.baseUrl}/public/v2/posts`],
    ]);
  });

  sleep(1);
}
