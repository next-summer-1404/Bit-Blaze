"use client"
import React, { FC, useActionState, useEffect, useState, useRef } from 'react'
import LeftSide from '../leftSide/leftSide'
import Image from 'next/image'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { IVerifyResponse } from '@/app/(public)/(auth)/register/verify/page'
import LinearRSVG from '../authSVG/linearRSVG'
import RefreshSVG from '../authSVG/refreshSVG'
import Link from 'next/link'
import LinearLSVG from '../authSVG/linearLSVG'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { PostUserEmail } from '@/core/api/auth/postEmail'
import ClockSVG from '../authSVG/clockSVG'
import ButtonSubmit from './ButtonSubmit'

interface IProps {
    action: (prevState: IVerifyResponse, formData: FormData) => Promise<IVerifyResponse>;
}

const VerifyForm: FC<IProps> = ({ action }) => {
    const initialState: IVerifyResponse = { message: "", userId: "" };
    const [state, formAction] = useActionState(action, initialState)
    const [otpValue, setOtpValue] = useState("")
    const [time, setTime] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);
    const { email, setTempUserId, tempUserId, setUserId } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (time > 0) {
            const timer = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsResendDisabled(false);
        }
    }, [time]);

    useEffect(() => {
        if (state.userId) {
            setUserId(state.userId);
            router.push("/register/profile");
        }
    }, [state.userId, router, setUserId]);

    const handleResendEmail = async () => {
        if (!isResendDisabled && email) {
            setIsResendDisabled(true);
            setTime(60);
            const response = await PostUserEmail(undefined, undefined, email);
            if (response.tempUserId) {
                setTempUserId(response.tempUserId);
            } else {
                setIsResendDisabled(false);
                setTime(0);
            }
        }
    };

    return (
        <div
            style={{ padding: "0" }}
            className='flex flex-col sm:flex-row-reverse items-center gap-2 sm:gap-4 md:gap-30 justify-center w-full max-w-full sm:max-w-[1376px] m-auto px-2 sm:px-4 py-4'>
            <LeftSide />
            <div className="w-full max-w-[590.75px] min-h-[200px] sm:min-h-[300px] md:min-h-[600px] h-auto overflow-hidden flex flex-col">
                <div className="flex flex-col gap-3 sm:gap-5">
                    <h1 className="text-2xl md:text-[32px] font-[300] whitespace-nowrap text-center md:text-right">
                        به خانواده دلتا ، خوش برگشتی !
                    </h1>
                    <p className="text-sm md:text-[16px] font-[500] text-center md:text-right">
                        کد تأیید ارسالی به ایمیل {email} را وارد کنید
                    </p>
                </div>
                <div className='flex flex-col gap-8 mt-10'>
                    <div className="flex flex-col">
                        <div className="max-w-[588.25px] w-full h-auto bg-[#303030] flex flex-row justify-between rounded-2xl gap-2 p-1 sm:p-2">
                            <div className="flex max-w-[275px] w-full flex-row-reverse justify-center items-center py-1 sm:py-2 px-2 sm:px-4 rounded-[12px] space-x-2">
                                <p className='font-[600] text-[16px] text-[#AAAAAA] flex'>ورود با پسورد</p>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 8C8.79113 8 9.56448 7.76541 10.2223 7.32588C10.8801 6.88635 11.3928 6.26164 11.6955 5.53074C11.9983 4.79983 12.0775 3.99556 11.9231 3.21964C11.7688 2.44372 11.3878 1.73098 10.8284 1.17157C10.269 0.612165 9.55629 0.231202 8.78036 0.0768607C8.00444 -0.0774802 7.20017 0.00173314 6.46927 0.304484C5.73836 0.607234 5.11365 1.11992 4.67412 1.77772C4.2346 2.43552 4 3.20888 4 4C4.00106 5.06054 4.42283 6.07734 5.17274 6.82726C5.92266 7.57718 6.93946 7.99894 8 8ZM8 1.33334C8.52742 1.33334 9.04299 1.48973 9.48152 1.78275C9.92005 2.07577 10.2618 2.49224 10.4637 2.97951C10.6655 3.46678 10.7183 4.00296 10.6154 4.52024C10.5125 5.03753 10.2586 5.51268 9.88562 5.88562C9.51268 6.25856 9.03752 6.51254 8.52024 6.61543C8.00296 6.71832 7.46678 6.66551 6.97951 6.46368C6.49224 6.26185 6.07577 5.92005 5.78275 5.48152C5.48973 5.04299 5.33333 4.52742 5.33333 4C5.33333 3.29276 5.61428 2.61448 6.11438 2.11438C6.61448 1.61429 7.29276 1.33334 8 1.33334Z" fill="#AAAAAA" />
                                    <path d="M8 9.33301C6.40924 9.33477 4.88414 9.96748 3.75931 11.0923C2.63447 12.2172 2.00176 13.7423 2 15.333C2 15.5098 2.07024 15.6794 2.19526 15.8044C2.32029 15.9294 2.48986 15.9997 2.66667 15.9997C2.84348 15.9997 3.01305 15.9294 3.13807 15.8044C3.2631 15.6794 3.33333 15.5098 3.33333 15.333C3.33333 14.0953 3.825 12.9083 4.70017 12.0332C5.57534 11.158 6.76232 10.6663 8 10.6663C9.23768 10.6663 10.4247 11.158 11.2998 12.0332C12.175 12.9083 12.6667 14.0953 12.6667 15.333C12.6667 15.5098 12.7369 15.6794 12.8619 15.8044C12.987 15.9294 13.1565 15.9997 13.3333 15.9997C13.5101 15.9997 13.6797 15.9294 13.8047 15.8044C13.9298 15.6794 14 15.5098 14 15.333C13.9982 13.7423 13.3655 12.2172 12.2407 11.0923C11.1159 9.96748 9.59076 9.33477 8 9.33301Z" fill="#AAAAAA" />
                                </svg>
                            </div>
                            <div className="flex bg-[#8CFF45] shadow-[0_0_10px_3px_rgba(140,255,69,0.3)] max-w-[275px] w-full flex-row-reverse justify-center items-center py-1 sm:py-2 px-2 sm:px-4 rounded-[12px] space-x-2">
                                <p className='font-[600] text-[16px] text-[#363636] flex'>ورود با شماره</p>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_9672)">
                                        <path d="M15.5832 7.33301H14.2498V5.99967C14.2498 5.82286 14.1796 5.65329 14.0546 5.52827C13.9296 5.40325 13.76 5.33301 13.5832 5.33301C13.4064 5.33301 13.2368 5.40325 13.1118 5.52827C12.9867 5.65329 12.9165 5.82286 12.9165 5.99967V7.33301H11.5832C11.4064 7.33301 11.2368 7.40325 11.1118 7.52827C10.9867 7.65329 10.9165 7.82286 10.9165 7.99967C10.9165 8.17649 10.9867 8.34605 11.1118 8.47108C11.2368 8.5961 11.4064 8.66634 11.5832 8.66634H12.9165V9.99967C12.9165 10.1765 12.9867 10.3461 13.1118 10.4711C13.2368 10.5961 13.4064 10.6663 13.5832 10.6663C13.76 10.6663 13.9296 10.5961 14.0546 10.4711C14.1796 10.3461 14.2498 10.1765 14.2498 9.99967V8.66634H15.5832C15.76 8.66634 15.9296 8.5961 16.0546 8.47108C16.1796 8.34605 16.2498 8.17649 16.2498 7.99967C16.2498 7.82286 16.1796 7.65329 16.0546 7.52827C15.9296 7.40325 15.76 7.33301 15.5832 7.33301Z" fill="#363636" />
                                        <path d="M6.25 8C7.04113 8 7.81449 7.76541 8.47228 7.32588C9.13008 6.88635 9.64277 6.26164 9.94552 5.53074C10.2483 4.79983 10.3275 3.99556 10.1731 3.21964C10.0188 2.44372 9.63784 1.73098 9.07843 1.17157C8.51902 0.612165 7.80629 0.231202 7.03036 0.0768607C6.25444 -0.0774802 5.45017 0.00173314 4.71927 0.304484C3.98836 0.607234 3.36365 1.11992 2.92412 1.77772C2.4846 2.43552 2.25 3.20888 2.25 4C2.25106 5.06054 2.67283 6.07734 3.42274 6.82726C4.17266 7.57718 5.18946 7.99894 6.25 8ZM6.25 1.33334C6.77742 1.33334 7.29299 1.48973 7.73152 1.78275C8.17005 2.07577 8.51185 2.49224 8.71368 2.97951C8.91551 3.46678 8.96832 4.00296 8.86543 4.52024C8.76253 5.03753 8.50856 5.51268 8.13562 5.88562C7.76268 6.25856 7.28752 6.51254 6.77024 6.61543C6.25296 6.71832 5.71678 6.66551 5.22951 6.46368C4.74224 6.26185 4.32576 5.92005 4.03275 5.48152C3.73973 5.04299 3.58333 4.52742 3.58333 4C3.58333 3.29276 3.86428 2.61448 4.36438 2.11438C4.86448 1.61429 5.54276 1.33334 6.25 1.33334Z" fill="#363636" />
                                        <path d="M6.25 9.33301C4.65924 9.33477 3.13414 9.96748 2.00931 11.0923C0.884472 12.2172 0.251765 13.7423 0.25 15.333C0.25 15.5098 0.320238 15.6794 0.445262 15.8044C0.570286 15.9294 0.739856 15.9997 0.916667 15.9997C1.09348 15.9997 1.26305 15.9294 1.38807 15.8044C1.5131 15.6794 1.58333 15.5098 1.58333 15.333C1.58333 14.0953 2.075 12.9083 2.95017 12.0332C3.82534 11.158 5.01232 10.6663 6.25 10.6663C7.48768 10.6663 8.67466 11.158 9.54983 12.0332C10.425 12.9083 10.9167 14.0953 10.9167 15.333C10.9167 15.5098 10.9869 15.6794 11.1119 15.8044C11.237 15.9294 11.4065 15.9997 11.5833 15.9997C11.7601 15.9997 11.9297 15.9294 12.0547 15.8044C12.1798 15.6794 12.25 15.5098 12.25 15.333C12.2482 13.7423 11.6155 12.2172 10.4907 11.0923C9.36586 9.96748 7.84076 9.33477 6.25 9.33301Z" fill="#363636" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9672">
                                            <rect width="16" height="16" fill="white" transform="translate(0.25)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row max-w-[588px] w-full items-center justify-between gap-4'>
                        <div className='flex bg-[#8CFF45] shadow-[0_0_10px_3px_rgba(140,255,69,0.3)] w-[278px] h-[48px] flex-row-reverse justify-center items-center rounded-2xl space-x-2'>
                            <p className='font-[600] text-[16px] text-[#363636] flex'>ورود با حساب گوگل</p>
                            <Image src={'/assets/authImages/GoogleIcon.png'} width={24} height={24} alt='Google' />
                        </div>
                        <div className='flex bg-[#444444] w-[278px] h-[48px] flex-row-reverse justify-center items-center rounded-2xl space-x-2'>
                            <p className='font-[600] text-[16px] text-[#AAAAAA] flex'>ورود با حساب اپل</p>
                            <Image src={'/assets/authImages/Apple-icone.png'} width={24} height={24} alt='Apple' />
                        </div>
                    </div>
                    <div className="flex justify-center max-w-[558px] h-[20px] w-full mr-auto ml-auto items-center rounded-full">
                        <LinearLSVG />
                        <span className="text-lg font-semibold text-[#AAAAAA] leading-8 px-8 py-3 whitespace-nowrap">یا میتونید</span>
                        <LinearRSVG />
                    </div>
                    <form className="flex gap-11 flex-col justify-between" action={formAction}>
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 max-w-[585px] w-full justify-between items-center mx-auto'>
                            <InputOTP
                                onChange={(value) => setOtpValue(value)}
                                maxLength={6}
                                className="flex justify-center bg-gray-900 p-2 rounded-lg w-full max-w-[350px] sm:max-w-[400px]"
                                style={{ gap: '1rem', display: "flex", justifyContent: "center" }}
                            >
                                <InputOTPGroup>
                                    <InputOTPSlot
                                        index={0}
                                        className="w-12 h-12 text-center text-white border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none"
                                        style={{ backgroundColor: '#232323', border: "1px solid #565656", borderColor: '#4b5563', caretColor: '#ffffff', marginRight: "13px" }}
                                    />
                                    <InputOTPSlot
                                        index={1}
                                        className="w-12 h-12 text-center text-white border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none"
                                        style={{ backgroundColor: '#232323', border: "1px solid #565656", borderColor: '#4b5563', marginRight: "13px" }}
                                    />
                                    <InputOTPSlot
                                        index={2}
                                        className="w-12 h-12 text-center text-white border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none"
                                        style={{ backgroundColor: '#232323', border: "1px solid #565656", borderColor: '#4b5563', marginRight: "13px" }}
                                    />
                                    <InputOTPSlot
                                        index={3}
                                        className="w-12 h-12 text-center text-white border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none"
                                        style={{ backgroundColor: '#232323', border: "1px solid #565656", borderColor: '#4b5563', marginRight: "13px" }}
                                    />
                                    <InputOTPSlot
                                        index={4}
                                        className="w-12 h-12 text-center text-white border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none"
                                        style={{ backgroundColor: '#232323', border: "1px solid #565656", borderColor: '#4b5563', marginRight: "13px" }}
                                    />
                                    <InputOTPSlot
                                        index={5}
                                        className="w-12 h-12 text-center text-white border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none"
                                        style={{ backgroundColor: '#232323', border: "1px solid #565656", borderColor: '#4b5563', marginRight: "13px" }}
                                    />
                                </InputOTPGroup>
                            </InputOTP>
                            <input type="hidden" name='verifyNumber' value={otpValue} />
                            <input type="hidden" name='tempUserId' value={tempUserId} />
                            <div className='max-w-[226px] flex justify-between flex-row w-full p-1 items-center bg-[#7569FF] h-[34px] rounded-[12px]'>
                                <button
                                    type="button"
                                    disabled={isResendDisabled}
                                    onClick={handleResendEmail}
                                    className={`flex cursor-pointer flex-row bg-white w-[130px] h-[30px] gap-3 items-center justify-center rounded-[10px] ${isResendDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    <span className='text-[13px] font-[600] text-[#303030]'>ارسال دوباره رمز</span>
                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.32422 8L2.04439 6.00515C1.13374 5.20833 1.13374 3.79167 2.04439 2.99485L4.32422 1" stroke="#303030" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className='flex flex-row items-center justify-center ml-3 gap-1'>
                                    <span className='text-white mt-1'>{time}</span>
                                    <ClockSVG />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row-reverse max-w-[588px] w-full items-center justify-between gap-4 mt-8'>
                            <ButtonSubmit />
                            <Link href={"/register"} className='border border-white flex max-w-[275px] w-full flex-row-reverse justify-center items-center pt-[8px] pr-[16px] pb-[8px] pl-[16px] rounded-[12px] space-x-2'>
                                <span className='font-[600] text-[white] text-[16px] flex'>تغییر ایمیل شما</span>
                                <RefreshSVG />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyForm