import styled from "styled-components";
import CurrencyListItem from "./CurrencyListItem";

const StyledCurrencyListItem = styled(CurrencyListItem)`
  height: 2rem;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
  background-color: ${(props) => (props.selected ? "blue" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
`;

export default StyledCurrencyListItem;
