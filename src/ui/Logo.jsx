import styled from "styled-components";
import logoImg from "/src/assets/logo-light.png";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  text-align: center;
`;
const Image = styled.img`
  height: 8rem;
  width: auto;
  @media (max-width: 786px) {
    height: 3rem;
  }
`;
export default function Logo() {
  return (
    <StyledLogo to="/">
      <Image src={logoImg} alt="Logo" />
    </StyledLogo>
  );
}
