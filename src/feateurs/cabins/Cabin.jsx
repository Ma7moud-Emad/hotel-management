import { AiOutlineDelete } from "react-icons/ai";
import { BsCopy } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDiscount } from "react-icons/md";
import styled from "styled-components";
import deleteCabin from "../../servies/deleteCabins";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Bounce, toast } from "react-toastify";

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
    border-radius: 10rem 0.2rem 10rem 0.2rem;
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
  font-size: 1.5rem;
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
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: var(--color-green-700);
`;
const Buttons = styled.div`
  display: flex;
  gap: 1rem;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 5px;
  font-size: 1.3rem;
  color: var(--color-brand-600);
  text-transform: capitalize;
  outline: none;
  border: none;
  border-radius: 5px;
`;
const ButtonName = styled.span`
  font-size: 1rem;
  @media (max-width: 991px) {
    display: none;
  }
`;

export default function Cabin({ cabin }) {
  // use react query to delete cabin
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutate: deleteMutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      queryClient.invalidateQueries("cabin");
      toast.success("success", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    },
    onError: () => {
      toast.error("cabin couldn't deleted!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    },
  });

  return (
    <Card>
      <Image src={cabin.image} alt={cabin.name} />
      <Content>
        <Name>{cabin.name}</Name>
        <Description>
          {cabin.description}. <br />
          Accommodates up to {cabin.maxCapacity} guests.
        </Description>
        <PriceContainetr>
          <Price>{cabin.regularPrice}$</Price>
          {cabin.discount && (
            <Discount>
              -{cabin.discount}$<MdOutlineDiscount />
            </Discount>
          )}
        </PriceContainetr>
        <Buttons>
          <Button>
            <BsCopy />
            <ButtonName>duplicate</ButtonName>
          </Button>
          <Button>
            <CiEdit />
            <ButtonName>edit</ButtonName>
          </Button>
          <Button onClick={() => deleteMutate(cabin.id)}>
            {isLoading ? (
              "Loading"
            ) : (
              <>
                <AiOutlineDelete />
                <ButtonName>delete</ButtonName>
              </>
            )}
          </Button>
        </Buttons>
      </Content>
    </Card>
  );
}
{
  /*
  HTML structure
  <div>
  <img/>
  <div>
    <p></p>
    <p></p>
    <div>
      <span></span>
      <span></span>
    </div>
    <div>
      <button>
        icon ==>> svg
        <span></span>
      </button>
    </div>
  </div>
</div>; */
}
