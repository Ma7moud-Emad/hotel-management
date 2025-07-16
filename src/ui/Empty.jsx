import styled from "styled-components";

const Div = styled.div`
  grid-column: 1/-1;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export default function Empty() {
  return <Div>not found items</Div>;
}
