import { useQuery } from "@tanstack/react-query";
import Cabin from "../feateurs/cabins/Cabin";
import Loading from "./../ui/Loading";
import { useState } from "react";
import AddCabin from "./../feateurs/cabins/AddCabin";
import CreateCabin from "../feateurs/cabins/CreateCabin";
import getCabins from "../servies/cabinsActions";
import FeatureHeader from "../ui/FeatureHeader/";
import Empty from "../ui/Empty";

export default function Cabins() {
  // sort options
  const sortOptions = [
    { name: "Sort by name (A-Z)", value: "az" },
    { name: "Sort by name (Z-A)", value: "za" },
    { name: "Sort by price (low first)", value: "lPrice" },
    { name: "Sort by price (high first)", value: "hPrice" },
    { name: "Sort by capacity (low first)", value: "lCapacity" },
    { name: "Sort by capacity (high first)", value: "hCapacity" },
  ];

  // Filtration methods
  const filterWays = ["all", "with discount", "no discount"];

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
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <FeatureHeader
        activeFilter={flter}
        setActiveFilter={setFlter}
        setActiveSort={setSortWay}
        activeSort={sortWay}
        title="all cabins"
        options={sortOptions}
        filters={filterWays}
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
        <Empty />
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
