import React from 'react'
import Image from 'next/image'
import { GoArrowLeft } from "react-icons/go";
const CategoryList = () => {
    return (
        <div className="w-full flex flex-row justify-between mt-5">
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/villa.png'} width={36} height={36} alt="villa" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] after:w-5 after:h-5 after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute flex w-[218px] h-[89px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E] rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px] before:top-[0px] before:-translate-y-9 before:transition-colors after:transition-shadow group"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                    ملک ویلایی
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/cottage.png'} width={36} height={36} alt="cottage" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] after:w-5 after:h-5 after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute flex w-[218px] h-[89px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E] rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px] before:top-[0px] before:-translate-y-9 before:transition-colors after:transition-shadow group"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                    ملک کلبه
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/wooden-house.png'} width={36} height={36} alt="wooden-house" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] after:w-5 after:h-5 after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute flex w-[218px] h-[89px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E] rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px] before:top-[0px] before:-translate-y-9 before:transition-colors after:transition-shadow group"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                    بومگردی
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/house.png'} width={36} height={36} alt="house" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] after:w-5 after:h-5 after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute flex w-[218px] h-[89px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E] rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px] before:top-[0px] before:-translate-y-9 before:transition-colors after:transition-shadow group"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                    استخردار
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/apartment.png'} width={36} height={36} alt="apartment" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] after:w-5 after:h-5 after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute flex w-[218px] h-[89px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E] rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px] before:top-[0px] before:-translate-y-9 before:transition-colors after:transition-shadow group"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                    ملک ساحلی
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col text-[#FFFFFF] cursor-pointer">
                <div className="flex flex-row justify-between rounded-[14px] items-end z-[20]">
                    <div className="p-2 rounded-2xl mr-3 bg-[#393939]">
                        <Image src={'/assets/LandingPage/cottage.png'} width={36} height={36} alt="cottage" />
                    </div>
                    <div className="items-end">
                        <GoArrowLeft size={19} />
                    </div>
                </div>
                <div
                    className="before:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)] after:w-5 after:h-5 after:shadow-[6px_10px_0px_0px_rgba(46,46,46,1)] after:bg-transparent  after:top-[-18px] after:right-[93px]  after:rounded-br-[60px] after:transform-[rotate(11deg)] after:absolute flex w-[218px] h-[89px] justify-center flex-row gap-4 hover:bg-[#8CFF45] hover:before:bg-[#8CFF45] hover:after:shadow-[6px_10px_rgba(140,255,69,1)] hover:text-[#363636] transition-colors bg-[#2E2E2E] rounded-tl-[14px] p-3 rounded-bl-[14px] rounded-br-[14px] items-center relative before:content-[''] before:w-[100px] before:h-9 before:bg-[#2E2E2E] before:rounded-t-[11px] before:absolute before:right-[0px] before:top-[0px] before:-translate-y-9 before:transition-colors after:transition-shadow group"
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                    آپارتمان
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946 7.62054L0 6L4.37946 4.37946L6 0Z"
                            className="fill-white group-hover:fill-[#363636] transition-colors"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CategoryList