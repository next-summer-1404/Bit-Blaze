import Top from '@/components/Auth/top/Top'
import React, { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode;
}

const ResetPasswordLayout: FC<IProps> = ({ children }) => {
  return (
    <main className='flex flex-col max-w-[1376px] w-full ml-auto mr-auto'>
      <Top/>
      {children}
    </main>
  )
}

export default ResetPasswordLayout 