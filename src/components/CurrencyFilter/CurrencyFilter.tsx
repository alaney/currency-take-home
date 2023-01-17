import useAppStore from "@/useAppStore";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputGroupProps, InputLeftElement, InputProps } from "@chakra-ui/react";
import React from "react";

interface CurrencyFilterProps extends InputGroupProps {}

const CurrencyFilter: React.FC<CurrencyFilterProps> = (props) => {
  const store = useAppStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.setFilter(e.target.value);
  };

  return (
    <InputGroup {...props}>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input onChange={onChange} />;
    </InputGroup>
  );
};

export default CurrencyFilter;
