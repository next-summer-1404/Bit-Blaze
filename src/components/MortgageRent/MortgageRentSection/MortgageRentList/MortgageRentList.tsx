import React from 'react'
import { FaBed, FaCarSide, FaStar } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { MdHotTub, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
const MortgageRentList = () => {
    return (
        <div className='bg-[#393939] group hover:scale-[1.01] hover:shadow-[0px_1px_10px_rgba(140,255,69,0.5)]
                  before:transition-colors before:duration-300 after:duration-300 after:transition-shadow 
                 transition-all duration-300 relative w-[49%] h-fit mt-10 rounded-tl-[16px] rounded-bl-[16px] rounded-br-[16px]
                    before:bg-[#393939] before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] 
                    before:h-5 before:rounded-tr-[17px] before:w-40 before:absolute before:-translate-y-5 before:top-0 before:right-0
                    after:absolute after:bg-transparent after:w-5 after:h-5 after:rounded-br-[60px] 
                    after:transform-[rotate(20deg)] after:top-[-1.1rem] after:right-[9rem] after:shadow-[6px_10px_0_0_rgba(57,57,57,1)]'>
            <div className="absolute top-[-1rem] right-[5px] w-[7.6rem] h-[2rem] rounded-[14px] 
                        outline-[5px] outline-[#393939]
                        transition-all duration-300
                        "></div>

            <div className='flex flex-row z-[10] mt-3 mb-3 mr-3 ml-3'>
                <div className='flex flex-row justify-between w-full'>
                    <div className='flex flex-row gap-6'>
                        <Image className='rounded-[16px] z-[10] group-hover:border group-hover:border-[#8CFF45] transition-all duration-300' src={'https://storage.c2.liara.space/sepehr-ac/uploads/1753995432907-white-house-a-frame-section-c0a4a3b3-e722202f114e4aeea4370af6dbb4312b.jpg'} width={190} height={150} alt='DefaultVillaPic' />
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-row text-[#FFFFFF] text-[14px] font-[500] items-center justify-center gap-1 rounded-[8px] bg-[#7569FF] shadow-[0px_8px_16px_rgba(115,103,255,0.2)] w-[82px] h-[28px]'>
                                <FaStar />
                                5 ستاره
                            </div>
                            <h2 className='text-[20px] font-[600] text-[#FFFFFF]'>هتل سراوان رانین رشت</h2>
                            <span className='flex flex-row gap-1 items-center text-[#AAAAAA]'>
                                <IoLocationOutline /> آدرس :
                                <p className='text-[#FFFFFF] max-w-[160px] truncate'>گیلان ، رشت ، میدان آزادی ، جل..</p>
                            </span>
                            <div className='flex flex-row flex-wrap w-fit justify-between text-[#AAAAAA] items-center gap-2'>
                                <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                                    <FaBed className='text-[12px]' />
                                    3 خوابه
                                </div>
                                <div className='w-0.5 h-4 bg-[#AAAAAA] hidden sm:block'></div>
                                <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                                    <FaCarSide className='text-[12px]' />
                                    1 پارکینگ
                                </div>
                                <div className='w-0.5 h-4 bg-[#AAAAAA] hidden sm:block'></div>
                                <div className='flex flex-row gap-1 items-center font-[300] text-[12px] sm:text-[13px]'>
                                    <MdHotTub className='mb-1 text-[12px]' />
                                    4 حمام
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col h-full items-center justify-end gap-4'>
                        <div className='flex flex-row gap-2'>
                            <div className='flex flex-row gap-3'>
                                <p className='line-through text-[#AAAAAA] text-[16px] font-[600]'>25.000.000 ت</p>
                                <div className='bg-[#FF5555] text-[16px] font-[700] w-[50px] h-[28px] items-center rounded-[8px] flex justify-center text-[#FFFFFF]'>15%</div>
                            </div>
                        </div>
                        <div className='text-[#8CFF45] text-[18px] font-[600]'>
                            15.000.000 ت
                        </div>
                        <Link href='/mortgage-rent' className='group-hover:bg-[#8CFF45] w-full group-hover:text-[#000000] transition duration-300 border border-[#8CFF45] rounded-[14px] h-[40px] justify-center text-[#8CFF45] flex flex-row gap-1 items-center text-[16px] font-[500]'>
                            مشاهده لینک
                            <MdOutlineKeyboardArrowLeft />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MortgageRentList