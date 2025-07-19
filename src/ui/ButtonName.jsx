import styled from "styled-components";

const Span = styled.span`
  font-size: 1rem;
  @media (max-width: 800px) {
    display: ${({ $active }) => $active && "none"};
  }
`;
export default function ButtonName({ children, done = true }) {
  return <Span $active={done}>{children}</Span>;
}
