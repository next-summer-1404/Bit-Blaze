import SignupForm from '@/components/Auth/register/SignupForm'
import { PostUserEmail } from '@/core/api/auth/postEmail';
import React from 'react'
// import { redirect } from 'next/navigation';
export interface IRegisterResponse {
  message?: string;
  tempUserId?: string;
  email?: string
}

const RegisterPage = () => {
  return (
    <div>
      <SignupForm action={PostUserEmail}/>
    </div>
  )
}

export default RegisterPage