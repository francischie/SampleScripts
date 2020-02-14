import http from "k6/http";
import { sleep, check } from "k6";



export default function() {
  
  let urls = [
    "Order/lastFiveOrder",
    "Category/url"
  ];

  for(var i = 0; i < urls.length; i++) {
    let res = http.get("http://checkout-legacyv2-api.checkout.svc/api/v2/" + urls[i]);
    check(res, {
      "status was 200": (r) => r.status == 200,
      "transaction time OK": (r) => r.timings.duration < 200
    });
  }
  sleep(1);

};