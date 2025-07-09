import styled from "styled-components";
import Spinner from "./Spinner";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
`;

export default function Loading() {
  return (
    <Container>
      <Spinner />
      Loading...
    </Container>
  );
}
