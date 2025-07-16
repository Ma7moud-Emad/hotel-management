import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 5px;
  font-size: 1.3rem;
  color: var(--color-brand-600);
  text-transform: capitalize;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $color }) => $color};
`;

export default function Button({
  clickFun,
  children,
  disabled,
  bgColor,
  color,
  type,
}) {
  return (
    <Btn
      type={type}
      disabled={disabled}
      onClick={clickFun}
      $bgColor={bgColor}
      $color={color}
    >
      {children}
    </Btn>
  );
}
