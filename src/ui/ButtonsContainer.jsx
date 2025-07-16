import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  margin: ${({ $active }) => $active && "1rem"};
  justify-content: ${({ $active }) => $active && "end"};
`;
export default function ButtonsContainer({ children, moreDetails = false }) {
  return <Buttons $active={moreDetails}>{children}</Buttons>;
}
