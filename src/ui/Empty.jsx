import styled from "styled-components";

const Div = styled.div`
  grid-column: 1/-1;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  @media (min-width: 640px) {
    font-size: 2rem;
  }
`;

export default function Empty() {
  return <Div>not found items</Div>;
}
