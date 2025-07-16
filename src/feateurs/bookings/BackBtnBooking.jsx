import Button from "../../ui/Button";
import { IoMdArrowBack } from "react-icons/io";
import ButtonName from "../../ui/ButtonName";

export default function BackBtnBooking({ clickFun }) {
  return (
    <Button
      bgColor="var(--color-gray-100)"
      color="var(--color-gray-700)"
      clickFun={clickFun}
    >
      <IoMdArrowBack />
      <ButtonName>back</ButtonName>
    </Button>
  );
}
