import Button from "../../ui/Button";
import { PiHandDeposit } from "react-icons/pi";
import ButtonName from "../../ui/ButtonName";
import styled from "styled-components";
import { checkOutBooking } from "../../servies/bookingAction";
import toastAlert from "../../servies/alerts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";

const Span = styled.span`
  transform: rotate(180deg);
`;
export default function CheckedOutBooking({ bookingId }) {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  // using react query to check-in booking
  const { isPending: isCheckedOut, mutate: mutateCheckedOut } = useMutation({
    mutationFn: () => checkOutBooking(bookingId),

    onSuccess: () => {
      // msg confirm success creation
      toastAlert("success", " Booking checked in successfully");

      // tells React Query to mark the 'bookings' query as stale and refetch the data
      queryClient.invalidateQueries("bookings");

      navigate(`/bookings/${bookingId}`);
    },

    onError: (error) => {
      // Msg confirm faild creation
      toastAlert("error", error.message || "Failed to create cabin");
    },
  });
  return (
    <Button
      bgColor="var(--color-green-100)"
      color="var(--color-green-700)"
      clickFun={mutateCheckedOut}
    >
      {isCheckedOut ? (
        <Spinner />
      ) : (
        <>
          <Span>
            <PiHandDeposit />
          </Span>
          <ButtonName>check out</ButtonName>
        </>
      )}
    </Button>
  );
}
