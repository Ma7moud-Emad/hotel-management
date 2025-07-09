import { useQuery } from "@tanstack/react-query";
import Cabin from "../feateurs/cabins/Cabin";
import Loading from "./../ui/Loading";
import CabinsHeader from "./../feateurs/cabins/CabinsHeader";
import { useState } from "react";
import AddCabin from "./../feateurs/cabins/AddCabin";
import CreateCabin from "../feateurs/cabins/CreateCabin";
import getCabins from "../servies/cabinsActions";
import styled from "styled-components";

const Empty = styled.div`
  height: 66%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export default function Cabins() {
  // type of filter
  const [flter, setFlter] = useState("all");

  // type of sort way
  const [sortWay, setSortWay] = useState("az");

  // show create form
  const [isAddCabin, setIsAddCabin] = useState(false);

  // current edit cabin
  const [currentCabin, setCurrentCabin] = useState(null);

  // using form to create or update
  const [isUpdate, setIsUpdate] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cabins", flter, sortWay],
    queryFn: () => getCabins(flter, sortWay),
  });

  if (isError) {
    return <h1>error: {error}</h1>;
  }

  return (
    <>
      <CabinsHeader
        activeFilter={flter}
        setActiveFilter={setFlter}
        setActiveSort={setSortWay}
        activeSort={sortWay}
      />
      {isLoading ? (
        <Loading />
      ) : data.length > 0 ? (
        data.map((item) => (
          <Cabin
            setIsAddCabin={setIsAddCabin}
            setCurrentCabin={setCurrentCabin}
            setIsUpdate={setIsUpdate}
            cabin={item}
            key={item.id}
          />
        ))
      ) : (
        <Empty>Not found</Empty>
      )}
      <AddCabin setIsAddCabin={setIsAddCabin} />
      {isAddCabin && (
        <CreateCabin
          setIsAddCabin={setIsAddCabin}
          cabinObj={currentCabin}
          setCabinObj={setCurrentCabin}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      )}
    </>
  );
}
