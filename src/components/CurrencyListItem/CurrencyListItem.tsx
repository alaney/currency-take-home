import { Currency } from "@/types";
import React from "react";
import { Text } from "@chakra-ui/react";

interface CurrencyListItemProps {
  currency: Currency;
  className?: string;
}

const CurrencyListItem: React.FC<CurrencyListItemProps> = ({ currency, className }) => {
  return (
    <div className={className}>
      <Text>{currency.name || currency.code}</Text>
    </div>
  );
};

export default CurrencyListItem;
