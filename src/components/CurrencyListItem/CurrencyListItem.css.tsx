import styled from "styled-components";
import CurrencyListItem from "./CurrencyListItem";

const StyledCurrencyListItem = styled(CurrencyListItem)`
  height: 2rem;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;

export default StyledCurrencyListItem;
