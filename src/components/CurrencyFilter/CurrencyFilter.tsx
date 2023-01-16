import useAppStore from "@/useAppStore";
import { Input } from "@chakra-ui/react";
import React from "react";

const CurrencyFilter: React.FC = () => {
  const store = useAppStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.setFilter(e.target.value);
  };

  return <Input onChange={onChange} />;
};

export default CurrencyFilter;
