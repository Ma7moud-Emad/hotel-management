import styled from "styled-components";
import BookingDetails from "../feateurs/bookings/BookingDetails";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { checkInBooking, getBooking } from "../servies/bookingAction";
import Loading from "../ui/Loading";
import { useForm } from "react-hook-form";
import ButtonsContainer from "../ui/ButtonsContainer";
import BackBtnBooking from "../feateurs/bookings/BackBtnBooking";
import CheckedInBooking from "../feateurs/bookings/CheckedInBooking";
import toastAlert from "../servies/alerts";

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Label = styled.label`
  cursor: pointer;
`;
const Input = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export default function CheckedIn() {
  const queryClient = useQueryClient();

  // access dynamic parameter (bookingId) from the current URL route.
  const { bookingId } = useParams();

  // provide programmatic navigation capabilities between pages
  const navigate = useNavigate();

  // using react query to check-in booking
  const { isPending: isCheckedIn, mutate: mutateCheckedIn } = useMutation({
    mutationFn: (bookingId) => checkInBooking(bookingId),

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
  // fetch booking #ID from database
  const { data: bookingData, isPending: bookingLoading } = useQuery({
    queryKey: ["booking#", bookingId],
    queryFn: () => getBooking(bookingId),
  });

  // form mangement
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hasBreakfast: false,
      totalPrice: false,
    },
  });

  // sumbmit function
  const onSubmit = (data) => {
    mutateCheckedIn({ id: bookingId, hasBreakfast: data.hasBreakfast });
  };

  if (bookingLoading) {
    return <Loading />;
  }
  return (
    <BookingDetails>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {!bookingData.hasBreakfast && (
          <Div>
            <Input
              {...register("hasBreakfast")}
              type="checkbox"
              id="hasBreakfast"
            />
            <Label htmlFor="hasBreakfast">
              Want to add breakfast for 200$?
            </Label>
          </Div>
        )}
        <Div>
          <Input
            {...register("totalPrice", {
              required: "this feild is required",
            })}
            type="checkbox"
            id="totalPrice"
          />
          <Label htmlFor="totalPrice">
            I confirm that rises sky has paid the total amount of{" "}
            {bookingData.totalPrice}$
          </Label>
        </Div>
        <ButtonsContainer>
          <BackBtnBooking
            clickFun={() => navigate(`/bookings/${bookingData.id}`)}
          />
          <CheckedInBooking
            isPromise={isCheckedIn}
            type="submit"
            disabled={errors.totalPrice}
          />
        </ButtonsContainer>
      </Form>
    </BookingDetails>
  );
}
