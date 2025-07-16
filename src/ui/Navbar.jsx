import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import Logo from "./Logo";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-gray-600);
    font-weight: 500;
    padding: 1.2rem 1.4rem;
    transition: all 0.3s;
    text-transform: capitalize;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-gray-800);
    background-color: var(--color-gray-50);
    border-radius: var(--border-radius-sm);
  }
  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--color-gray-400);
    transition: all 0.3s;
    @media (max-width: 768px) {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  & span {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  &.active span,
  &:hover span {
    @media (max-width: 768px) {
      position: absolute;
      display: block;
      top: -10px;
      left: 0;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 1px 3px;
      border-radius: 5px;
      font-size: 0.8rem;
      margin: auto;
      &::after {
        content: "";
        position: absolute;
        bottom: -16px;
        right: 5px;
        border: 8px solid transparent;
        border-top-color: white;
      }
    }
  }
`;
const Li = styled.li`
  position: relative;
`;

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <NavList>
        <Li title="home">
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span> home</span>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>bookings</span>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>cabins</span>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            <span>users</span>
          </StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>settings</span>
          </StyledNavLink>
        </Li>
      </NavList>
    </nav>
  );
}
