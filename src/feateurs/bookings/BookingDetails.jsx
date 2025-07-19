import { useParams } from "react-router-dom";
import { getBooking } from "../../servies/bookingAction";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../ui/Loading";
import { getCabin } from "../../servies/cabinsActions";
import BookingHeader from "./BookingHeader";
import styled from "styled-components";
import StayInfo from "./StayInfo";
import GuestInfo from "./GuestInfo";
import getGuest from "../../servies/guestActions";
import CabinInfo from "./CabinInfo";
import TotalPrice from "./TotalPrice";
import Btns from "./Btns";
import BookingInfo from "./BookingInfo";

const Container = styled.div`
  background-color: var(--color-gray-0);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem;
`;
const Content = styled.div`
  padding: 0.5rem;
`;
const Div = styled.div`
  @media (min-width: 991px) {
    display: flex;
    justify-content: space-around;
  }
`;
export default function BookingDetails({ children }) {
  const { bookingId } = useParams();

  const { data: bookingData, isPending: bookingLoading } = useQuery({
    queryKey: ["booking#", bookingId],
    queryFn: () => getBooking(bookingId),
  });

  const { data: cabinData, isPending: cabinLoading } = useQuery({
    queryKey: ["cabin#"],
    queryFn: () => getCabin(bookingData.cabinId),
  });

  const { data: guestData, isPending: guestLoading } = useQuery({
    queryKey: ["guest#"],
    queryFn: () => getGuest(bookingData.guestId),
  });

  if (bookingLoading || cabinLoading || guestLoading) {
    return <Loading />;
  }
  return (
    <>
      <BookingHeader booking={bookingData} moreDetails={true} />
      <Container>
        <StayInfo booking={bookingData} moreDetails={true} />
        <Content>
          <Div>
            {!guestLoading && (
              <GuestInfo guest={guestData} moreDetails={true} />
            )}
            {!cabinLoading && (
              <CabinInfo cabin={cabinData} moreDetails={true} />
            )}
          </Div>
          <BookingInfo
            observation={bookingData.observations}
            breakfast={bookingData.hasBreakfast}
          />
          <TotalPrice
            status={bookingData.status}
            isPaid={bookingData.isPaid}
            totalPrice={bookingData.totalPrice}
            created_at={bookingData.created_at}
          />
        </Content>
      </Container>
      {children}
      <Btns booking={bookingData} moreDetails={true} />
    </>
  );
}
