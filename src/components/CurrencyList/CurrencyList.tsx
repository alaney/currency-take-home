import { Currency } from "@/types";
import { CloseIcon } from "@chakra-ui/icons";
import { Center, Flex, Heading, IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";
import StyledCurrencyListItem from "../CurrencyListItem/CurrencyListItem.css";

interface CurrencyListProps {
  currencies: Currency[];
  className?: string;
  onCurrencyClicked: (currency: Currency) => void;
  selectedCurrency1: Currency | null;
  selectedCurrency2: Currency | null;
  onClearSelectionsClicked: () => void;
}

const CurrencyList: React.FC<CurrencyListProps> = ({
  currencies,
  className,
  onCurrencyClicked,
  selectedCurrency1,
  selectedCurrency2,
  onClearSelectionsClicked,
}) => {
  return (
    <>
      <Flex justify="space-between">
        <Heading as="h3" size="md" mt={2}>
          Currencies
        </Heading>
        {selectedCurrency1 || selectedCurrency2 ? (
          <Center>
            <Tooltip label="Clear selections">
              <IconButton
                onClick={onClearSelectionsClicked}
                colorScheme="red"
                aria-label="Clear selections"
                size="xs"
                icon={<CloseIcon />}
              />
            </Tooltip>
          </Center>
        ) : null}
      </Flex>
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
