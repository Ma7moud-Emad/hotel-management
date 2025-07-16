import styled from "styled-components";
import OptionItem from "./OptionItem";

const SelectStyled = styled.select`
  width: 100%;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 0.5rem;
  &:hover,
  &:focus {
    outline: 0;
  }
`;
export default function Select({ defVal, setActiveSort, options }) {
  return (
    <SelectStyled
      name="sorting"
      defaultValue={defVal}
      onChange={(e) => setActiveSort(e.target.value)}
    >
      {options.map((option, index) => (
        <OptionItem name={option.name} value={option.value} key={index} />
      ))}
    </SelectStyled>
  );
}
