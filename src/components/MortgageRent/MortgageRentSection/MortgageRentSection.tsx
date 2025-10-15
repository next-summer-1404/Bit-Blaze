import React from 'react'
import MortgageRentList from './MortgageRentList/MortgageRentList'

const MortgageRentSection = () => {
    return (
        <div className='flex flex-col mt-8 w-full'>
            <div className='flex flex-row justify-between gap-4 flex-wrap w-full'>
                <MortgageRentList/>
                <MortgageRentList/>
                <MortgageRentList/>
                <MortgageRentList/>
                <MortgageRentList/>
                <MortgageRentList/>
                <MortgageRentList/>
                <MortgageRentList/>
                <MortgageRentList/>
                <MortgageRentList/>
            </div>
        </div>
    )
}

export default MortgageRentSection