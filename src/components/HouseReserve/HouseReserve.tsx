import React from 'react'
import HouseBreadcrumb from './HouseBreadcrumb/HouseBreadcrumb'
import FilterHouse from './FilterHouse/FilterHouse'
import HouseReserveSection from './HouseReserveSection/HouseReserveSection'

const HouseReserve = () => {
  return (
    <div className='max-w-[96%] w-full ml-auto mr-auto m-15'>
        <HouseBreadcrumb />
        <FilterHouse />
        <HouseReserveSection />
    </div>
  )
}

export default HouseReserve