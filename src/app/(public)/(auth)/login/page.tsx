import LoginForm from '@/components/Auth/login/Login'
import Top from '@/components/Auth/top/Top'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex flex-col max-w-[1376px] w-full ml-auto mr-auto'>
      <Top />
      <LoginForm />
    </div>
  )
}

export default LoginPage