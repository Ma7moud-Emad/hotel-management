import { useState } from "react";
import FeatureHeader from "../ui/FeatureHeader";
import Features from "../feateurs/dashboard/Features";
import { getRecentBookings } from "../servies/bookingAction";
import { useQuery } from "@tanstack/react-query";
import Loading from "../ui/Loading";
import formatDate from "./../utils/helpers";
import StatisticChart from "../feateurs/dashboard/StatisticChart";
import NightsChart from "../feateurs/dashboard/NightsChart";
import { styled } from "styled-components";

const Head4 = styled.h4`
  text-align: center;
  margin-top: 12rem;
`;

export default function Dashboard() {
  // Filtration methods
  const filterWays = ["last 7 days", "last 30 days", "last 90 days"];

  const [flter, setFlter] = useState("last 90 days");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["bookings", flter],
    queryFn: () => getRecentBookings(flter),
  });

  if (isPending) {
    return <Loading />;
  }
  if (isError) {
    return <h1>error: {error}</h1>;
  }
  // number of bookings
  const bookings = data?.length;

  // total price
  const sales = data?.reduce((sale, booking) => sale + booking.totalPrice, 0);

  // booking only checked in
  const checkIn = data?.filter(
    (booking) => booking.status == "checked in"
  ).length;

  // number of nights with booking checked in / all number of nights with all bookings
  const rate = parseInt(
    (data
      ?.filter((booking) => booking.status == "checked in")
      .reduce((nights, booking) => nights + booking.numNights, 0) /
      data?.reduce((nights, booking) => nights + booking.numNights, 0)) *
      100
  );

  // statisticChart Data
  const statisticChartData = data.map((item) => {
    return {
      ...item,
      created_at: formatDate(item.created_at, false),
    };
  });

  // nightsChart Data
  const nightsChartData = data.map((item) => {
    return {
      numNights: item.numNights,
    };
  });
  return (
    <>
      <FeatureHeader
        activeFilter={flter}
        setActiveFilter={setFlter}
        title="dashboard"
        filters={filterWays}
        typeHeader="booking"
        bgC={false}
        breackPoint="640px"
      />

      {data.length > 0 ? (
        <>
          <Features values={[bookings, `${sales}$`, checkIn, `${rate}%`]} />

          <StatisticChart data={statisticChartData} />

          <NightsChart data={nightsChartData} />
        </>
      ) : (
        <Head4>No bookings in the {flter}</Head4>
      )}
    </>
  );
}
