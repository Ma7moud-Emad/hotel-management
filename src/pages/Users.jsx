import { useForm } from "react-hook-form";
import InputForm from "../feateurs/cabins/Input";
import styled from "styled-components";
import toastAlert from "../servies/alerts";
import { useMutation } from "@tanstack/react-query";
import { logup } from "../servies/authActions";
import Spinner from "../ui/Spinner";
import FormHeader from "./../feateurs/settings/FormHeader";
import { Button } from "../feateurs/cabins/CreateCabin";

const Div = styled.div`
  padding: 1rem;
  @media (min-width: 640px) {
    width: 65%;
  }
  @media (min-width: 991px) {
    width: 50%;
  }
`;
export default function Users() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isPending: isLogup, mutate: logupMutate } = useMutation({
    mutationFn: ({ email, password }) => logup({ email, password }),

    onSuccess: () => {
      toastAlert("success", "Add user successfully");
    },

    onError: (error) => {
      toastAlert("error", error.message || "Failed to add user");
    },
  });

  function onSubmit(data) {
    logupMutate(data);
  }
  return (
    <Div>
      <FormHeader>Create New User</FormHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          register={register}
          errors={errors}
          type="email"
          id="email"
          autoComplete="c_email"
          name="email"
          validates={{
            required: "Please enter your email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          }}
          label="Email"
        />

        <InputForm
          register={register}
          errors={errors}
          type="password"
          autoComplete="current_password"
          name="password"
          id="password"
          validates={{
            required: "Please enter your password",
            minLength: {
              value: 7,
              message: "Password must be at least 7 characters",
            },
          }}
          label="Password"
        />
        <Button type="submit" disabled={isLogup}>
          {isLogup ? (
            <>
              <Spinner />
              <span> Processing</span>
            </>
          ) : (
            "create new user"
          )}
        </Button>
      </form>
    </Div>
  );
}
