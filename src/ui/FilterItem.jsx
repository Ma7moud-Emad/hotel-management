import styled from "styled-components";

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
    font-size: ${({ $type }) => ($type == "booking" ? "10px" : ".8rem")};
  }
`;
export default function FilterItem({
  title,
  activeFilter,
  setActiveFilter,
  typeHeader,
}) {
  return (
    <TypeFilter
      $active={title === activeFilter}
      onClick={() => setActiveFilter(title)}
      $type={typeHeader}
    >
      {title}
    </TypeFilter>
  );
}
