'use server'
import { createSupabaseServerClient } from "@/utils/supabase/actions";

export async function signUpNewUser({ userName, email, password }) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Error signing up:', error.message);
    // Handle the error, show a message to the user, etc.
  } else {
    console.log('User signed up successfully:', data);
    // Handle successful signup, maybe redirect the user, show a success message, etc.
  }
}

  