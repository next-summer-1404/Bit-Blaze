import React from 'react'
import LedtSide from '../leftSide/LedtSide'
import Image from 'next/image'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"

const VerifyForm = () => {
    return (
        <div 
        style={{padding: "0"}}
        className='flex flex-col sm:flex-row-reverse items-center gap-2 sm:gap-4 md:gap-30 justify-center w-full max-w-full sm:max-w-[1376px] m-auto px-2 sm:px-4 py-4'>
            <LedtSide />
            <div className="w-full max-w-[590.75px] min-h-[200px] sm:min-h-[300px] md:min-h-[600px] h-auto overflow-hidden flex flex-col">
                <div className="flex flex-col gap-3 sm:gap-5">
                    <h1 className="text-2xl md:text-[32px] font-[300] whitespace-nowrap text-center md:text-right">
                        به خانواده دلتا ، خوش برگشتی !
                    </h1>
                    <p className="text-sm md:text-[16px] font-[500] text-center md:text-right">
                        با وارد کردن اطلاعات خود به راحتی وارد پنل خودتون بشید و از پروژه هاتون خبر بگیرید !
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
                                    <g clip-path="url(#clip0_1_9672)">
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
                        <svg width="251" height="2" viewBox="0 0 251 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.875 1H250" stroke="url(#paint0_linear_1_8424)" stroke-width="2" stroke-linecap="round" />
                            <defs>
                                <linearGradient id="paint0_linear_1_8424" x1="1.875" y1="1.5" x2="250" y2="1.5" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.06" stop-color="#AAAAAA" stop-opacity="0.94" />
                                    <stop offset="1" stop-color="#AAAAAA" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="text-lg font-semibold text-[#AAAAAA] leading-8 px-8 py-3 whitespace-nowrap">یا میتونید</span>
                        <svg width="251" height="2" viewBox="0 0 251 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M249.875 1L1.75001 0.999978" stroke="url(#paint0_linear_1_8425)" stroke-width="2" stroke-linecap="round" />
                            <defs>
                                <linearGradient id="paint0_linear_1_8425" x1="249.875" y1="0.5" x2="1.75" y2="0.499978" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.06" stop-color="#AAAAAA" stop-opacity="0.94" />
                                    <stop offset="1" stop-color="#AAAAAA" stop-opacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <form className="flex gap-4 flex-col justify-between" action="">
                        <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 max-w-[585px] w-full justify-between items-center mx-auto'>
                            <InputOTP maxLength={5} className="flex justify-center bg-gray-900 p-2 rounded-lg w-full max-w-[350px] sm:max-w-[400px]" style={{ gap: '1rem', display: "flex", justifyContent: "center" }}>
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
                                        className="w-12 h-12 text-center text-white border-2 border-gray-600 rounded-lg focus:border-white focus:outline-8"
                                        style={{ backgroundColor: '#232323', border: "1px solid #565656", borderColor: '#4b5563', marginRight: "13px" }}
                                    />
                                    <InputOTPSlot
                                        index={4}
                                        className="w-12 h-12 text-center text-white border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none"
                                        style={{ backgroundColor: '#232323', border: "1px solid #565656", borderColor: '#4b5563', marginRight: "13px" }}
                                    />
                                </InputOTPGroup>
                            </InputOTP>
                            <div className='max-w-[226px] flex justify-between flex-row w-full p-1 items-center bg-[#7569FF] h-[34px] rounded-[12px]'>
                                <div className='flex flex-row bg-white w-[130px] h-[30] gap-3 items-center justify-center rounded-[10px]'>
                                    <span className='text-[13px] font-[600] text-[#303030] gap-3'>ارسال دوباره رمز</span>
                                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.32422 8L2.04439 6.00515C1.13374 5.20833 1.13374 3.79167 2.04439 2.99485L4.32422 1" stroke="#303030" stroke-width="2" stroke-linecap="round" />
                                    </svg>

                                </div>
                                <div className='flex flex-row items-center justify-center ml-3 gap-1'>
                                    <span className='text-white mt-1'>1:56</span>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_9812)">
                                            <path d="M8.32422 0C6.74197 0 5.19525 0.469192 3.87966 1.34824C2.56407 2.22729 1.53869 3.47672 0.933186 4.93853C0.327685 6.40034 0.169258 8.00887 0.47794 9.56072C0.786622 11.1126 1.54855 12.538 2.66737 13.6569C3.78619 14.7757 5.21165 15.5376 6.7635 15.8463C8.31535 16.155 9.92388 15.9965 11.3857 15.391C12.8475 14.7855 14.0969 13.7602 14.976 12.4446C15.855 11.129 16.3242 9.58225 16.3242 8C16.3219 5.87897 15.4783 3.84547 13.9785 2.34568C12.4788 0.845886 10.4453 0.00229405 8.32422 0ZM8.32422 14.6667C7.00568 14.6667 5.71675 14.2757 4.62042 13.5431C3.52409 12.8106 2.66961 11.7694 2.16503 10.5512C1.66044 9.33305 1.52842 7.99261 1.78565 6.6994C2.04289 5.40619 2.67783 4.21831 3.61018 3.28596C4.54253 2.35361 5.73041 1.71867 7.02362 1.46143C8.31683 1.2042 9.65727 1.33622 10.8754 1.8408C12.0936 2.34539 13.1348 3.19987 13.8674 4.2962C14.5999 5.39253 14.9909 6.68146 14.9909 8C14.9889 9.76752 14.2859 11.4621 13.0361 12.7119C11.7863 13.9617 10.0917 14.6647 8.32422 14.6667Z" fill="white" />
                                            <path d="M8.32435 4C8.14754 4 7.97797 4.07024 7.85294 4.19526C7.72792 4.32029 7.65768 4.48986 7.65768 4.66667V7.55L5.41035 8.958C5.26006 9.05189 5.15322 9.20163 5.11334 9.37429C5.07345 9.54695 5.10379 9.72838 5.19768 9.87867C5.29157 10.029 5.44131 10.1358 5.61397 10.1757C5.78663 10.2156 5.96806 10.1852 6.11835 10.0913L8.67835 8.49133C8.77507 8.43073 8.85461 8.34631 8.90936 8.24616C8.96411 8.146 8.99222 8.03347 8.99101 7.91933V4.66667C8.99101 4.48986 8.92077 4.32029 8.79575 4.19526C8.67073 4.07024 8.50116 4 8.32435 4Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_9812">
                                                <rect width="16" height="16" fill="white" transform="translate(0.324219)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row-reverse max-w-[588px] w-full items-center justify-between gap-4 mt-8'>
                            <button className='cursor-pointer flex rounded-[12px] flex-row justify-center items-center font-[600] text-[16px] bg-[#8CFF45] shadow-[0_0_10px_3px_rgba(140,255,69,0.3)] max-w-[588.25px] w-full text-[#363636] h-[44px] gap-4'>
                                ورود به حساب کاربری
                                <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.375 1L2.375 6L7.375 11" stroke="#363636" stroke-width="2" />
                                </svg>
                            </button>
                            <div className='border border-white flex max-w-[275px] w-full flex-row-reverse justify-center items-center pt-[8px] pr-[16px] pb-[8px] pl-[16px] rounded-[12px] space-x-2'>
                                <span className='font-[600] text-[white] text-[16px] flex'>تغییر شماره تلفن</span>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_9825)">
                                        <path d="M8.43487 1.33352C9.31921 1.33642 10.1942 1.51468 11.0092 1.85797C11.8242 2.20127 12.563 2.7028 13.1829 3.33352H11.1015C10.9247 3.33352 10.7552 3.40376 10.6301 3.52878C10.5051 3.6538 10.4349 3.82337 10.4349 4.00018C10.4349 4.177 10.5051 4.34656 10.6301 4.47159C10.7552 4.59661 10.9247 4.66685 11.1015 4.66685H13.8635C14.1918 4.66667 14.5066 4.53619 14.7387 4.30405C14.9709 4.07192 15.1014 3.75713 15.1015 3.42885V0.666851C15.1015 0.49004 15.0313 0.32047 14.9063 0.195446C14.7812 0.0704219 14.6117 0.000183976 14.4349 0.000183976C14.2581 0.000183976 14.0885 0.0704219 13.9635 0.195446C13.8384 0.32047 13.7682 0.49004 13.7682 0.666851V2.05218C12.6663 1.05982 11.3099 0.39379 9.85093 0.128683C8.39194 -0.136424 6.88795 0.00985861 5.50739 0.551149C4.12683 1.09244 2.92421 2.00736 2.03421 3.19347C1.14421 4.37957 0.601963 5.79001 0.468201 7.26685C0.45959 7.35969 0.470412 7.4533 0.499977 7.54173C0.529541 7.63015 0.577201 7.71145 0.639919 7.78044C0.702637 7.84943 0.779038 7.9046 0.864253 7.94243C0.949469 7.98027 1.04163 7.99993 1.13487 8.00018C1.29793 8.00226 1.45589 7.94341 1.57784 7.83515C1.69979 7.72688 1.77694 7.57701 1.7942 7.41485C1.94261 5.75535 2.70618 4.21132 3.93492 3.08608C5.16366 1.96083 6.76875 1.33571 8.43487 1.33352Z" fill="white" />
                                        <path d="M15.7359 8.00005C15.5728 7.99798 15.4149 8.05683 15.2929 8.16509C15.171 8.27335 15.0938 8.42323 15.0766 8.58539C14.9663 9.85421 14.4945 11.0648 13.717 12.0735C12.9395 13.0822 11.8889 13.8468 10.69 14.2764C9.49104 14.7061 8.19402 14.7828 6.95279 14.4975C5.71156 14.2121 4.57822 13.5768 3.68722 12.6667H5.76856C5.94537 12.6667 6.11494 12.5965 6.23996 12.4715C6.36498 12.3464 6.43522 12.1769 6.43522 12.0001C6.43522 11.8232 6.36498 11.6537 6.23996 11.5286C6.11494 11.4036 5.94537 11.3334 5.76856 11.3334H3.00655C2.84395 11.3333 2.68293 11.3653 2.53269 11.4274C2.38245 11.4896 2.24594 11.5808 2.13096 11.6958C2.01598 11.8108 1.9248 11.9473 1.86261 12.0975C1.80043 12.2478 1.76847 12.4088 1.76855 12.5714V15.3334C1.76855 15.5102 1.83879 15.6798 1.96382 15.8048C2.08884 15.9298 2.25841 16.0001 2.43522 16.0001C2.61203 16.0001 2.7816 15.9298 2.90663 15.8048C3.03165 15.6798 3.10189 15.5102 3.10189 15.3334V13.9481C4.20377 14.9404 5.56016 15.6064 7.01916 15.8716C8.47815 16.1367 9.98214 15.9904 11.3627 15.4491C12.7433 14.9078 13.9459 13.9929 14.8359 12.8068C15.7259 11.6207 16.2681 10.2102 16.4019 8.73339C16.4105 8.64055 16.3997 8.54693 16.3701 8.45851C16.3405 8.37008 16.2929 8.28879 16.2302 8.2198C16.1675 8.15081 16.0911 8.09564 16.0058 8.0578C15.9206 8.01997 15.8291 8.0003 15.7359 8.00005Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_9825">
                                            <rect width="16" height="16" fill="white" transform="translate(0.435059)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyForm