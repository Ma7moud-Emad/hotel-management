import { CiEdit } from "react-icons/ci";
import ButtonName from "./../../ui/ButtonName";
import Button from "../../ui/Button";

export default function EditCabin({
  setIsAddCabin,
  setCurrentCabin,
  setIsUpdate,
  cabin,
}) {
  return (
    <Button
      clickFun={() => {
        setIsAddCabin(true);
        setCurrentCabin(cabin);
        setIsUpdate(true);
      }}
    >
      <CiEdit />
      <ButtonName>edit</ButtonName>
    </Button>
  );
}
