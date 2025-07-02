import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
// import { PiSunDim } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";
import { PiMoonLight } from "react-icons/pi";

const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  padding: 0.5rem;
  border-bottom: 1px solid var(--color-gray-100);
`;
const Ul = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.6rem;
`;

const SpecialLi = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-right: 2rem;
  @media (max-width: 500px) {
    margin-right: 1rem;
  }
`;
const Span = styled.span`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
const Image = styled.img`
  max-width: 100%;
  width: 3rem;
  border-radius: 50%;
  @media (max-width: 500px) {
    width: 2rem;
  }
`;

const Button = styled.button`
  font-size: 1.5rem;
  color: var(--color-brand-600);
  background-color: white;
  border: 0;
  outline: 0;
  padding: 4px;
  border-radius: 4px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <Ul>
        <SpecialLi>
          <Image
            src="https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/avatars/avatar-8bf4454b-d064-4a81-b1c0-ecde43d5a104-0.8637693045937385"
            alt="user avatr"
          />
          <Span>user</Span>
        </SpecialLi>

        <li>
          <Button>
            <BsPerson />
          </Button>
        </li>

        <li>
          {/* <PiSunDim /> */}
          <Button>
            <PiMoonLight />
          </Button>
        </li>

        <li>
          <Button>
            <GoSignOut />
          </Button>
        </li>
      </Ul>
    </StyledHeader>
  );
}
