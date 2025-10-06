import ProfileForm from '@/components/Auth/register/ProfileForm'
import React from 'react'
export interface IProfile {
    "message": "Registration completed successfully",
    "user": {
        "id": "673",
        "role": "buyer",
        "membershipDate": null,
        "email": "at9506270@gmail.com",
        "phoneNumber": "09044495626",
        "emailVerified": true,
        "verificationCode": "666626",
        "verificationCodeExpires": "2025-10-06T19:45:04.088Z",
        "resetCode": null,
        "resetCodeExpires": null,
        "fullName": "نام کاربر",
        "firstName": "نام",
        "lastName": "کاربر",
        "profilePicture": null,
        "createdAt": "2025-10-06T16:05:04.088Z",
        "updatedAt": "2025-10-06T16:05:04.088Z"
    }
}
const ProfilePage = () => {
  return (
     <div className='flex flex-col max-w-[1376px] w-full ml-auto mr-auto'>
      <ProfileForm />
    </div>
  )
}

export default ProfilePage