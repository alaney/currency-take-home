import { Currency, CurrencyResponse } from "@/types";
import useAppStore from "@/useAppStore";
import { Button } from "@chakra-ui/react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import CurrencyList from "./CurrencyList";

const CurrencyListContainer: React.FC<PropsWithChildren> = () => {
  const pageSize = 20;
  const store = useAppStore();
  const [page, setPage] = useState(1);
  const [pageOfCurrencies, setPageOfCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const newPageOfCurrencies = store.currencies.slice(start, end);
    setPageOfCurrencies(newPageOfCurrencies);
  }, [page, store.currencies]);

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

  const onPrevClick = () => {
    setPage(page - 1);
  };

  const onNextClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <CurrencyList currencies={pageOfCurrencies} />
      <div>
        <Button onClick={onPrevClick}>Prev</Button>
        {page}
        <Button onClick={onNextClick}>Next</Button>
      </div>
    </>
  );
};

export default CurrencyListContainer;
