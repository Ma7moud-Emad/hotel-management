import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteBooking } from "../../servies/bookingAction";
import toastAlert from "../../servies/alerts";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { AiOutlineDelete } from "react-icons/ai";
import ButtonName from "../../ui/ButtonName";

export default function DeleteBooking({ bookingId }) {
  // delete booking #ID
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteMutate } = useMutation({
    mutationFn: (id) => deleteBooking(id),

    onSuccess: () => {
      // tells React Query to mark the 'bookings' query as stale and refetch the data
      queryClient.invalidateQueries("bookings");

      toastAlert("success", "Booking deleted successfully");
    },

    onError: (error) => {
      toastAlert("error", error.message || "Failed to delete booking.");
    },
  });

  return (
    <Button
      bgColor="var(--color-red-100)"
      color="var(--color-red-700)"
      disabled={isDeleting}
      clickFun={() => deleteMutate(bookingId)}
    >
      {isDeleting ? (
        <Spinner />
      ) : (
        <>
          <AiOutlineDelete />
          <ButtonName>delete</ButtonName>
        </>
      )}
    </Button>
  );
}
