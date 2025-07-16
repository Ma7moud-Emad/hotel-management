import styled from "styled-components";
import bgImg from "./../assets/loginBg.jpg";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import login from "../servies/authActions";
import { useMutation } from "@tanstack/react-query";
import toastAlert from "../servies/alerts";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-image: url(${bgImg});
  height: 100vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.5);
  }
`;
const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background-color: color(srgb 0 0 0 / 0.6);
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  @media (min-width: 480px) {
    width: 60%;
  }
  @media (min-width: 769px) {
    width: 45%;
  }
  @media (min-width: 991px) {
    width: 35%;
  }
`;
const P = styled.p`
  margin: 1rem 0 2rem;
  font-size: 1.2rem;
  word-break: auto-phrase;
  text-align: center;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--color-gray-300);
`;
const InputContainer = styled.div`
  background-color: var(--color-gray-300);
  padding-left: 0.5rem;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  & svg {
    font-size: 1.5rem;
  }
`;
const Input = styled.input`
  flex: 1;
  padding: 1rem 1rem 1rem 0.5rem;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none !important;
    background-color: transparent !important;
  }
`;
const Btn = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  float: right;
  border-radius: 0.5rem;
  background-color: var(--color-gray-300);
  color: black;
  font-size: 1.1rem;
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 2rem;
  &:focus {
    outline: none !important;
    background-color: var(--color-gray-300) !important;
  }
`;
const ErrorMsg = styled.p`
  margin: 0;
  color: var(--color-gray-300);
  text-transform: capitalize;
  font-size: 0.8rem;
  text-align: end;
`;

export default function Login() {
  const navigate = useNavigate();
  // using react-hook-form to form mangement
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "mahmoud@gmail.com",
      password: "mahmoud@gmail.com",
    },
  });

  const { isPending: isLogin, mutate: loginMutate } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),

    onSuccess: () => {
      toastAlert("success", "Welcome back");
      setTimeout(() => navigate("/"), 3000);
    },

    onError: (error) => {
      toastAlert("error", error.message || "Failed to loged in");
    },
  });
  function onSubmit(data) {
    loginMutate(data);
  }
  return (
    <Container>
      <Wrapper>
        <P>log in to access your hotel management dashboard</P>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
          <InputContainer>
            <MdOutlineAttachEmail />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "Please enter your email address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </InputContainer>
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
          <InputContainer>
            <RiLockPasswordLine />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Please enter your password",
                minLength: {
                  value: 7,
                  message: "Password must be at least 7 characters",
                },
              })}
            />
          </InputContainer>
          <Btn type="submit" disabled={isLogin}>
            {isLogin ? <Spinner /> : "Sign in"}
          </Btn>
        </form>
      </Wrapper>
    </Container>
  );
}
