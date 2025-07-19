import styled from "styled-components";
import logoLight from "/src/assets/logo-light.png";
import logoDark from "/src/assets/logo-dark.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const StyledLogo = styled(Link)`
  text-align: center;
  display: block;
`;
const Image = styled.img`
  height: 6rem;
  width: auto;
  @media (max-width: 786px) {
    height: 3rem;
  }
`;
export default function Logo() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledLogo to="/">
      <Image src={isDarkMode ? logoDark : logoLight} alt="Logo" />
    </StyledLogo>
  );
}
