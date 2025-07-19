import { Link } from "react-router-dom";
import styled from "styled-components";
import textBg from "./../assets/bg.jpg";

const Container = styled.div`
  transform: translateY(50%);
  text-align: center;
  @media (min-width: 768px) {
    width: 50%;
    margin: auto;
  }
`;
const Head1 = styled.h1`
  font-size: 6rem;
  margin: 0;
  background-image: url(${textBg});
  background-size: cover;
  background-clip: text;
  color: transparent;
`;
const Head4 = styled.h4`
  margin-bottom: 0;
  text-transform: uppercase;
  color: var(--color-gray-600);
`;
const P = styled.p`
  color: var(--color-gray-600);
  font-weight: 500;
  padding: 0 1rem;
  margin-top: 0;
  margin-bottom: 2rem;
  @media (min-width: 991px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Btn = styled(Link)`
  border: 1px solid;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-top: 3rem;
  display: block;
  width: fit-content;
  background-image: url(${textBg});
  margin: auto;
  color: var(--color-gray-300) !important;
  text-transform: capitalize;
`;
export default function PageNotFound() {
  return (
    <Container>
      <Head1>Oops!</Head1>
      <Head4>404 - page not found</Head4>
      <P>
        the page you are looking might have been removed had its name changed or
        is temporarily unavailable
      </P>
      <Btn to="/"> go back </Btn>
    </Container>
  );
}
