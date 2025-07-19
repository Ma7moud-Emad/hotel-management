import { useForm } from "react-hook-form";
import login from "../servies/authActions";
import { useMutation } from "@tanstack/react-query";
import toastAlert from "../servies/alerts";
import { useNavigate } from "react-router-dom";
import Sign from "../feateurs/authentication/Sign";

export default function SignIn() {
  const navigate = useNavigate();
  // using react-hook-form to form mangement
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isPending: isLogin, mutate: loginMutate } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),

    onSuccess: () => {
      toastAlert("success", "Welcome back");
      navigate("/");
    },

    onError: (error) => {
      toastAlert("error", error.message || "Failed to loged in");
    },
  });
  function onSubmit(data) {
    loginMutate(data);
  }
  return (
    <Sign
      register={register}
      errors={errors}
      isSign={isLogin}
      signType="sign in"
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      msg="log in to access your hotel management dashboard"
    />
  );
}
