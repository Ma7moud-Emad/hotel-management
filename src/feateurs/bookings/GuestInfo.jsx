import styled from "styled-components";
const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: ${({ $active }) => ($active ? "start" : "center")};
  margin-bottom: 1rem;
`;
const Img = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.4rem;
`;
const Name = styled.p`
  margin: 0;
  font-size: 14px;
`;
const Email = styled.p`
  color: var(--color-gray-400);
  font-size: 10px;
  margin: 0;
`;
export default function GuestInfo({ guest, moreDetails = false }) {
  return (
    <Container $active={moreDetails}>
      <Img src={guest.countryFlag} alt={guest.fullName} />
      <div>
        <div>
          <Name>{guest.fullName}</Name>
          <Email>{guest.email}</Email>
        </div>
        {moreDetails && (
          <div>
            <Name>{guest.nationality}</Name>
            <Email>{guest.nationalID}</Email>
          </div>
        )}
      </div>
    </Container>
  );
}
