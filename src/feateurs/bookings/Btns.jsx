import { useLocation, useNavigate } from "react-router-dom";
import ButtonsContainer from "./../../ui/ButtonsContainer";
import DeleteBooking from "./DeleteBooking";
import CheckedInBooking from "./CheckedInBooking";
import BackBtnBooking from "./BackBtnBooking";
import DetailsBtnBooking from "./DetailsBtnBooking";
import CheckedOutBooking from "./CheckedOutBooking";

export default function Btns({ booking, moreDetails }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    !pathname.includes("checked") && (
      <ButtonsContainer moreDetails={moreDetails}>
        {moreDetails ? (
          <BackBtnBooking clickFun={() => navigate("/bookings")} />
        ) : (
          <DetailsBtnBooking
            clickFun={() => navigate(`/bookings/${booking.id}`)}
          />
        )}

        {booking.status == "unconfirmed" && (
          <CheckedInBooking
            clickFun={() => navigate(`/checked-in/${booking.id}`)}
          />
        )}
        {booking.status == "checked in" && (
          <CheckedOutBooking bookingId={booking.id} />
        )}

        <DeleteBooking bookingId={booking.id} />
      </ButtonsContainer>
    )
  );
}
