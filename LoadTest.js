import http from "k6/http";
import { sleep } from "k6";
import { check } from "k6";
export default function() {
  let res = http.get("http://checkout-legacyv2-api.checkout.svc/api/v2/Order/lastFiveOrder");
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
  sleep(1);
};