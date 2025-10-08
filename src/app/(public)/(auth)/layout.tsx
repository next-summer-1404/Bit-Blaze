
import { AuthProvider } from '@/context/AuthContext';
import React, { FC, ReactNode } from 'react'
interface IProps {
    children: ReactNode;
}
const AuthLayout:FC<IProps> = ({children}) => {
  return (
    <AuthProvider>
        <main className='text-white'>
            {children}
        </main>
    </AuthProvider>
  )
}

export default AuthLayout