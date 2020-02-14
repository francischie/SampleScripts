import http from "k6/http";
import { sleep, check } from "k6";



export default function() {
  
  let urls = [
    "Order/lastFiveOrder",
    "Category/url",
    "Category/name",
    "Inventory/1",
    "CouponInfo/3fff08e3-2138-40cd-befa-e6783deea312",
    "Product/1?languageCode=en-US",
    "Product?partNumber=DRB00077",
    "SalesTax/_ping",
    "Basket/CartCount/3fff08e3-2138-40cd-befa-e6783deea312",
    "Warehouse"
  ];

  for(var i = 0; i < urls.length; i++) {
    let res = http.get("http://checkout-legacyv2-api.checkout.svc/api/v2/" + urls[i]);
    check(res, {
      "status was 200": (r) => r.status == 200,
      "transaction time OK": (r) => r.timings.duration < 1000
    });
  }
  sleep(1);

};