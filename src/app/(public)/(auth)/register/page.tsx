import RegisterForm from '@/components/Auth/register/Register'
import Top from '@/components/Auth/top/Top'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className='flex flex-col max-w-[1376px] w-full ml-auto mr-auto'>
      <Top />
      <RegisterForm />
    </div>
  )
}

export default RegisterPage