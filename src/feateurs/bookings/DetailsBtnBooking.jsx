import { FaEye } from "react-icons/fa6";
import Button from "../../ui/Button";
import ButtonName from "../../ui/ButtonName";

export default function DetailsBtnBooking({ clickFun }) {
  return (
    <Button
      bgColor="var(--color-gray-100)"
      color="var(--color-gray-700)"
      clickFun={clickFun}
    >
      <FaEye />
      <ButtonName>details</ButtonName>
    </Button>
  );
}
