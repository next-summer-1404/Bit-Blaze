import React from 'react'
import DeltaOffersSection from './DeltaOffersSection/DeltaOffersSection'
import { getHousesByRate } from '@/core/api/LandingPage/houses'
const DeltaOffers = async () => {
  const rentalHouses = await getHousesByRate()
  return (
    <>
        <DeltaOffersSection houses={rentalHouses}/>
    </>
  )
}

export default DeltaOffers