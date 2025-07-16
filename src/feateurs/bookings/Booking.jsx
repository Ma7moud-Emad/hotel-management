import { useQuery } from "@tanstack/react-query";
import StayInfo from "./StayInfo";
import styled from "styled-components";
import CabinInfo from "./CabinInfo";
import { getCabin } from "../../servies/cabinsActions";
import getGuest from "../../servies/guestActions";
import GuestInfo from "./GuestInfo";
import Loading from "../../ui/Loading";
import BookingHeader from "./BookingHeader";
import Btns from "./Btns";

const Container = styled.div`
  background-color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function Booking({ booking }) {
  // fetch cabin form #ID >>> booking.cabinId
  const { data: cabinInfo, isPending: cabinLoading } = useQuery({
    queryKey: ["booking", booking.cabinId],
    queryFn: () => getCabin(booking.cabinId),
  });

  // fetch guest
  const { data: guestInfo, isPending: guestLoading } = useQuery({
    queryKey: ["guest", booking.guestId],
    queryFn: () => getGuest(booking.guestId),
  });

  if (cabinLoading && guestLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <BookingHeader booking={booking} />

      {!cabinLoading && <CabinInfo cabin={cabinInfo} />}

      {!guestLoading && <GuestInfo guest={guestInfo} />}

      <StayInfo booking={booking} />
      <Btns booking={booking} />
    </Container>
  );
}
