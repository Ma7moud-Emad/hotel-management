import { useForm } from "react-hook-form";
import InputForm from "../feateurs/cabins/Input";
import styled from "styled-components";
import Button from "../ui/Button";
import FormHeader from "../feateurs/settings/FormHeader";
import ButtonsContainer from "../ui/ButtonsContainer";
import { Link } from "react-router-dom";
import ButtonName from "../ui/ButtonName";
import { changePass } from "../servies/authActions";
import { useMutation } from "@tanstack/react-query";
import toastAlert from "./../servies/alerts";
import Spinner from "./../ui/Spinner";

const Div = styled.div`
  padding: 1rem;
  @media (min-width: 640px) {
    width: 65%;
  }
  @media (min-width: 991px) {
    width: 50%;
  }
`;
export default function ChangePassword() {
  // react-hook-form to mangement form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watch the 'password' field
  const password = watch("password");

  // using react query to add cabin
  const { isPending: isChange, mutate: mutateChange } = useMutation({
    mutationFn: (newCabin) => changePass(newCabin),

    onSuccess: () => {
      // msg confirm success changed
      toastAlert("success", "Change password successfully");
    },

    onError: (error) => {
      // Msg confirm faild creation
      toastAlert("error", error.message || "Failed to change password");
    },
  });

  // submit function
  function onSubmit(data) {
    const email = JSON.parse(localStorage["sb-tpnazochmapbixyunstp-auth-token"])
      .user.email;
    mutateChange(email, data.password);
  }
  return (
    <Div>
      <FormHeader>Change Password</FormHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          register={register}
          errors={errors}
          type="password"
          id="password"
          autoComplete="new_password"
          name="password"
          validates={{
            required: "Please enter password",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          }}
          label="Password"
        />

        <InputForm
          register={register}
          errors={errors}
          type="password"
          autoComplete="confirm_password"
          name="confirmPassword"
          id="confirmPassword"
          validates={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords don't match",
          }}
          label="confirmPassword"
        />
        <ButtonsContainer>
          <Link to="/account">
            <Button type="reset">
              <ButtonName>back</ButtonName>
            </Button>
          </Link>

          <Button type="submit" disabled={isChange}>
            {isChange ? <Spinner /> : <ButtonName>change</ButtonName>}
          </Button>
        </ButtonsContainer>
      </form>
    </Div>
  );
}
