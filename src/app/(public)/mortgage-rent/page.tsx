import MortgageRent from '@/components/MortgageRent/MortgageRent';
import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "رهن و اجاره",
};
const MortgageRentPage = () => {
  return (
    <>
      <MortgageRent/>
    </>
  )
}

export default MortgageRentPage