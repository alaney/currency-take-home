import { Currency } from "@/types";
import React from "react";
import { Text } from "@chakra-ui/react";

interface SelectedCurrenciesProps {
  selectedCurrency1: Currency | null;
  selectedCurrency2: Currency | null;
}

const SelectedCurrencies: React.FC<SelectedCurrenciesProps> = ({ selectedCurrency1, selectedCurrency2 }) => {
  return (
    <div>
      <Text>{selectedCurrency1?.code || "Select a currency"}</Text>
      <Text>{selectedCurrency2?.code || "Select a currency"}</Text>
    </div>
  );
};

export default SelectedCurrencies;
