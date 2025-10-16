import VerifyForm from '@/components/Auth/register/VerifyForm'
import { UserVerifyNumber } from '@/core/api/auth/postVerify';
import React from 'react'
export interface IVerifyResponse {
    message?: string;
    userId?: string;
    error?: string
}

const VerifyPage = () => {
  return (
    <div className='flex flex-col max-w-[1376px] w-full ml-auto mr-auto'>
      <VerifyForm action={UserVerifyNumber} />
    </div>
  )
}

export default VerifyPage