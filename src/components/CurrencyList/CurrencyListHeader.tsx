import { Currency } from "@/types";
import { CloseIcon } from "@chakra-ui/icons";
import { Center, ComponentWithAs, Flex, FlexProps, Heading, IconButton, Tooltip } from "@chakra-ui/react";
import React from "react";

interface CurrencyListHeaderProps {
  onClearSelectionsClicked: () => void;
  selectedCurrency1: Currency | null;
  selectedCurrency2: Currency | null;
}

const CurrencyListHeader: React.FC<CurrencyListHeaderProps> = ({
  selectedCurrency1,
  selectedCurrency2,
  onClearSelectionsClicked,
}) => {
  return (
    <Flex justify="space-between" mt={4} mb={1}>
      <Heading as="h3" size="md">
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
  );
};

export default CurrencyListHeader;
