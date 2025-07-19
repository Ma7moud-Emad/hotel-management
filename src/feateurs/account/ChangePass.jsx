import { RiExchange2Line } from "react-icons/ri";
import Button from "../../ui/Button";
import ButtonName from "../../ui/ButtonName";
import { Link } from "react-router-dom";

export default function ChangePass() {
  return (
    <>
      <Link to="/changePassword">
        <Button bgColor="var(--color-green-100)" color="var(--color-green-700)">
          <RiExchange2Line />
          <ButtonName done={false}>change password</ButtonName>
        </Button>
      </Link>
    </>
  );
}
