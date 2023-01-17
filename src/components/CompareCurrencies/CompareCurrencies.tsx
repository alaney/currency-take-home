import { Currency } from "@/types";
import React, { useEffect, useState } from "react";
import {
  Button,
  Center,
  Container,
  Flex,
  Stat,
  Text,
  StatGroup,
  StatLabel,
  StatNumber,
  Tooltip,
  Box,
} from "@chakra-ui/react";
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
    setCurrencyValue(null);
  }, [selectedCurrency1, selectedCurrency2]);

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
    <Container w="100%">
      <Box bg="tomato" w="100%" p={4} color="white">
        {!selectedCurrency1 && !selectedCurrency2 ? (
          <Text>Start selecting currencies to compare...</Text>
        ) : (
          <Flex>
            <StatGroup flexGrow={1}>
              <Stat>
                <StatLabel>{selectedCurrency1?.code.toUpperCase() || ""}</StatLabel>
                <StatNumber>{currencyValue ? "1" : ""}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>{selectedCurrency2?.code.toUpperCase() || "Select another"}</StatLabel>
                <StatNumber>{currencyValue || ""}</StatNumber>
              </Stat>
            </StatGroup>
            <Center flexBasis="50">
              <Tooltip isDisabled={!!(selectedCurrency1 && selectedCurrency2)} label="Select 2 currencies to compare">
                <Button
                  colorScheme="teal"
                  size="sm"
                  disabled={!selectedCurrency1 || !selectedCurrency2}
                  onClick={compareCurrencies}
                >
                  Compare
                </Button>
              </Tooltip>
            </Center>
          </Flex>
        )}
      </Box>
    </Container>
  );
};

export default CompareCurrencies;
