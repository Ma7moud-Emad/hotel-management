import { useForm } from "react-hook-form";
import { logup } from "../servies/authActions";
import { useMutation } from "@tanstack/react-query";
import toastAlert from "../servies/alerts";
import { useNavigate } from "react-router-dom";
import Sign from "../feateurs/authentication/Sign";

export default function SignUp() {
  const navigate = useNavigate();
  // using react-hook-form to form mangement
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isPending: isLogup, mutate: logupMutate } = useMutation({
    mutationFn: ({ email, password }) => logup({ email, password }),

    onSuccess: () => {
      toastAlert("success", "Account created successfully");
      navigate("/");
    },

    onError: (error) => {
      toastAlert("error", error.message || "Failed to sign up");
    },
  });
  function onSubmit(data) {
    logupMutate(data);
  }
  return (
    <Sign
      register={register}
      errors={errors}
      isSign={isLogup}
      signType="sign up"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      msg="Create your account to access the hotel management dashboard"
    />
  );
}
