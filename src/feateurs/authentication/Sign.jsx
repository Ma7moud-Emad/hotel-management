import styled from "styled-components";
import bgImg from "./../../assets/loginBg.jpg";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";

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
  color: #d1d5db;
`;
const InputContainer = styled.div`
  background-color: #d1d5db;
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
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #d1d5db;
  color: #111827;
  font-size: 1.1rem;
  text-transform: capitalize;
  font-weight: 600;
  display: block;
  margin-left: auto;
  &:focus {
    outline: none !important;
    background-color: #d1d5db !important;
  }
`;
const ErrorMsg = styled.p`
  margin: 0;
  color: #d1d5db;
  text-transform: capitalize;
  font-size: 0.8rem;
  text-align: end;
`;
const A = styled(Link)`
  text-transform: capitalize;
  font-weight: 600;
  text-decoration: underline !important;
  cursor: pointer;
`;
const Msg = styled.p`
  color: #d1d5db;
  margin-top: 0;
`;
export default function Sign({
  register,
  errors,
  isSign,
  signType,
  handleSubmit,
  onSubmit,
  msg,
}) {
  return (
    <Container>
      <Wrapper>
        <P>{msg}</P>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
          <InputContainer>
            <MdOutlineAttachEmail />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="username"
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
              autoComplete="current-password"
              {...register("password", {
                required: "Please enter your password",
                minLength: {
                  value: 7,
                  message: "Password must be at least 7 characters",
                },
              })}
            />
          </InputContainer>
          <Btn type="submit" disabled={isSign}>
            {isSign ? <Spinner /> : signType}
          </Btn>
        </form>
        {signType == "sign in" && (
          <Msg>
            <span>Don't have an acconut? </span>
            <A to="/signup">sign up</A>
          </Msg>
        )}
        {signType == "sign up" && (
          <Msg>
            <span>Already have an account? </span>
            <A to="/signin">sign in</A>
          </Msg>
        )}
      </Wrapper>
    </Container>
  );
}
