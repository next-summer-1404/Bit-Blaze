// import ProfileForm from '@/components/Auth/register/ProfileForm'
// import ProfileForm from '@/components/Auth/register/ProfileForm'
import VerifyForm from '@/components/Auth/register/VerifyForm'
// import SignupForm from '@/components/Auth/register/SignupForm'
import Top from '@/components/Auth/top/Top'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='flex flex-col max-w-[1376px] w-full ml-auto mr-auto'>
      <Top />
      <VerifyForm />
    </div>
  )
}

export default RegisterPage