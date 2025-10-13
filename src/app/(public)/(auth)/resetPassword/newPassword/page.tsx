import NewPassword from '@/components/Auth/resetPassword/NewPassword'
import { postNewPassword } from '@/core/api/auth/postNewPassword(reset)'
import React from 'react'

export interface INewPasswordResponse {
     message?: string,
     success?: boolean
     error?: string,
}

const NewPasswordPage = () => {
  return (
    <div>
      <NewPassword action={postNewPassword} />
    </div>
  )
}

export default NewPasswordPage