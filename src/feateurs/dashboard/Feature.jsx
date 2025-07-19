import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-gray-0);

  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1rem;
  @media (min-width: 768px) {
    width: calc(50% - 0.5rem);
  }
  @media (min-width: 1200px) {
    width: calc(25% - 0.75rem);
  }
`;
const Icon = styled.span`
  background-color: ${({ $bg }) => $bg};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: ${({ $color }) => $color};
`;
const Title = styled.p`
  margin: 0;
  font-weight: 500;
  color: var(--color-gray-400);
  text-transform: capitalize;
`;
const Amount = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-gray-600);
`;
export default function Feature({ icon, iconCo, iconBg, title, num }) {
  return (
    <Container>
      <Icon $bg={iconBg} $color={iconCo}>
        {icon}
      </Icon>
      <div>
        <Title>{title}</Title>
        <Amount>{num}</Amount>
      </div>
    </Container>
  );
}
