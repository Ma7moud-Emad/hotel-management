import supabase from "./subabase";

// fetch guest #ID
export default async function getGuest(id) {
  const { data: guestData, error: errorguestData } = await supabase
    .from("guests")
    .select("*")
    .eq("id", id)
    .single();

  if (errorguestData) {
    throw errorguestData;
  }

  return guestData;
}
