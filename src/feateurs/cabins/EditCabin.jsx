import { CiEdit } from "react-icons/ci";
import { Button, ButtonName } from "./Cabin";

export default function EditCabin({
  setIsAddCabin,
  setCurrentCabin,
  setIsUpdate,
  cabin,
}) {
  return (
    <Button
      onClick={() => {
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
