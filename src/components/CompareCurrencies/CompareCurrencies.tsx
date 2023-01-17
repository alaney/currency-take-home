import { Currency } from "@/types";
import React, { useEffect, useState } from "react";
import { Button, Text, Tooltip } from "@chakra-ui/react";
import router from "next/router";
import { useCurrencyCodeQueryParameters } from "@/hooks/useCurrencyCodeQueryParameter";

interface SelectedCurrenciesProps {
  selectedCurrency1: Currency | null;
  selectedCurrency2: Currency | null;
}

const CompareCurrencies: React.FC<SelectedCurrenciesProps> = ({ selectedCurrency1, selectedCurrency2 }) => {
  const [currencyValue, setCurrencyValue] = useState(null);
  const { currencyCodeQueryParam1, currencyCodeQueryParam2 } = useCurrencyCodeQueryParameters();

  useEffect(() => {
    const compareFromURL = async () => {
      if (currencyCodeQueryParam1 && currencyCodeQueryParam2) {
        const comparison = await fetchComparison(currencyCodeQueryParam1, currencyCodeQueryParam2);
        setCurrencyValue(comparison[currencyCodeQueryParam2]);
      }
    };

    compareFromURL();
  }, [currencyCodeQueryParam1, currencyCodeQueryParam2]);

  const fetchComparison = async (currencyCode1: string, currencyCode2: string) => {
    const resp = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyCode1}/${currencyCode2}.json`
    );

    return await resp.json();
  };

  const compareCurrencies = async () => {
    if (!selectedCurrency1 || !selectedCurrency2) {
      return;
    }
    router.push(`?c1=${selectedCurrency1.code}&c2=${selectedCurrency2.code}`, undefined, { shallow: true });

    const comparison = await fetchComparison(selectedCurrency1.code, selectedCurrency2.code);
    setCurrencyValue(comparison[selectedCurrency2.code]);
  };

  return (
    <div>
      <Text>1</Text>
      <Text>{selectedCurrency1?.code || "Select a currency"}</Text>
      <Text>{currencyValue}</Text>
      <Text>{selectedCurrency2?.code || "Select a currency"}</Text>
      <Tooltip isDisabled={!!(selectedCurrency1 && selectedCurrency2)} label="Select 2 currencies to compare">
        <Button disabled={!selectedCurrency1 || !selectedCurrency2} onClick={compareCurrencies}>
          Compare
        </Button>
      </Tooltip>
    </div>
  );
};

export default CompareCurrencies;
