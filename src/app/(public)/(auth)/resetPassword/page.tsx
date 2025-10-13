import SendEmail from '@/components/Auth/resetPassword/SendEmail'
import { PostEmail } from '@/core/api/auth/postEmail(reset)';
import React from 'react'

export interface IResetPasswordResponse {
    message?: string;
    email?: string;
    error?: string;
}

const ResetPasswordPage = () => {
  return (
    <div>
        <SendEmail action={PostEmail} />
    </div>
  )
}

export default ResetPasswordPage