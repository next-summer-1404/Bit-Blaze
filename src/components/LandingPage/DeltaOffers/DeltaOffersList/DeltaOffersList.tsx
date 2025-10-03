'use client'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { BiBuildingHouse } from "react-icons/bi";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const DeltaOffersList = () => {
    return (
        <div className='w-[306px] mt-5 group'>
            <div className='flex flex-col relative'>
                <div className='flex flex-row justify-between items-center relative'>
                    <div className='bg-[#FFFFFF] z-[1] mr-3 translate-y-2 flex flex-row gap-1.5 items-center justify-center rounded-[10px] w-[67px] h-[32px]'>
                        <div className='mt-1 font-[700] text-[16px]'>
                            4.5
                        </div>
                        <FaStar />
                    </div>
                    <FaArrowLeftLong className='w-[45px] h-[22px] rounded-[8px] bg-[#393939] text-[#FFFFFF] group-hover:bg-[#8CFF45] group-hover:text-[#363636] transition-all duration-300' size={25} />
                </div>
                <div className='bg-[#393939] group-hover:bg-[#8CFF45] group-hover:after:shadow-[6px_10px_0_0_rgba(140,255,69,1)]
                 group-hover:before:bg-[#8CFF45] before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative w-full h-[200px] mt-3 rounded-tl-[24px] rounded-bl-[24px] rounded-br-[24px]
                    before:bg-[#393939] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-10 before:rounded-tr-[17px] before:w-28 before:absolute before:-translate-y-10 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(11deg)] after:top-[-1.2rem] after:right-[6.5rem] after:shadow-[6px_10px_0_0_rgba(57,57,57,1)]'>

                    <div className="absolute top-[-2.5rem] right-[5px] w-[5rem] h-[2rem] rounded-[14px] 
                        outline-[5px] outline-[#393939] 
                        group-hover:outline-[#8CFF45] 
                        transition-all duration-300
                        "></div>
                    <div className='bg-[#444444] w-[274px] h-[156px] rounded-[20px] mt-7 m-auto '>
                        <Swiper
                            slidesPerView={1}
                            navigation={true}
                            pagination={{
                                clickable: true,
                                clickableClass:"readsad"
                            }}
                            modules={[Autoplay, Pagination]}
                            className=" h-full cursor-pointer"
                        >
                            <SwiperSlide>
                                <div className=' w-full h-full flex justify-center items-center'>
                                    sadasd
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=' w-full h-full flex justify-center items-center'>
                                    sadasd
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <h3 className='text-[#FFFFFF] font-[500] text-[16px] mt-5 mr-1'>آپارتمان لوکس زعفرانیه</h3>
                    <div className='bg-[#FF5555] w-[52px] h-[32px] text-[#FFFFFF] text-[16px] font-[600] mt-5 rounded-[12px]'>
                        <div className='m-auto flex justify-center items-center h-full'>
                            15%
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-2 text-[#AAAAAA] mt-1 items-center'>
                    <CiLocationOn size={20} />
                    <div className='mt-1 text-[14px]'>
                        گیلان ، رشت
                    </div>
                </div>
                <div className='flex flex-row gap-2 text-[#AAAAAA] mt-1 items-center'>
                    <BiBuildingHouse size={20} />
                    <div className='mt-1 text-[14px]'>
                        2 خوابه ، 2 حمامه ، ظرفیت 6 نفر
                    </div>
                </div>
                <div className='bg-[#444444] group-hover:bg-[#8CFF45] transition-all duration-300 group-hover:text-[#363636] text-[#AAAAAA] text-[16px] mt-3 w-full p-1 flex flex-row justify-center items-center rounded-[12px]'>
                    <div className='flex flex-row gap-2'>
                        <div className='line-through group-hover:text-[#9A9A9A] transition-all duration-300'>
                            8.000.000 ت
                        </div>
                        <div className='w-[1px] bg-[#FFFFFF] h-[14px] group-hover:bg-[#363636] transition-all duration-300'></div>
                        <div className='text-[#FFFFFF] group-hover:text-[#363636] transition-all duration-300'>
                            5.000.000 ت
                        </div>
                    </div>
                    /هرشب
                </div>
            </div>
        </div>
    )
}

export default DeltaOffersList