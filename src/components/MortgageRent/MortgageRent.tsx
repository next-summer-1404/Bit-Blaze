import React from 'react'
import MortgageRentBreadcrumb from './MortgageRentBreadcrumb/MortgageRentBreadcrumb'
import MortgageRentFilterFirst from './MortgageRentFilter/MortgageRentFilterFirst'
import MortgageRentFilterSecond from './MortgageRentFilter/MortgageRentFilterSecond'
import MortgageRentSection from './MortgageRentSection/MortgageRentSection'

const MortgageRent = () => {
    return (
        <div className='flex flex-col max-w-[97%] w-full mx-auto mt-10'>
            <MortgageRentBreadcrumb/>
            <MortgageRentFilterFirst/>
            <MortgageRentFilterSecond/>
            <div className='mt-8 bg-[#4E4E4E] w-full h-[2px]'></div>
            <MortgageRentSection/>
        </div>
    )
}

export default MortgageRent