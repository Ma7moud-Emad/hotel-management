import styled from "styled-components";
import Spinner from "./Spinner";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  height: ${(props) => props.$h};
`;

export default function Loading({ h }) {
  return (
    <Container $h={h}>
      <Spinner />
      Loading...
    </Container>
  );
}
