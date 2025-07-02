import { HiOutlineXMark } from "react-icons/hi2";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Div = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  height: fit-content;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
const Button = styled.button`
  padding: 0.3rem;
  text-transform: capitalize;
  background-color: white;
  font-weight: 600;
  border-color: var(--color-gray-50);
  border-radius: 0.5rem;
  color: var(--color-brand-600);
  margin: ${(props) => props.$marginVal};
  font-size: ${(props) => props.$sizeVal};
`;
const InputContainer = styled.div`
  margin-bottom: 1rem;
`;
const Label = styled.label`
  display: block;
  color: var(--color-gray-500);
  text-transform: capitalize;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.8rem;
  font-size: 1.1rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  text-transform: capitalize;
  outline-width: 1px;
  border-radius: 0.3rem;
  &#image::-webkit-file-upload-button {
    padding: 0.3rem;
    text-transform: capitalize;
    background-color: white;
    font-weight: 600;
    border-color: var(--color-gray-50);
    border-radius: 0.5rem;
    color: var(--color-brand-600);
    cursor: pointer;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem 0.8rem;
  font-size: 1.1rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  text-transform: capitalize;
  outline-width: 1px;
  border-radius: 0.3rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: end;
  border-top: 1px solid var(--color-gray-400);
  padding-top: 1rem;
`;
export default function CreateCabin({ setIsAddCabin }) {
  return (
    <Container>
      <Div>
        <ButtonContainer>
          <Button
            $marginVal="-1.3rem -1.3rem 0 0"
            $sizeVal="1.5rem"
            onClick={() => setIsAddCabin(false)}
          >
            <HiOutlineXMark />
          </Button>
        </ButtonContainer>
        <form>
          <InputContainer>
            <Label htmlFor="name">Cabin name</Label>
            <Input type="text" name="name" id="name" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="capacity">Maximum capacity</Label>
            <Input type="number" name="maxCapacity" id="capacity" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="price">Regular price</Label>
            <Input type="text" id="price" name="regularPrice" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="discount">Discount</Label>
            <Input type="text" id="discount" name="discount" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="description ">Discount</Label>
            <Textarea name="description " id="description" minLength={5} />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="image">cabin photo</Label>
            <Input type="file" name="image" id="image" />
          </InputContainer>
          <Buttons>
            <Button type="submit">cancel</Button>
            <Button>create</Button>
          </Buttons>
        </form>
      </Div>
    </Container>
  );
}
