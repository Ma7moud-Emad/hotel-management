import supabase from "./subabase";

// sign in
export default async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
}

// sign up
export async function logup({ email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
}

// sign out
export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
    throw error;
  }
}

//  get user information
export async function userInfo() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    console.error(error);
    throw error;
  }
  return user;
}

// delete user
export async function deleteUser(userId) {
  const { data, error } = await supabase.auth.admin.deleteUser(userId);

  if (error) {
    console.error("Error deleting user:", error);
    throw error;
  }

  return data;
}

// change password
export async function changePass(email, password) {
  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    console.error(error);
    throw error;
  }

  const { data, error: changeError } = await supabase.auth.updateUser({
    email,
    password,
  });
  if (changeError) {
    console.error(changeError);
    throw changeError;
  }
  return data;
}
