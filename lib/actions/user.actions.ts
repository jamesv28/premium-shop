"use server";

import { signInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// sign in user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);
    return {
      success: true,
      message: "Signed in successfully",
    };
  } catch (err) {
    if (isRedirectError(true)) {
      throw err;
    }
    return {
      success: false,
      message: "Invalid email or password",
    };
  }
}

export async function signOutUser() {
  await signOut();
}
