import { MdOutlineDiscount } from "react-icons/md";
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
const Description = styled.p`
  color: var(--color-gray-400);
  font-size: 10px;
  margin: 0;
`;
const Info = styled.div``;
export default function CabinInfo({ cabin, moreDetails = false }) {
  return (
    <Container $active={moreDetails}>
      <Img src={cabin.image} alt={cabin.name} />
      <Info>
        <div>
          <Name>{cabin.name}</Name>
          <Description>{cabin.description}</Description>
          {moreDetails && (
            <Description>
              Accommodates up to {cabin.maxCapacity} guest.
            </Description>
          )}
        </div>
        {moreDetails && (
          <div>
            <Name>{cabin.regularPrice} $</Name>
            <Description>
              <MdOutlineDiscount />
              {cabin.discount}$
            </Description>
          </div>
        )}
      </Info>
    </Container>
  );
}
