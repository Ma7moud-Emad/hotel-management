import styled from "styled-components";

const Span = styled.span`
  padding: 0.5rem;
  border-radius: 1rem;
  font-weight: 500;
  font-size: 13px;
  background-color: ${({ $active }) =>
    $active === "checked in"
      ? "var(--color-green-100)"
      : $active === "checked out"
      ? "var(--color-silver-100)"
      : "var(--color-blue-100)"};
  color: ${({ $active }) =>
    $active == "checked in"
      ? "var(--color-green-700)"
      : $active == "checked out"
      ? "var(--color-silver-700)"
      : "var(--color-blue-700)"};
`;
export default function Status({ title }) {
  return <Span $active={title}>{title}</Span>;
}
