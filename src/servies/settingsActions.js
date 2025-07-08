import supabase from "./subabase";

// fetch setting
export default async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*");
  if (error) {
    console.error("Error fetching settings:", error);
    throw error;
  }
  return data;
}

// change setting
export async function changeSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .select();

  if (error) {
    console.error("Error change settings:", error);
    throw error;
  }

  return data;
}
