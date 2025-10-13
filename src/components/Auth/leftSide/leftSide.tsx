import Image from 'next/image';
import React from 'react';
import Style from "./leftSide.module.css"
const LeftSide = () => {

  return (
    <div className={`${Style.hide} max-w-[691.75px] w-full h-[548px] relative mb-12`}>
      <Image
        className='rounded-4xl w-full h-[512px]'
        width={691}
        height={548}
        src={'/assets/authImages/AuthImage.png'}
        alt="authImage"
      />
      <div className="flex  gap-5 flex-row justify-between max-w-[640px] w-full h-[97px] border border-[#686868] rounded-4xl bg-[#363636C7] absolute bottom-[50px] right-[15px] left-[15px]">
        <div className="mr-[10px] flex flex-row w-[120px] h-[48px] relative">
          <Image
            className="absolute rounded-full border-2 border-[#363636] z-10"
            src={'/assets/authImages/person3.png'}
            width={50}
            height={50}
            alt="person1"
            style={{ right: '0px', top: '25px', objectFit: 'cover' }}
          />
          <Image
            className="absolute rounded-full border-2 border-[#363636] z-11"
            src={'/assets/authImages/person4.png'}
            width={50}
            height={50}
            alt="person2"
            style={{ right: '25px', top: '25px', objectFit: 'cover' }}
          />
          <Image
            className="absolute rounded-full border-2 border-[#363636] z-12"
            src={'/assets/authImages/person3.png'}
            width={50}
            height={50}
            alt="person3"
            style={{ right: '50px', top: '25px', objectFit: 'cover' }}
          />
          <Image
            className="absolute rounded-full border-2 border-[#363636] z-13"
            src={'/assets/authImages/person4.png'}
            width={50}
            height={50}
            alt="person4"
            style={{ right: '75px', top: '25px', objectFit: 'cover' }}
          />
        </div>
        <div className='flex flex-col gap-5'>
          <span className='font-[600] text-[20px] text-white mt-2'>بیش از 5600+</span>
          <p className='font-[400] text-[16px] text-white'>مشتریانی لذت سفذشان را با ما تجربه کردند !</p>
        </div>
        <div className="relative w-full max-w-[120px] md:max-w-[170px] h-auto aspect-[150/150]">
          <Image
            src={'/assets/authImages/winPrize.png'}
            width={150}
            height={150}
            alt="winPrize"
            className="absolute z-20 top-[-30px] md:top-[-50px] left-0 md:left-[10px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;