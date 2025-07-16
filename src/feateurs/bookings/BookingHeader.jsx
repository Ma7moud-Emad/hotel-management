import styled from "styled-components";
import Status from "./Status";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin: ${({ $active }) => $active && "1rem"};
`;
const P = styled.p`
  margin: 0;
  font-weight: 600;
  text-transform: capitalize;
`;
export default function BookingHeader({ booking, moreDetails = false }) {
  return (
    <Header $active={moreDetails}>
      <P>booking #{booking.id}</P>
      <Status title={booking.status} />
    </Header>
  );
}
