import { Currency, CurrencyResponse } from "@/types";

export const fetchCurrencies = async (): Promise<Currency[]> => {
  const response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json");
  const currencyResp: CurrencyResponse = await response.json();
  const currencies: Currency[] = [];

  for (const key in currencyResp) {
    if (Object.prototype.hasOwnProperty.call(currencyResp, key)) {
      const name = currencyResp[key];
      currencies.push({ name, code: key });
    }
  }

  return currencies;
};
