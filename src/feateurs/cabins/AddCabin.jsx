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
export default function AddCabin({ setIsAddCabin }) {
  return <Btn onClick={() => setIsAddCabin(true)}>add new cabin</Btn>;
}
