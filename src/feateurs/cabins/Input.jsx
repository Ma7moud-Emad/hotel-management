import styled from "styled-components";

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
  border-radius: 0.3rem;
  border-width: 1px;
  background-color: var(--color-gray-0);
  color: var(--color-gray-900);
  border: 1px solid var(--color-gray-900);
  &#image::-webkit-file-upload-button {
    padding: 0.3rem;
    text-transform: capitalize;
    background-color: var(--color-gray-0);
    font-weight: 600;
    border-color: var(--color-gray-50);
    border-radius: 0.5rem;
    color: var(--color-brand-600);
    cursor: pointer;
  }
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
export default function InputForm({
  type,
  autoComplete,
  name,
  id,
  validates,
  register,
  errors,
  label,
  isDisabled = false,
}) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input
        disabled={isDisabled}
        type={type}
        autoComplete={autoComplete}
        name={name}
        id={id}
        {...register(name, validates)}
      />
      {errors[name] && <ErrorMsg>{errors[name].message}</ErrorMsg>}
    </InputContainer>
  );
}
