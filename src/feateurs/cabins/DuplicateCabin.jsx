import { useMutation, useQueryClient } from "@tanstack/react-query";
import { duplicateCabin } from "../../servies/cabinsActions";
import toastAlert from "../../servies/alerts";
import Spinner from "../../ui/Spinner";
import { BsCopy } from "react-icons/bs";
import Button from "../../ui/Button";
import ButtonName from "../../ui/ButtonName";

export default function DuplicateCabin({ cabin }) {
  const queryClient = useQueryClient();

  const { isPending: isDuplicating, mutate: duplicateMutate } = useMutation({
    mutationFn: (cabinObj) => duplicateCabin(cabinObj),

    onSuccess: () => {
      // tells React Query to mark the 'cabin' query as stale and refetch the data
      queryClient.invalidateQueries("cabin");

      toastAlert("success", "Cabin duplicated successfully");
    },
    onError: (error) => {
      toastAlert("error", error.message || `Failed to duplicate cabin!}`);
    },
  });
  return (
    <Button disabled={isDuplicating} clickFun={() => duplicateMutate(cabin)}>
      {isDuplicating ? (
        <Spinner />
      ) : (
        <>
          <BsCopy />
          <ButtonName>duplicate</ButtonName>
        </>
      )}
    </Button>
  );
}
