import { Currency } from "@/types";
import React from "react";
import StyledCurrencyListItem from "../CurrencyListItem/CurrencyListItem.css";

interface CurrencyListProps {
  currencies: Currency[];
  className?: string;
}

const CurrencyList: React.FC<CurrencyListProps> = ({ currencies, className }) => {
  return (
    <div className={className}>
      {currencies.map((c) => (
        <StyledCurrencyListItem currency={c} key={c.code} />
      ))}
    </div>
  );
};

export default CurrencyList;
