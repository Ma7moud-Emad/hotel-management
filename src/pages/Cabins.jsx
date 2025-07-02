import { useQuery } from "@tanstack/react-query";
import getCabins from "./../servies/getCabins";
import Cabin from "../feateurs/cabins/Cabin";
import styled from "styled-components";
import Loading from "./../ui/Loading";
import CabinsHeader from "./../feateurs/cabins/CabinsHeader";
import { useState } from "react";
import AddCabin from "./../feateurs/cabins/AddCabin";
import CreateCabin from "../feateurs/cabins/CreateCabin";

const CabinItems = styled.div``;
export default function Cabins() {
  const [flter, setFlter] = useState("all");
  const [isAddCabin, setIsAddCabin] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h1>error: {error}</h1>;
  }

  return (
    <>
      <CabinsHeader activeFilter={flter} setActiveFilter={setFlter} />
      {data?.map((item) => (
        <Cabin cabin={item} key={item.id} />
      ))}
      <AddCabin setIsAddCabin={setIsAddCabin} />
      {isAddCabin && <CreateCabin setIsAddCabin={setIsAddCabin} />}
    </>
  );
}
