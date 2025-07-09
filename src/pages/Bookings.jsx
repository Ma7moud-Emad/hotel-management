import { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 30px;
  text-transform: capitalize;
  font-weight: 700;
`;

const Content = styled.div`
  padding: 1rem;
`;
export default function Bookings() {
  return <List />;
}
const numList = Array.from({ length: 36 }, (_, i) => i + 1);

function List() {
  const [isShow, setIsShow] = useState(false);
  const [end, setEnd] = useState(10);
  return (
    <div>
      <Header>
        <span>all list</span>
        <button onClick={() => setIsShow(!isShow)}>{isShow ? "-" : "+"}</button>
      </Header>
      {isShow && (
        <>
          <Content>
            {numList.slice(0, end).map((item) => (
              <h1 key={item}>{item}</h1>
            ))}
          </Content>

          <button
            onClick={() => {
              if (end + 10 > numList.length) {
                setEnd(numList.length);
              } else {
                setEnd(end + 10);
              }
              if (end == numList.length) {
                setEnd(10);
              }
            }}
          >
            {end == numList.length ? "show less" : "show more"}
          </button>
        </>
      )}
    </div>
  );
}
