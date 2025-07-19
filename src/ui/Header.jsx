import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";
import { PiMoonLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../servies/authActions";
import toastAlert from "../servies/alerts";
import { useMutation } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineLightMode } from "react-icons/md";

const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  padding: 0 0.5rem;
  border-bottom: 1px solid var(--color-gray-100);
`;
const Ul = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.6rem;
`;
const Image = styled.img`
  width: 3rem;
  border-radius: 50%;
  @media (max-width: 500px) {
    width: 2rem;
  }
`;
const Button = styled.button`
  font-size: 2rem;
  color: var(--color-brand-600);
  background-color: var(--color-gray-0);
  border: 0;
  outline: 0;
  padding: 4px;
  border-radius: 4px;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export default function Header() {
  // app mode
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const navigate = useNavigate();
  // user loged out

  const { isPending: isLoggedout, mutate: mutateLoggedout } = useMutation({
    mutationFn: logout,

    onSuccess: () => {
      // msg confirm success logged out
      toastAlert("success", "logged out successfully");
      navigate("/signin");
    },

    onError: (error) => {
      // Msg confirm faild logged out
      toastAlert("error", error.message || "Failed to logged out");
    },
  });

  return (
    <StyledHeader>
      <Ul>
        <li>
          <Image
            src="https://tpnazochmapbixyunstp.supabase.co/storage/v1/object/public/avatars//avatar.jpg"
            alt="user avatar"
          />
        </li>

        <Link to="/account">
          <li>
            <Button>
              <BsPerson />
            </Button>
          </li>
        </Link>

        <li>
          <Button onClick={toggleDarkMode}>
            {isDarkMode ? <MdOutlineLightMode /> : <PiMoonLight />}
          </Button>
        </li>

        <li>
          <Button onClick={mutateLoggedout}>
            {isLoggedout ? <Spinner /> : <GoSignOut />}
          </Button>
        </li>
      </Ul>
    </StyledHeader>
  );
}
