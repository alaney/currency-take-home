import { Currency, CurrencyResponse } from "@/types";
import useAppStore from "@/useAppStore";
import { Button } from "@chakra-ui/react";
import React, { PropsWithChildren, useEffect, useState } from "react";
import StyledCurrencyList from "../CurrencyList/CurrencyList.css";
import SelectedCurrencies from "../SelectedCurrencies/SelectedCurrencies";
import { fetchCurrencies } from "./utils";

const CurrencyListContainer: React.FC<PropsWithChildren> = () => {
  const pageSize = 20;
  const store = useAppStore();
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>([]);
  const [page, setPage] = useState(1);
  const [pageOfCurrencies, setPageOfCurrencies] = useState<Currency[]>([]);
  const [selectedCurrency1, setSelectedCurrency1] = useState<Currency | null>(null);
  const [selectedCurrency2, setSelectedCurrency2] = useState<Currency | null>(null);

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

  // Fetch and place currencies on state upon first render.
  useEffect(() => {
    const setupCurrencies = async (): Promise<void> => {
      const currencies = await fetchCurrencies();
      setCurrencies(currencies);
      setFilteredCurrencies(currencies);
    };

    setupCurrencies();
  }, []);

  const onPrevClick = () => {
    setPage(page - 1);
  };

  const onNextClick = () => {
    setPage(page + 1);
  };

  const onCurrencyClicked = (currency: Currency) => {
    if (selectedCurrency1 && selectedCurrency2) {
      // no op
    } else if (!selectedCurrency1) {
      setSelectedCurrency1(currency);
    } else {
      setSelectedCurrency2(currency);
    }
  };

  return (
    <>
      <SelectedCurrencies selectedCurrency1={selectedCurrency1} selectedCurrency2={selectedCurrency2} />
      <StyledCurrencyList
        currencies={pageOfCurrencies}
        onCurrencyClicked={onCurrencyClicked}
        selectedCurrency1={selectedCurrency1}
        selectedCurrency2={selectedCurrency2}
      />
      <div data-cy="pager">
        <Button mr={4} onClick={onPrevClick} disabled={page === 1}>
          Prev
        </Button>
        <span>{`Page ${page} of ${Math.ceil(filteredCurrencies.length / pageSize)}`}</span>
        <Button ml={4} onClick={onNextClick} disabled={page * pageSize >= filteredCurrencies.length}>
          Next
        </Button>
        <Button>Compare</Button>
      </div>
    </>
  );
};

export default CurrencyListContainer;
