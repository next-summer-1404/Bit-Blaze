import React, { FC, ReactNode } from 'react'
interface IProps {
    children: ReactNode;
}
const AuthLayout:FC<IProps> = ({children}) => {
  return (
        <main className='text-white'>
            adsasdasdasdsddddddddssssssssssssssssssssssssssssss
            {children}
        </main>
  )
}

export default AuthLayout