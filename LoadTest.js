import http from "k6/http";
import { sleep } from "k6";

export default function() {
  http.get("http://checkout-legacyv2-api.checkout.svc/api/v2/Category/url");
  sleep(1);
};