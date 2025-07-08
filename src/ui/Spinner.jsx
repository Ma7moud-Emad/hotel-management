import { ImSpinner6 } from "react-icons/im";
import styled from "styled-components";

const Span = styled.span`
  font-size: ${(props) => props.$size};
  & svg {
    animation: Rotate 1.5s infinite linear;
  }
  @keyframes Rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
export default function Spinner() {
  return (
    <Span>
      <ImSpinner6 />
    </Span>
  );
}
