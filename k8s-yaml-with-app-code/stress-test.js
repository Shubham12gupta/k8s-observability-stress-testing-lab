import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },  // ramp-up
    { duration: '1m', target: 50 },   // normal load
    { duration: '1m', target: 200 },  // stress load
    { duration: '30s', target: 0 },   // ramp-down
  ],
};

export default function () {
  const res = http.get('http://139.162.1.111:30007');

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
