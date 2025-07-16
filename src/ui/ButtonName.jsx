import styled from "styled-components";

const Span = styled.span`
  font-size: 1rem;
  @media (max-width: 800px) {
    display: none;
  }
`;
export default function ButtonName({ children }) {
  return <Span>{children}</Span>;
}
