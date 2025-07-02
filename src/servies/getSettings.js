import supabase from "./subabase";

async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*");
  if (error) {
    console.error("Error fetching settings:", error);
  }
  return data;
}

export default getSettings;
