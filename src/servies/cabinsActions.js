import supabase from "./subabase";

// fetch all cabins
export default async function getCabins(way = "all", sort = "az") {
  let query = supabase.from("cabins").select("*");

  // Filter by discount status
  switch (way) {
    case "no discount":
      query = query.eq("discount", 0);
      break;
    case "with discount":
      query = query.gt("discount", 0);
      break;
  }

  // Apply sorting
  switch (sort) {
    case "az":
      query = query.order("name", { ascending: true });
      break;
    case "za":
      query = query.order("name", { ascending: false });
      break;
    case "hPrice":
      query = query.order("regularPrice", { ascending: false });
      break;
    case "lPrice":
      query = query.order("regularPrice", { ascending: true });
      break;
    case "hCapacity":
      query = query.order("maxCapacity", { ascending: false });
      break;
    case "lCapacity":
      query = query.order("maxCapacity", { ascending: true });
      break;
    default:
      query = query.order("name", { ascending: true });
  }

  const { data: fetchCabins, error: errorFetchCabins } = await query;

  if (errorFetchCabins) {
    throw errorFetchCabins;
  }

  return fetchCabins;
}

// add new cabin
export async function addCabin(newCabin) {
  const imageName = `https://tpnazochmapbixyunstp.supabase.co/storage/v1/object/public/cabins-images/${newCabin.image.name}`;

  // 1. Upload photo to cabins-images bucket
  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(newCabin.image.name, newCabin.image);

  if (storageError) {
    throw storageError;
  } else {
    // 2. Add cabin to database
    const { data: newCabinData, error: errorNewCabin } = await supabase
      .from("cabins")
      .insert([{ ...newCabin, image: `${imageName}` }]);

    if (errorNewCabin) {
      throw errorNewCabin;
    }

    return newCabinData;
  }
}

// update cabin information
export async function updateCabin(cabinObj) {
  const { data: updateCabin, error: errorUpdateCabin } = await supabase
    .from("cabins")
    .update(cabinObj)
    .eq("id", cabinObj.id)
    .select();

  if (errorUpdateCabin) {
    throw errorUpdateCabin;
  }

  return updateCabin;
}

// delete cabin
export async function deleteCabin(cabinObj) {
  const imageNAme = cabinObj.image.split("/").pop();

  // 1. remove photo from cabins-images bucket
  const { error: removeError } = await supabase.storage
    .from("cabins-images")
    .remove([imageNAme]);
  if (removeError) {
    throw removeError;
  } else {
    // 2. remove cabin from database
    const { data: removeCabin, error: errorCabin } = await supabase
      .from("cabins")
      .delete()
      .eq("id", cabinObj.id);

    if (errorCabin) {
      throw errorCabin;
    }

    return removeCabin;
  }
}

// duplicate cabin but different id
export async function duplicateCabin(cabinObj) {
  // eslint-disable-next-line no-unused-vars
  const { id, created_at, ...cabinData } = cabinObj;

  const { data: duplicatedRow, error: insertError } = await supabase
    .from("cabins")
    .insert(cabinData)
    .select();

  if (insertError) {
    throw insertError;
  }

  return duplicatedRow;
}
