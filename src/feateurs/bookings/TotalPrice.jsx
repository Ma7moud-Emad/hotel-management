import { FaSackDollar } from "react-icons/fa6";
import styled from "styled-components";
import formatDate from "../../utils/helpers";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: ${({ $active }) =>
    $active === "checked in"
      ? "var(--color-green-100)"
      : $active === "checked out"
      ? "var(--color-silver-100)"
      : "var(--color-blue-100)"};
  color: ${({ $active }) =>
    $active == "checked in"
      ? "var(--color-green-700)"
      : $active == "checked out"
      ? "var(--color-silver-700)"
      : "var(--color-blue-700)"};
  font-weight: 600;
  text-transform: capitalize;
  @media (min-width: 640px) {
    margin: 2rem;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    flex-direction: row;
  }
`;
const P = styled.p`
  display: flex;
  gap: 1rem;
  @media (max-width: 640px) {
    margin-bottom: 0;
  }
`;
const Time = styled.p`
  margin: 0;
  text-align: end;
  font-size: 13px;
  color: var(--color-gray-600);
`;
export default function TotalPrice({ status, isPaid, totalPrice, created_at }) {
  return (
    <>
      <Container $active={status}>
        <P>
          <span>
            <FaSackDollar />
          </span>
          <span>total price</span> <span>{totalPrice}$</span>
        </P>
        <p>{isPaid ? "paid" : "Will pay at property"}</p>
      </Container>
      <Time> Booked {formatDate(created_at)}</Time>
    </>
  );
}
