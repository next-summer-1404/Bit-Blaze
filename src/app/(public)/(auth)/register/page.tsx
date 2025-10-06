import SignupForm from '@/components/Auth/register/SignupForm'
import React from 'react'
// import { redirect } from 'next/navigation';
export interface IRegisterResponse {
  message?: string;
  tempUserId?: string;
}

const PostUserEmail = async (
  prevState: IRegisterResponse,
  formData: FormData
): Promise<IRegisterResponse> => {
  "use server";
  const email = formData.get("email");
  const baseURL = process.env.API_BASE_URL;

  console.log("API_BASE_URL:", baseURL);

  if (!email) {
    console.log("No email provided");
    return { message: "لطفا ایمیل خود را وارد کنید"};
  }

  try {
    console.log("Sending request with email:", email);
    const response = await fetch(`${baseURL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Response data:", data);

    if (!response.ok) {
      return {
        message: data.message || "عملیات با موفقیت انجام نشد",
        tempUserId: "",
      };
    }

    return {
      message: data.message || "کد با موفقیت ارسال شد",
      tempUserId: data.tempUserId || "",
    };
  } catch (error) {
    console.error("Error in PostUserEmail:", error);
    return { message: "خطای شبکه رخ داده است"};
  }
};

const RegisterPage = () => {
  return (
    <div>
      <SignupForm action={PostUserEmail}/>
    </div>
  )
}

export default RegisterPage