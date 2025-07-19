import styled from "styled-components";

const HeadOne = styled.h1`
  width: fit-content;
  border-bottom: 1px solid var(--color-gray-300);
  padding-bottom: 0.3rem;
  margin-top: 0;
  margin-bottom: 3rem;
  font-size: 1.5rem;
`;
export default function FormHeader({ children }) {
  return <HeadOne>{children}</HeadOne>;
}
