import { Currency, CurrencyResponse } from "@/types";
import useAppStore from "@/useAppStore";
import { Button, Tooltip } from "@chakra-ui/react";
import router from "next/router";
import React, { PropsWithChildren, useEffect, useState } from "react";
import StyledCurrencyList from "../CurrencyList/CurrencyList.css";
import SelectedCurrencies from "../SelectedCurrencies/SelectedCurrencies";

interface CurrencyListContainerProps {
  currencies: Currency[];
}

const CurrencyListContainer: React.FC<PropsWithChildren<CurrencyListContainerProps>> = ({ currencies }) => {
  const pageSize = 20;
  const store = useAppStore();
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
    if (router.query["c1"] && router.query["c2"]) {
      const c1 = router.query["c1"];
      const c2 = router.query["c2"];
      const currency1 = currencies.find((c) => c.code === c1);
      const currency2 = currencies.find((c) => c.code === c2);

      if (currency1 && currency2) {
        setSelectedCurrency1(currency1);
        setSelectedCurrency2(currency2);
      }
    }
  }, [currencies]);

  useEffect(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const newPageOfCurrencies = filteredCurrencies.slice(start, end);
    setPageOfCurrencies(newPageOfCurrencies);
  }, [page, filteredCurrencies]);

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

  const compareCurrencies = () => {
    if (!selectedCurrency1 || !selectedCurrency2) {
      return;
    }
    router.push(`?c1=${selectedCurrency1.code}&c2=${selectedCurrency2.code}`, undefined, { shallow: true });
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
        <Tooltip isDisabled={!!(selectedCurrency1 && selectedCurrency2)} label="Select 2 currencies to compare">
          <Button disabled={!selectedCurrency1 || !selectedCurrency2} onClick={compareCurrencies}>
            Compare
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default CurrencyListContainer;
