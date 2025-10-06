import VerifyForm from '@/components/Auth/register/VerifyForm'
import React from 'react'
export interface IVerifyResponse {
    message?: string;
    userId?: string;
}

const UserVerifyNumber = async (
  prevState: IVerifyResponse,
  formData: FormData
): Promise<IVerifyResponse> => {
  "use server";
  const verifyNumber = formData.get("verifyNumber");
  const baseURL = process.env.API_BASE_URL;

  console.log("API_BASE_URL:", baseURL);

  if (!verifyNumber) {
    console.log("No email provided");
    return { message: "لطفا ایمیل خود را وارد کنید"};
  }

  try {
    console.log("Sending request with email:", verifyNumber);
    const response = await fetch(`${baseURL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ verifyNumber }),
    });

    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Response data:", data);

    if (!response.ok) {
      return {
        message: data.message || "عملیات با موفقیت انجام نشد",
        userId: "",
      };
    }

    return {
      message: data.message || "کد با موفقیت ارسال شد",
      userId: data.userId || "",
    };
  } catch (error) {
    console.error("Error in PostUserEmail:", error);
    return { message: "خطای شبکه رخ داده است"};
  }
};

const VerifyPage = () => {
  return (
    <div className='flex flex-col max-w-[1376px] w-full ml-auto mr-auto'>
      <VerifyForm action={UserVerifyNumber} />
    </div>
  )
}

export default VerifyPage