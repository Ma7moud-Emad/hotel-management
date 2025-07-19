import { MdOutlineDiscount } from "react-icons/md";
import styled from "styled-components";
import EditCabin from "./EditCabin";
import DuplicateCabin from "./DuplicateCabin";
import DeleteCabin from "./DeleteCabin";
import ButtonsContainer from "../../ui/ButtonsContainer";

const Card = styled.div`
  background-color: var(--color-gray-0);
  border-radius: 0.5rem;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2%;
  margin: 1rem;
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;
const Image = styled.img`
  border-radius: 2rem 0.2rem 2rem 0.2rem;
  @media (min-width: 769px) {
    width: 49%;
    border-radius: 5rem 0.2rem 5rem 0.2rem;
  }
  @media (min-width: 991px) {
    border-radius: 7rem 0.2rem 7rem 0.2rem;
  }
  @media (min-width: 1024px) {
    width: 35%;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 769px) {
    width: 49%;
  }
`;
const Name = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;
const Description = styled.p`
  margin: 0;
  color: var(--color-gray-500);
`;
const PriceContainetr = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const Price = styled.span`
  font-weight: 500;
`;
const Discount = styled.span`
  color: var(--color-green-700);
`;

export default function Cabin({
  cabin,
  setIsAddCabin,
  setCurrentCabin,
  setIsUpdate,
  isBtns = true,
}) {
  return (
    <Card>
      <Image src={cabin.image} alt={cabin.name} />
      <Content>
        <Name>{cabin.name}</Name>
        <Discount>
          Accommodates up to <Discount>{cabin.maxCapacity} guests.</Discount>
        </Discount>
        <PriceContainetr>
          <Price>{cabin.regularPrice}$</Price>
          {cabin.discount > 0 && (
            <Discount>
              <MdOutlineDiscount /> -{cabin.discount}$
            </Discount>
          )}
        </PriceContainetr>
        {isBtns && (
          <ButtonsContainer>
            <DuplicateCabin cabin={cabin} />
            <EditCabin
              setIsAddCabin={setIsAddCabin}
              setCurrentCabin={setCurrentCabin}
              setIsUpdate={setIsUpdate}
              cabin={cabin}
            />
            <DeleteCabin cabin={cabin} />
          </ButtonsContainer>
        )}
      </Content>
    </Card>
  );
}
