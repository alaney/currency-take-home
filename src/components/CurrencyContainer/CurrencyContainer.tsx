import { Currency } from "@/types";
import React, { useEffect, useState } from "react";
import CurrencyListContainer from "../CurrencyListContainer/CurrencyListContainer";
import { fetchCurrencies } from "./utils";

interface CurrencyContainerProps {}

const CurrencyContainer: React.FC<CurrencyContainerProps> = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  // Fetch and place currencies on state upon first render.
  useEffect(() => {
    const setupCurrencies = async (): Promise<void> => {
      const currencies = await fetchCurrencies();
      setCurrencies(currencies);
    };

    setupCurrencies();
  }, []);
  return (
    <>
      <CurrencyListContainer currencies={currencies} />
    </>
  );
};

export default CurrencyContainer;
