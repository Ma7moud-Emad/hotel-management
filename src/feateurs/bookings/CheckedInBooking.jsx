import Button from "../../ui/Button";
import ButtonName from "../../ui/ButtonName";
import { PiHandDeposit } from "react-icons/pi";
import Spinner from "../../ui/Spinner";

export default function CheckedInBooking({
  clickFun,
  isPromise = false,
  type,
  disabled,
}) {
  return (
    <Button
      type={type}
      bgColor="var(--color-green-100)"
      color="var(--color-green-700)"
      clickFun={clickFun}
      disabled={disabled}
    >
      {isPromise ? (
        <Spinner />
      ) : (
        <>
          <PiHandDeposit />
          <ButtonName>check in</ButtonName>
        </>
      )}
    </Button>
  );
}
