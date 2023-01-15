import { Currency } from "@/types";
import React from "react";

interface CurrencyListProps {
  currencies: Currency[];
}

const CurrencyList: React.FC<CurrencyListProps> = ({ currencies }) => {
  return (
    <>
      {currencies.map((c) => (
        <div key={c.code}>{c.name || c.code}</div>
      ))}
    </>
  );
};

export default CurrencyList;
