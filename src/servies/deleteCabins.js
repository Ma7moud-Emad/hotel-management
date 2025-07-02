import supabase from "./subabase";

async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabin could be not delete");
  }
  return data;
}
export default deleteCabin;
