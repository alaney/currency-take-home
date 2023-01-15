import { Currency, CurrencyResponse } from "@/types";
import useAppStore from "@/useAppStore";
import React, { PropsWithChildren, useEffect } from "react";

const CurrencyList: React.FC<PropsWithChildren> = () => {
  const store = useAppStore();

  useEffect(() => {
    const fetchCurrencies = async (): Promise<void> => {
      const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json");
      const currencyResp: CurrencyResponse = await response.json();
      const currencies: Currency[] = [];

      for (const key in currencyResp) {
        if (Object.prototype.hasOwnProperty.call(currencyResp, key)) {
          const name = currencyResp[key];
          currencies.push({ name, code: key });
        }
      }

      store.setCurrencies(currencies);
    };

    fetchCurrencies();
  }, []);

  return (
    <div>
      {store.currencies.map((c) => (
        <div key={c.code}>{c.name}</div>
      ))}
    </div>
  );
};

export default CurrencyList;
