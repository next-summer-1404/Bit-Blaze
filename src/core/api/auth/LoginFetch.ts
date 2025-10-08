"use server";

import { ILoginResponse } from "@/app/(public)/(auth)/login/page";
import { cookies } from "next/headers";

export const LoginFetch = async (
  prevState: ILoginResponse,
  formData: FormData,
): Promise<ILoginResponse> => {
  const email = formData.get("email");
  const password = formData.get("password");

  const baseURL = process.env.API_BASE_URL;

  console.log("API_BASE_URL:", baseURL);
  console.log("Sending request with:", { email, password });

  if (!email || !password) {
    return {
      accessToken: "",
      refreshToken: "",
    };
  }

  const CoockieStore = await cookies()

  try {
    const response = await fetch(`${baseURL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Response data:", data);

    if (!response.ok) {
      return {
        accessToken: "",
        refreshToken: "",
      };
    }

    CoockieStore.set("accessToken", data.accessToken);
    CoockieStore.set("refreshToken", data.refreshToken);

    console.log("Cookies set successfully");

    return {
      accessToken: data.accessToken || "",
      refreshToken: data.refreshToken || "",
    };
  } catch (error) {
    console.error("Error in LoginFetch:", error);
    return {
      accessToken: "",
      refreshToken: "",
    };
  }
};