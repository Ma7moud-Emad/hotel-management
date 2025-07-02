import styled from "styled-components";
import logoImg from "/src/assets/logo-light.png";

const StyledLogo = styled.div`
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
    <StyledLogo>
      <Image src={logoImg} alt="Logo" />
    </StyledLogo>
  );
}
