import supabase from "./subabase";

// get all bookings
export default async function getBookings(way = "all", sort = "recent") {
  let query = supabase.from("bookings").select("*");

  // Filter by discount status
  switch (way) {
    case "checkedIn":
      query = query.eq("status", "checked in");
      break;
    case "checkedOut":
      query = query.eq("status", "checked out");
      break;
    case "unconfirmed":
      query = query.eq("status", "unconfirmed");
      break;
  }
  // Apply sorting
  switch (sort) {
    case "recent":
      query = query.order("created_at", { ascending: false });
      break;
    case "earlier":
      query = query.order("created_at", { ascending: true });
      break;
    case "hAmount":
      query = query.order("totalPrice", { ascending: false });
      break;
    case "lAmount":
      query = query.order("totalPrice", { ascending: true });
      break;
    default:
      query = query.order("created_at", { ascending: true });
  }

  const { data, error } = await query;
  if (error) {
    console.error("Error fetching bookings:", error);
  }
  return data;
}

// get booking #Id
export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
  return data;
}

// delete booking #ID
export async function deleteBooking(id) {
  const { data: delData, error: delError } = await supabase
    .from("bookings")
    .delete()
    .eq("id", id);

  if (delError) {
    console.error("Error fetching bookings:", delError);
    throw delError;
  }
  return delData;
}

// check-in booking
export async function checkInBooking({ id, hasBreakfast }) {
  const { data: checkInData, error: checkInError } = await supabase
    .from("bookings")
    .update({ status: "checked in", isPaid: true, hasBreakfast })
    .eq("id", id);
  if (checkInError) {
    console.error("Error checking in booking:", checkInError);
    throw checkInError;
  }

  return checkInData;
}

// check-out booking
export async function checkOutBooking(id) {
  const { data: checkOutData, error: checkOutError } = await supabase
    .from("bookings")
    .update({
      status: "checked out",
    })
    .eq("id", id);
  if (checkOutError) {
    console.error("Error checking in booking:", checkOutError);
    throw checkOutError;
  }

  return checkOutData;
}

/**
 * Fetches bookings from the last N days
 * @param {number} days - Number of days to look back (default: 7)
 * @returns {Promise<Array>} Array of booking records
 */
export async function getRecentBookings(days) {
  const timePeriods = {
    "last 7 days": 7,
    "last 30 days": 30,
    "last 90 days": 90,
  };

  const { data, error } = await supabase
    .from("bookings")
    .select("created_at,extrasPrice,totalPrice,status,numNights")
    .gte(
      "created_at",
      new Date(
        Date.now() - timePeriods[days] * 24 * 60 * 60 * 1000
      ).toISOString()
    )
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}
