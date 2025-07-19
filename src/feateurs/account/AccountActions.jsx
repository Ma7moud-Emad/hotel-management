import styled from "styled-components";
import ChangePass from "./ChangePass";
import DeleteAccount from "./DeleteAccount";

const Div = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-top: 1rem;
  @media (min-width: 540px) {
    flex-direction: row;
  }
  & button {
    width: fit-content;
  }
`;
export default function AccountActions({ userId }) {
  return (
    <Div>
      <ChangePass />
      <DeleteAccount userId={userId} />
    </Div>
  );
}
