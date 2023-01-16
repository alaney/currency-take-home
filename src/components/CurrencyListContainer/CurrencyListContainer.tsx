import { Currency, CurrencyResponse } from "@/types";
import useAppStore from "@/useAppStore";
import { Button, filter } from "@chakra-ui/react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import CurrencyList from "./CurrencyList";

const CurrencyListContainer: React.FC<PropsWithChildren> = () => {
  const pageSize = 20;
  const store = useAppStore();
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>([]);
  const [page, setPage] = useState(1);
  const [pageOfCurrencies, setPageOfCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    if (store.filter) {
      const filteredCurrencies = currencies.filter(
        (c) =>
          c.code.toLowerCase().includes(store.filter.toLowerCase()) ||
          c.name.toLowerCase().includes(store.filter.toLowerCase())
      );
      setFilteredCurrencies(filteredCurrencies);
      setPage(1);
    } else {
      setFilteredCurrencies(currencies);
    }
  }, [store.filter, currencies]);

  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const newPageOfCurrencies = filteredCurrencies.slice(start, end);
    setPageOfCurrencies(newPageOfCurrencies);
  }, [page, filteredCurrencies]);

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

      setCurrencies(currencies);
      setFilteredCurrencies(currencies);
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
        <Button mr={4} onClick={onPrevClick} disabled={page === 1}>
          Prev
        </Button>
        <span>{`Page ${page} of ${Math.ceil(filteredCurrencies.length / pageSize)}`}</span>
        <Button ml={4} onClick={onNextClick} disabled={page * pageSize >= filteredCurrencies.length}>
          Next
        </Button>
      </div>
    </>
  );
};

export default CurrencyListContainer;
