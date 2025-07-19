import { LiaHourglassEndSolid, LiaHourglassStartSolid } from "react-icons/lia";
import formateDate from "../../utils/helpers";
import styled from "styled-components";
import { HiOutlineHomeModern } from "react-icons/hi2";

const Container = styled.div`
  margin-bottom: 1rem;
  display: ${({ $active }) => $active && "flex"};
  flex-direction: ${({ $active }) => $active && "column"};
  justify-content: ${({ $active }) => $active && "space-between"};
  color: ${({ $active }) => $active && "#f9fafb"};
  background-color: ${({ $active }) => $active && "var(--color-brand-500)"};
  padding: ${({ $active }) => $active && "1rem"};
  border-radius: ${({ $active }) => $active && ".5rem .5rem 0 0"};
  @media (min-width: 800px) {
    flex-direction: ${({ $active }) => $active && "row"};
  }
`;
const P = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  text-transform: capitalize;
  font-size: ${({ $active }) => $active && "1.5rem"};
  font-weight: ${({ $active }) => $active && "600"};
`;
const Time = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--color-gray-400);
  font-size: 11px;
  color: ${({ $active }) => $active && "#f9fafb"};
`;
export default function StayInfo({ booking, moreDetails = false }) {
  return (
    <Container $active={moreDetails}>
      <P $active={moreDetails}>
        {moreDetails && <HiOutlineHomeModern />}
        {booking.numNights} night stay
      </P>
      <Time $active={moreDetails}>
        <P>
          {!moreDetails && <LiaHourglassStartSolid />}
          <span>{formateDate(booking.startDate)}</span>
        </P>
        <P>
          {!moreDetails && <LiaHourglassEndSolid />}
          <span>{formateDate(booking.endDate)}</span>
        </P>
      </Time>
    </Container>
  );
}
