"use server";
import { INewPasswordResponse } from "@/app/(public)/(auth)/resetPassword/newPassword/page";
export const postNewPassword = async (
  prevState: INewPasswordResponse,
  formData: FormData,
): Promise<INewPasswordResponse> => {

  const email = formData.get("email");
  const resetCode = formData.get("resetCode");
  const newPassword = formData.get("newPassword");

  if (!resetCode) {
    return { message: "لطفا کد تأیید و شناسه موقت را وارد کنید"};
  }

  const baseURL = process.env.API_BASE_URL;

  try {
    const response = await fetch(`${baseURL}/api/auth/forgot-password/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email,
        resetCode,
        newPassword
    }),
    });

    const data = await response.json();
    console.log("step three", data)
    if (!response.ok) {
      return {
        message: data.message || "عملیات با موفقیت انجام نشد",
        seccess: false
      };
    }

    return {
      message: data.message || "عمیلیات با موفقیت انجام شد",
    };
  } catch (error) {
    console.error("Error in PostUserEmail:", error);
    return { message: "خطای شبکه رخ داده است",  };
  }
};