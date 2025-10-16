import React, { FC } from 'react';
import Sort from './Sort/Sort';
import HouseCard from './HouseCard/HouseCard';
import HouseLocation from './HouseLocation/HouseLocation';
import { IHouses } from '@/core/types/LandingPage/IHouses';
interface IProps {
  houseDetail : IHouses
}
const HouseReserveSection: FC<IProps> = ({houseDetail}) => {
  return (
    <div className='max-w-[100%] w-full bg-[#303030] rounded-[40px] mt-6 p-5'>
      <div className='flex flex-row w-full h-full gap-6'>
        <div className='flex-2 max-w-[1015px] max-h-[1080px] overflow-y-auto overflow-x-hidden custom-scrollbar p-2'>
          <Sort />
          <div className='w-full border dark:border-[#4E4E4E] border-[#9E9E9E]'></div>
          <div className='flex flex-col gap-6 relative'>
          {houseDetail.houses.map((value, index) => (
            <HouseCard
            key={index}
            value={value}
            />
          ))}
            <div className='absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#212121]/98 to-transparent z-[6]' />
          </div>
        </div>
        <div className='flex-1 h-[1080px]'>
          <div className='lg:flex md:hidden sm:hidden'>
          <HouseLocation/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseReserveSection;