import styled from "styled-components";

const Div = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: var(--color-gray-0);
`;

export default function Container({ children }) {
  return <Div>{children}</Div>;
}
