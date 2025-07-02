import supabase from "./subabase";

async function getBookings() {
  const { data, error } = await supabase.from("bookings").select("*");
  if (error) {
    console.error("Error fetching bookings:", error);
  }
  return data;
}

export default getBookings;
