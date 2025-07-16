import styled from "styled-components";
import FilterItem from "./FilterItem";

const GroupFilters = styled.ul`
  display: flex;
  gap: 0.3rem;
  border: 1px solid;
  margin: 0;
  padding: 0.2rem;
  border-radius: 0.5rem;
`;

export default function Filters({
  filters,
  activeFilter,
  setActiveFilter,
  typeHeader,
}) {
  return (
    <GroupFilters>
      {filters.map((item, index) => (
        <FilterItem
          typeHeader={typeHeader}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          title={item}
          key={index}
        />
      ))}
    </GroupFilters>
  );
}
