import { AiOutlineDelete } from "react-icons/ai";
import Button from "../../ui/Button";
import ButtonName from "../../ui/ButtonName";
import { deleteUser } from "../../servies/authActions";
import { useMutation } from "@tanstack/react-query";
import toastAlert from "../../servies/alerts";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

export default function DeleteAccount({ userId }) {
  const navigate = useNavigate();

  const { isPending: isDeleting, mutate: deleteMutate } = useMutation({
    mutationFn: () => deleteUser(userId),

    onSuccess: () => {
      toastAlert("success", "user deleted successfully ");
      localStorage.removeItem("sb-tpnazochmapbixyunstp-auth-token");
      navigate("/signin");
    },

    onError: (error) => {
      toastAlert("error", error.message || "Failed to delete cabin.");
    },
  });

  return (
    <Button
      bgColor="var(--color-red-100)"
      color="var(--color-red-700)"
      clickFun={deleteMutate}
    >
      {isDeleting ? <Spinner /> : <AiOutlineDelete />}
      <ButtonName done={false}>delete</ButtonName>
    </Button>
  );
}
