import router from "next/router";
import { useEffect, useState } from "react";

export function useCurrencyCodeQueryParameters() {
  const [currencyCodeQueryParam1, setCurrencyCodeQueryParam1] = useState("");
  const [currencyCodeQueryParam2, setCurrencyCodeQueryParam2] = useState("");

  useEffect(() => {
    if (router.query.c1 && router.query.c2) {
      const c1 = router.query.c1;
      const c2 = router.query.c2;

      if (c1 && c2) {
        setCurrencyCodeQueryParam1(c1.toString());
        setCurrencyCodeQueryParam2(c2.toString());
      }
    }
  }, [router.query.c1, router.query.c2]);

  return { currencyCodeQueryParam1, currencyCodeQueryParam2 };
}
