import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../servies/cabinsActions";
import toastAlert from "../../servies/alerts";
import Spinner from "./../../ui/Spinner";
import { AiOutlineDelete } from "react-icons/ai";
import { Button, ButtonName } from "./Cabin";

export default function DeleteCabin({ cabin }) {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteMutate } = useMutation({
    mutationFn: (cabinObj) => deleteCabin(cabinObj),

    onSuccess: () => {
      // tells React Query to mark the 'cabin' query as stale and refetch the data
      queryClient.invalidateQueries("cabin");

      toastAlert("success", "Cabin deleted successfully");
    },

    onError: (error) => {
      toastAlert("error", error.message || "Failed to delete cabin.");
    },
  });
  return (
    <Button disabled={isDeleting} onClick={() => deleteMutate(cabin)}>
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
