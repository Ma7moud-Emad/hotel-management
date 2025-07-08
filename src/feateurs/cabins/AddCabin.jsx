import styled from "styled-components";

const Btn = styled.button`
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  background-color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border-color: var(--color-gray-50);
  border-radius: 0.5rem;
  margin: 1rem;
  color: var(--color-brand-600);
  position: fixed;
  bottom: 0;
  right: 0;
`;
const Span = styled.span`
  @media (max-width: 639px) {
    &:first-of-type {
      display: none;
    }
  }
  @media (min-width: 640px) {
    &:last-of-type {
      display: none;
    }
  }
`;
export default function AddCabin({ setIsAddCabin }) {
  return (
    <Btn onClick={() => setIsAddCabin(true)}>
      <Span>add new cabin</Span>
      <Span>+</Span>
    </Btn>
  );
}
