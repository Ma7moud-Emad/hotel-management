import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { HiOutlineXMark } from "react-icons/hi2";
import styled from "styled-components";
import toastAlert from "../../servies/alerts";
import Spinner from "../../ui/Spinner";
import { addCabin, updateCabin } from "../../servies/cabinsActions";
import _ from "lodash";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  @media (max-width: 640px) {
    align-items: center;
  }
`;
const Div = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  height: fit-content;
  min-width: 50%;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  /*loading in button submit */
  gap: 0.1rem;
  align-items: center;
`;
export const Button = styled.button`
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
export const InputContainer = styled.div`
  margin-bottom: 1rem;
`;
export const Label = styled.label`
  display: block;
  color: var(--color-gray-500);
  text-transform: capitalize;
`;
export const Input = styled.input`
  width: 100%;
  padding: 0.3rem 0.8rem;
  font-size: 1rem;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
  text-transform: capitalize;
  border-radius: 0.3rem;
  border-width: 1px;
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
export const ErrorMsg = styled.p`
  margin: 0.2rem 0 0 0.5rem;
  background: var(--color-red-100);
  width: fit-content;
  border-radius: 5px;
  padding: 0.1rem 0.3rem;
  font-size: 0.7rem;
  color: var(--color-red-700);
  float: right;
`;
export default function CreateCabin({
  setIsAddCabin,
  cabinObj,
  setCabinObj,
  isUpdate,
  setIsUpdate,
}) {
  const queryClient = useQueryClient();

  // Form mangement by react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: cabinObj,
  });

  function handelResetValues() {
    // tells React Query to mark the 'cabin' query as stale and refetch the data
    queryClient.invalidateQueries("cabin");

    // clean form fileds
    reset();

    // close form
    setIsAddCabin(false);
  }

  // using react query to add cabin
  const { isPending: isCreating, mutate: mutateCreate } = useMutation({
    mutationFn: (newCabin) => addCabin(newCabin),

    onSuccess: () => {
      // msg confirm success creation
      toastAlert("success", "Cabin created successfully");

      handelResetValues();
    },

    onError: (error) => {
      // Msg confirm faild creation
      toastAlert("error", error.message || "Failed to create cabin");
    },
  });

  // using react query to update cabin
  const { isPending: isUpdating, mutate: mutateUpdate } = useMutation({
    mutationFn: (newCabin) => updateCabin(newCabin),

    onSuccess: () => {
      // msg confirm success updating
      toastAlert("success", "Cabin updated successfully");

      handelResetValues();

      // reset init value of btn in form
      setIsUpdate(false);

      // when is new create cabin
      setCabinObj(null);
    },

    onError: (error) => {
      // Msg confirm faild updating
      toastAlert("error", error.message || "Failed to updated cabin");
    },
  });

  // form submittion
  function onSubmit(data) {
    // check if cabin is already exists
    if (cabinObj) {
      // check is any change cabin info before send request to update caibn info
      if (_.isEqual(data, cabinObj)) {
        toastAlert("info", "No modifications were made");
      } else {
        // when change cabin info send req to update data
        mutateUpdate(data);
      }
      // when cabin isn't exists send req to create new cabin
    } else {
      mutateCreate({
        ...data,
        image: data.image[0],
      });
    }
  }
  // Reset state values when close form
  function onClose() {
    setIsAddCabin(false);
    setCabinObj(null);
    setIsUpdate(false);
  }

  // close form when click into window
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <Container onClick={handleOutsideClick}>
      <Div>
        <ButtonContainer>
          <Button
            $marginVal="-1.3rem -1.3rem 0 0"
            $sizeVal="1.5rem"
            onClick={onClose}
          >
            <HiOutlineXMark />
          </Button>
        </ButtonContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Label htmlFor="name">Cabin name</Label>
            <Input
              type="text"
              autoComplete="given-name"
              name="name"
              id="name"
              {...register("name", {
                required: "This field is required",
                minLength: { value: 2, message: "Minimum 2 characters" },
              })}
            />
            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="maxCapacity">Maximum capacity</Label>
            <Input
              type="number"
              autoComplete="off"
              name="maxCapacity"
              id="maxCapacity"
              {...register("maxCapacity", {
                required: "This field is required",
                min: { value: 1, message: "Minimum 1 guest" },
                max: { value: 30, message: "Maximum 30 guests" },
              })}
            />
            {errors.maxCapacity && (
              <ErrorMsg>{errors.maxCapacity.message}</ErrorMsg>
            )}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="regularPrice">Regular price</Label>
            <Input
              type="number"
              autoComplete="full-price"
              id="regularPrice"
              name="regularPrice"
              {...register("regularPrice", {
                required: "This field is required",
                min: { value: 1, message: "Minimum 1$" },
              })}
            />
            {errors.regularPrice && (
              <ErrorMsg>{errors.regularPrice.message}</ErrorMsg>
            )}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="discount">Discount</Label>
            <Input
              type="number"
              autoComplete="sale-discount"
              id="discount"
              name="discount"
              {...register("discount", {
                required: "This field is required",
                min: {
                  value: 0,
                  message: "Minimum 0$",
                },
              })}
            />
            {errors.discount && <ErrorMsg>{errors.discount.message}</ErrorMsg>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              autoComplete="cabin-description"
              id="description"
              cols={5}
              {...register("description", {
                required: "This field is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters",
                },
              })}
            />
            {errors.description && (
              <ErrorMsg>{errors.description.message}</ErrorMsg>
            )}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="image">cabin photo</Label>
            <Input
              type="file"
              autoComplete="cabin-phtot"
              name="image"
              id="image"
              accept="image/*"
              {...register("image", {
                required: isUpdate ? false : "This field is required",
              })}
              disabled={isUpdate}
            />
            {errors.image && <ErrorMsg>{errors.image.message}</ErrorMsg>}
          </InputContainer>
          <Buttons>
            <Button type="reset" onClick={onClose}>
              cancel
            </Button>
            <Button type="submit" disabled={isCreating || isUpdating}>
              {isCreating || isUpdating ? (
                <ButtonContainer>
                  <span>Processing</span>
                  <Spinner />
                </ButtonContainer>
              ) : isUpdate ? (
                "update"
              ) : (
                "create"
              )}
            </Button>
          </Buttons>
        </form>
      </Div>
    </Container>
  );
}
