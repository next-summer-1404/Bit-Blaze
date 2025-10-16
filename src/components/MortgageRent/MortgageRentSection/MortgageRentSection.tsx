import React, { FC } from 'react'
import MortgageRentList from './MortgageRentList/MortgageRentList'
import { IHouses } from '@/core/types/MortgageRent/IHouses'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface IProps {
    houses: IHouses
}
const MortgageRentSection: FC<IProps> = ({ houses }) => {
    return (
        <div className='flex flex-col mb-10 mt-8 w-full'>
            <div className='flex flex-row justify-between gap-4 flex-wrap w-full'>
                {houses.totalCount === 0 ? (
                    <h1 className='flex justify-center w-full text-white font-[600]'>درحال حاضر هیچ خانه‌ای مطابق با فیلتر وجود ندارد</h1>
                ) : houses.houses.map((houseData, index) => {
                    return (
                        <MortgageRentList key={index} houseData={houseData} />
                    )
                })}
            </div>
        </div>
    )
}

export default MortgageRentSection