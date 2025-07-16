import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Icon = styled.span`
  font-size: 1.3rem;
  color: var(--color-brand-600);
`;
const P = styled.p`
  margin: 0;
  font-weight: 600;
  text-transform: capitalize;
`;
const Span = styled.span`
  margin-left: 0.5rem;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 400;
  color: var(--color-gray-700);
`;
export default function BookingInfo({ observation, breakfast }) {
  return (
    <div>
      <Div>
        <Icon>
          <TbMessage />
        </Icon>
        <P>
          Observations:
          <Span>{observation}</Span>
        </P>
      </Div>
      <Div>
        <Icon>
          <IoCheckmarkCircleOutline />
        </Icon>
        <P>
          Breakfast included?
          <Span>{breakfast ? "yes" : "no"}</Span>
        </P>
      </Div>
    </div>
  );
}
