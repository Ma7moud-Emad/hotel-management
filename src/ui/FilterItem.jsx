import styled from "styled-components";

const TypeFilter = styled.li`
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.2rem;
  border-radius: 0.3rem;
  transition: 0.3s;
  &:hover,
  &:focus {
    background-color: var(--color-brand-600);
    color: var(--color-gray-0);
  }
  color: ${(props) => props.$active && "var(--color-gray-0)"};
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
