import HouseReserve from '@/components/HouseReserve/HouseReserve'
import React, { FC } from 'react'
interface IGetSearchParams {
  searchParams?: { [key: string]: string }
}
const HouseReservePage:FC<IGetSearchParams> = async ({searchParams}) => {
  const getAllSearchParams = await searchParams
  return (
    <HouseReserve sortingData={getAllSearchParams} />
  )
}

export default HouseReservePage