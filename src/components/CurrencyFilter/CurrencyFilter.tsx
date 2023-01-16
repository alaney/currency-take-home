import useAppStore from "@/useAppStore";
import { Input, InputProps } from "@chakra-ui/react";
import React from "react";

interface CurrencyFilterProps extends InputProps {}

const CurrencyFilter: React.FC<CurrencyFilterProps> = (props) => {
  const store = useAppStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.setFilter(e.target.value);
  };

  return <Input onChange={onChange} {...props} />;
};

export default CurrencyFilter;
