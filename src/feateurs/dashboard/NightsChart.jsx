import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import styled from "styled-components";
const Div = styled.div`
  background-color: var(--color-gray-0);
  margin: 1rem;
  padding: 2rem 1rem;
  outline: none;
  border-radius: 0.5rem;
  @media (min-width: 768px) {
    width: 60%;
  }
  *:focus {
    outline: none;
  }
`;
export default function Example({ data }) {
  const ranges = [
    {
      name: "1:3 nights",
      value: data
        .filter((item) => item.numNights < 0 && item.numNights < 4)
        ?.reduce((acc, cur) => acc + cur.numNights, 0),
      color: "#0088FE",
    },
    {
      name: "4:6 nights",
      value: data
        .filter((item) => item.numNights <= 4 && item.numNights <= 6)
        ?.reduce((acc, cur) => acc + cur.numNights, 0),
      color: "#00C49F",
    },
    {
      name: "7:9 nights",
      value: data
        .filter((item) => item.numNights <= 7 && item.numNights <= 9)
        .reduce((acc, cur) => acc + cur.numNights, 0),
      color: "#FFBB28",
    },
    {
      name: "more than 9 nights",
      value: data
        .filter((item) => item.numNights > 9)
        ?.reduce((acc, cur) => acc + cur.numNights, 0),
      color: "#FF8042",
    },
  ];

  return (
    <Div>
      <h4>Stay duration summary</h4>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={ranges}
            cx="40%"
            cy="50%"
            innerRadius={85}
            outerRadius={110}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
            nameKey="name"
          >
            {ranges.map((item) => (
              <Cell key={item.name} fill={item.color} stroke={item.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-gray-0)",
              borderRadius: "4px",
            }}
            itemStyle={{
              color: "var(--color-gray-900)", // Individual item text color
            }}
          />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            width="38%"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </Div>
  );
}
