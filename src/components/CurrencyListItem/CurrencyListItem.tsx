import { Currency } from "@/types";
import React from "react";
import { Text } from "@chakra-ui/react";

interface CurrencyListItemProps {
  currency: Currency;
  className?: string;
  onClick: (currency: Currency) => void;
  selected: boolean;
}

const CurrencyListItem: React.FC<CurrencyListItemProps> = ({ currency, className, onClick }) => {
  return (
    <div className={className} onClick={() => onClick(currency)}>
      <Text>{currency.name || currency.code}</Text>
    </div>
  );
};

export default CurrencyListItem;
