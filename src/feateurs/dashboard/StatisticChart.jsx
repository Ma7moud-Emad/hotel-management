import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

import styled from "styled-components";

const Div = styled.div`
  background-color: var(--color-gray-0);
  margin: 1rem;
  padding: 2rem 1rem;
  outline: none;
  border-radius: 0.5rem;
  *:focus {
    outline: none;
  }
`;
export default function StatisticChart({ data }) {
  const [hoveringDataKey, setHoveringDataKey] = React.useState(null);

  let pvOpacity = 1;
  let uvOpacity = 1;

  if (hoveringDataKey === "totalPrice") {
    pvOpacity = 0.5;
  }

  if (hoveringDataKey === "extrasPrice") {
    uvOpacity = 0.5;
  }

  const handleMouseEnter = (payload) => {
    setHoveringDataKey(payload.dataKey);
  };

  const handleMouseLeave = () => {
    setHoveringDataKey(null);
  };

  return (
    <Div>
      <h4>
        Sales from {data[0].created_at} to {data[data.length - 1].created_at}
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" stroke="var(--color-gray-900)" />
          <YAxis
            unit="$"
            stroke="var(--color-gray-900)"
            // tick={{ fill: "red" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-gray-0)",
              borderRadius: "4px",
            }}
          />
          <Legend
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <Area
            type="monotone"
            dataKey="totalPrice"
            strokeOpacity={uvOpacity}
            fill="rgb(79, 70, 229)"
            stroke="rgb(13, 0, 255)"
            unit="$"
          />
          <Area
            type="monotone"
            dataKey="extrasPrice"
            unit="$"
            strokeOpacity={pvOpacity}
            fill="rgb(34, 197, 94)"
            stroke="rgb(0, 255, 94)"
            activeDot={{ r: data.length }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Div>
  );
}
