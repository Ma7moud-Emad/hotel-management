import Feature from "./Feature";
import styled from "styled-components";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const features = [
  {
    icon: <HiOutlineBriefcase />,
    iconBg: "var(--color-blue-100)",
    iconCo: "var(--color-blue-700)",
    title: "bookings",
    num: "bookings",
  },
  {
    icon: <HiOutlineBanknotes />,
    iconBg: "var(--color-green-100)",
    iconCo: "var(--color-green-700)",
    title: "Sales",
    num: "sales",
  },

  {
    icon: <HiOutlineCalendarDays />,
    iconBg: "var(--color-indego-100)",
    iconCo: "var(--color-indego-700)",
    title: "Check ins",
    num: "checkIn",
  },

  {
    icon: <HiOutlineChartBar />,
    iconBg: "var(--color-yellow-100)",
    iconCo: "var(--color-yellow-700)",
    title: "Occupancy rate",
    num: "rate",
  },
];
export default function Features({ values }) {
  return (
    <Container>
      {features.map((item, index) => (
        <Feature
          key={index}
          icon={item.icon}
          iconBg={item.iconBg}
          iconCo={item.iconCo}
          title={item.title}
          num={values[index]}
        />
      ))}
    </Container>
  );
}
