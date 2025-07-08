import styled from "styled-components";
import Navbar from "./Navbar";

const StyledSidebar = styled.aside`
  background-color: var(--color-gray-0);
  padding: 3.2rem 0.5rem;
  border-right: 1px solid var(--color-gray-100);
  grid-row: 1/-1;
  @media (max-width: 786px) {
    padding: 1.4rem 0.5rem;
  }
`;
export default function Sidebar() {
  return (
    <StyledSidebar>
      <Navbar />
    </StyledSidebar>
  );
}
