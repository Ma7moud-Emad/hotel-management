import { useQuery } from "@tanstack/react-query";
import getBookings from "./../servies/bookingAction";
import { useState } from "react";
import FeatureHeader from "../ui/FeatureHeader";
import Booking from "../feateurs/bookings/Booking";
import Loading from "../ui/Loading";
import styled from "styled-components";
import Empty from "../ui/Empty";

const Content = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default function Bookings() {
  // sort options
  const sortOptions = [
    { name: "Sort by date (recent first)", value: "recent" },
    { name: "Sort by date (earlier first)", value: "earlier " },
    { name: "Sort by amount (high first)", value: "hAmount" },
    { name: "Sort by amount (low first)", value: "lAmount" },
  ];

  // Filtration methods
  const filterWays = ["all", "checkedIn", "checkedOut", "unconfirmed"];

  // type of filter
  const [flter, setFlter] = useState("all");

  // type of sort way
  const [sortWay, setSortWay] = useState("recent");

  // display all bookings
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["bookings", flter, sortWay],
    queryFn: () => getBookings(flter, sortWay),
  });

  if (isError) {
    return <h1>error: {error}</h1>;
  }

  return (
    <>
      <FeatureHeader
        activeFilter={flter}
        setActiveFilter={setFlter}
        setActiveSort={setSortWay}
        activeSort={sortWay}
        title="all bookings"
        options={sortOptions}
        filters={filterWays}
        typeHeader="booking"
      />
      {isPending ? (
        <Loading />
      ) : (
        <Content>
          {data.length == 0 ? (
            <Empty />
          ) : (
            data.map((item) => <Booking booking={item} key={item.id} />)
          )}
        </Content>
      )}
    </>
  );
}
