import styled from "styled-components";
import Select from "./Select";
import Filters from "./Filters";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
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
const Container = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export default function FeatureHeader({
  activeFilter,
  setActiveFilter,
  activeSort,
  setActiveSort,
  title,
  options,
  filters,
  typeHeader,
}) {
  return (
    <Header>
      <Paragraph>{title}</Paragraph>
      <Container>
        <Filters
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          typeHeader={typeHeader}
        />
        <form>
          <Select
            defVal={activeSort}
            setActiveSort={setActiveSort}
            options={options}
          />
        </form>
      </Container>
    </Header>
  );
}
