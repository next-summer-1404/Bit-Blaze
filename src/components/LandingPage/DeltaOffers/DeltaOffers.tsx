'use client'
import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import DeltaOffersList from './DeltaOffersList/DeltaOffersList';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const DeltaOffers = () => {
    return (
        <div className='mt-32 mx-auto max-w-[95%] w-full flex flex-col justify-center items-center gap-5 relative'>
            <div className='flex flex-col w-full'>
                <div className='flex flex-row items-center justify-center gap-2 w-[150px] h-[40px] rounded-[16px] bg-[#FF5555] text-[#FFFFFF] mr-5 z-[1]'>
                    <div className='mt-1'>
                        12:32:25
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_67_284)">
                            <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845886 10.121 0.00229405 8 0ZM8 14.6667C6.68146 14.6667 5.39253 14.2757 4.2962 13.5431C3.19987 12.8106 2.34539 11.7694 1.84081 10.5512C1.33622 9.33305 1.2042 7.99261 1.46144 6.6994C1.71867 5.40619 2.35361 4.21831 3.28596 3.28596C4.21831 2.35361 5.4062 1.71867 6.6994 1.46143C7.99261 1.2042 9.33305 1.33622 10.5512 1.8408C11.7694 2.34539 12.8106 3.19987 13.5431 4.2962C14.2757 5.39253 14.6667 6.68146 14.6667 8C14.6647 9.76752 13.9617 11.4621 12.7119 12.7119C11.4621 13.9617 9.76752 14.6647 8 14.6667Z" fill="white" />
                            <path d="M8.00013 4C7.82332 4 7.65375 4.07024 7.52872 4.19526C7.4037 4.32029 7.33346 4.48986 7.33346 4.66667V7.55L5.08613 8.958C4.93584 9.05189 4.829 9.20163 4.78912 9.37429C4.74923 9.54695 4.77957 9.72838 4.87346 9.87867C4.96735 10.029 5.11709 10.1358 5.28975 10.1757C5.46241 10.2156 5.64384 10.1852 5.79413 10.0913L8.35413 8.49133C8.45085 8.43073 8.5304 8.34631 8.58514 8.24616C8.63989 8.146 8.668 8.03347 8.66679 7.91933V4.66667C8.66679 4.48986 8.59656 4.32029 8.47153 4.19526C8.34651 4.07024 8.17694 4 8.00013 4Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_67_284">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className='flex flex-col'>
                    <div className='bg-[#2D2D2D] relative w-full h-fit rounded-bl-[40px] rounded-br-[40px] rounded-tl-[40px] 
                                    before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] before:content-[""] 
                                    before:w-56 before:h-16 before:-translate-y-16 before:absolute before:top-0 
                                    before:right-0 before:rounded-tr-[20px] before:bg-[#2D2D2D] after:absolute 
                                    after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] after:transform-[rotate(11deg)] 
                                    after:top-[-1.2rem] after:right-[13.5rem] after:shadow-[6px_10px_0_0_rgba(45,45,45,1)]
                                    [&_.second-before]:absolute [&_.second-before]:content-[""] [&_.second-before]:w-[10.4rem] 
                                    [&_.second-before]:h-[2rem] [&_.second-before]:bg-transparent [&_.second-before]:rounded-[14px]
                                    [&_.second-before]:outline-[5px] [&_.second-before]:outline-[#2D2D2D]
                                    [&_.second-before]:top-[-3.8rem] [&_.second-before]:right-[0.4rem]
                                    '>
                        <div className='flex flex-col gap-5 mt-5 max-w-[98%] w-full mx-auto mb-6'>
                            <div className="second-before"></div>
                            <h3 className='text-[#8CFF45] text-[16px] font-[500] flex flex-row gap-2 items-center'>
                                بهترین تخفیف
                                <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M45 9.73205C46.3333 8.96225 46.3333 7.03775 45 6.26795L39 2.80385C37.6667 2.03405 36 2.9963 36 4.5359L36 11.4641C36 13.0037 37.6667 13.966 39 13.1962L45 9.73205Z" fill="#8CFF45" />
                                    <path d="M23.75 9.29904C24.75 8.72169 24.75 7.27831 23.75 6.70096L19.25 4.10289C18.25 3.52554 17 4.24722 17 5.40192L17 10.5981C17 11.7528 18.25 12.4745 19.25 11.8971L23.75 9.29904Z" fill="#8CFF45" fillOpacity="0.5" />
                                    <path d="M6.5 8.86602C7.16667 8.48112 7.16667 7.51887 6.5 7.13397L3.5 5.40192C2.83333 5.01702 2 5.49815 2 6.26795L2 9.73205C2 10.5019 2.83333 10.983 3.5 10.5981L6.5 8.86602Z" fill="#8CFF45" fillOpacity="0.25" />
                                </svg>
                            </h3>
                            <div className='flex flex-row w-full justify-between'>
                                <h2 className='font-[200] text-[32px] text-[#FFFFFF]'>
                                    <b className='font-[700] text-[32px]'>پیشنهاد های ویژه</b> دلتا
                                </h2>
                                <div className='border border-[#FFFFFF] text-[#FFFFFF] rounded-[12px] items-center justify-center gap-1 flex flex-row  w-[130px] h-[36px]'>
                                    مشاهده همه
                                    <MdOutlineKeyboardArrowLeft />
                                </div>
                            </div>
                            <div className='flex flex-row justify-between max-w-[98%] h-[500px]'>
                                <Swiper
                                    spaceBetween={170}
                                    slidesPerView={4}
                                    rewind={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        renderBullet: (index, className) => {
                                            return `<span class="${className} custom-bullet"></span>`;
                                        },
                                    }}
                                    modules={[Autoplay, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <DeltaOffersList />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <DeltaOffersList />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <DeltaOffersList />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <DeltaOffersList />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <DeltaOffersList />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <DeltaOffersList />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <DeltaOffersList />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <DeltaOffersList />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute right-[-109px] top-2 transform -translate-y-1/2 w-[218px] h-[218px] blur-[50px] bg-[#7569FF]/15  rounded-full flex items-center justify-start p-4"></div>
        </div>
    )
}

export default DeltaOffers