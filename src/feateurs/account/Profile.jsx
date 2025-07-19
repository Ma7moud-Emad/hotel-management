import styled from "styled-components";
import formatDate from "./../../utils/helpers";
import Container from "./Container";
import AccountActions from "./AccountActions";

const Info = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 1rem 0;
  cursor: pointer;
  border-bottom: 1px solid var(--color-gray-100);
  transition: 0.3s;
  padding: 1rem;
  &:hover {
    border-radius: 0.3rem;
    background-color: var(--color-gray-100);
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
const InfoSpan = styled.span`
  font-weight: 600;
  color: var(--color-gray-700);
  text-transform: capitalize;
  @media (min-width: 768px) {
    width: 25%;
  }
`;
const InfoP = styled.p`
  margin: 0;
  color: var(--color-gray-400);
  word-break: break-all;
`;
const Status = styled.span`
  background-color: var(--color-green-100);
  color: var(--color-green-700);
  padding: 0.1rem 0.2rem;
  border-radius: 0.3rem;
  margin-left: 1rem;
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`;
export default function Profile({ data }) {
  return (
    <>
      <Container title="Profile Information">
        <Info>
          <InfoSpan>email:</InfoSpan>
          <InfoP>
            {data.email}
            {data.email_confirmed_at && <Status>Verified</Status>}
          </InfoP>
        </Info>

        <Info>
          <InfoSpan>phone:</InfoSpan>
          <InfoP>{data.phone || "Not provided"}</InfoP>
        </Info>

        <Info>
          <InfoSpan>account created:</InfoSpan>
          <InfoP>{formatDate(data.created_at)}</InfoP>
        </Info>

        <Info>
          <InfoSpan>Last Login:</InfoSpan>
          <InfoP>{formatDate(data.last_sign_in_at)}</InfoP>
        </Info>

        <Info>
          <InfoSpan>user iD:</InfoSpan>
          <InfoP>{data.id}</InfoP>
        </Info>

        <AccountActions userId={data.id} />
      </Container>
    </>
  );
}
