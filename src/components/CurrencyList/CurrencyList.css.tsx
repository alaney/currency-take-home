import styled from "styled-components";
import CurrencyList from "./CurrencyList";

const StyledCurrencyList = styled(CurrencyList)`
  & :not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }
`;

export default StyledCurrencyList;
