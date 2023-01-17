import { Currency } from "@/types";
import { Heading } from "@chakra-ui/react";
import React from "react";
import StyledCurrencyListItem from "../CurrencyListItem/CurrencyListItem.css";

interface CurrencyListProps {
  currencies: Currency[];
  className?: string;
  onCurrencyClicked: (currency: Currency) => void;
  selectedCurrency1: Currency | null;
  selectedCurrency2: Currency | null;
}

const CurrencyList: React.FC<CurrencyListProps> = ({
  currencies,
  className,
  onCurrencyClicked,
  selectedCurrency1,
  selectedCurrency2,
}) => {
  return (
    <>
      <Heading as="h3" size="md" mt={2}>
        Currencies
      </Heading>
      <hr />
      <div data-cy="currency-list" className={className}>
        {currencies.map((c) => (
          <StyledCurrencyListItem
            currency={c}
            key={c.code}
            onClick={onCurrencyClicked}
            selected={c.code === selectedCurrency1?.code || c.code === selectedCurrency2?.code}
          />
        ))}
      </div>
    </>
  );
};

export default CurrencyList;
