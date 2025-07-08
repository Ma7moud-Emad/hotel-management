import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
  }
`;
const Paragraph = styled.p`
  text-transform: capitalize;
  margin: 0;
  @media (min-width: 540px) {
    font-size: 2rem;
    font-weight: 700;
  }
`;
const Filters = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
const GroupFilters = styled.ul`
  display: flex;
  gap: 0.3rem;
  border: 1px solid;
  margin: 0;
  padding: 0.2rem;
  border-radius: 0.5rem;
`;
const TypeFilter = styled.li`
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: var(--color-brand-600);
    color: white;
  }
  color: ${(props) => props.$active && "white"};
  background-color: ${(props) => props.$active && "var(--color-brand-600)"};
  cursor: ${(props) => props.$active && "not-allowed"};
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const Sort = styled.select`
  width: 100%;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 0.5rem;
  &:hover,
  &:focus {
    outline: 0;
  }
`;
export default function CabinsHeader({
  activeFilter,
  setActiveFilter,
  activeSort,
  setActiveSort,
}) {
  return (
    <Header>
      <Paragraph>all Cabins</Paragraph>
      <Filters>
        <GroupFilters onClick={(e) => setActiveFilter(e.target.textContent)}>
          <TypeFilter $active={activeFilter === "all"}>all</TypeFilter>
          <TypeFilter $active={activeFilter === "no discount"}>
            no discount
          </TypeFilter>
          <TypeFilter $active={activeFilter === "with discount"}>
            with discount
          </TypeFilter>
        </GroupFilters>
        <form>
          <Sort
            name="sortWays"
            defaultValue={activeSort}
            onChange={(e) => setActiveSort(e.target.value)}
          >
            <option value="az">Sort by name (A-Z) </option>
            <option value="za">Sort by name (Z-A) </option>
            <option value="lPrice">Sort by price (low first) </option>
            <option value="hPrice">Sort by price (high first) </option>
            <option value="lCapacity">Sort by capacity (low first)</option>
            <option value="hCapacity">Sort by capacity (high first)</option>
          </Sort>
        </form>
      </Filters>
    </Header>
  );
}
