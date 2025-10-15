"use client"
import React, { useState } from 'react'

const Sort = () => {
    const [minimumPrice, setMinimumPrice] = useState<number>(0);
    const [maximumPrice, setMaximumPrice] = useState<number>(0);

    console.log("min", minimumPrice)
    console.log("max", maximumPrice)

    return (
        <div className='flex gap-4 w-full mb-7'>
            <div className="min-w-[485px] w-fit">
                <div className="group">
                    <label className="block group-hover:text-[#FFFFFF] text-[#AAAAAA] font-[400] text-[13px]">حداقل قیمت :</label>
                    <input
                        type="number"
                        className="w-full h-[50px] px-3 bg-transparent border border-[#AAAAAA] rounded-2xl group-hover:border-[#FFFFFF] text-[#AAAAAA] group-hover:text-[#FFFFFF] placeholder:text-[#AAAAAA] hover:bg-[#353535] focus:outline-none focus:border-[#FFFFFF] focus:text-[#FFFFFF] text-right remove-arrows"
                        placeholder= "0 تومان"
                        value={minimumPrice}
                        onChange={(e) => setMinimumPrice(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className="min-w-[485px] w-fit">
                <div className="group">
                    <label className="block group-hover:text-[#FFFFFF] text-[#AAAAAA] font-[400] text-[13px]">حداکثر قیمت :</label>
                    <input
                        type="number"
                        className="w-full h-[50px] px-3 bg-transparent border border-[#AAAAAA] rounded-2xl group-hover:border-[#FFFFFF] text-[#AAAAAA] group-hover:text-[#FFFFFF] placeholder:text-[#AAAAAA] hover:bg-[#353535] focus:outline-none focus:border-[#FFFFFF] focus:text-[#FFFFFF] text-right remove-arrows"
                        placeholder="0 تومان"
                        value={maximumPrice}
                        onChange={(e) => setMaximumPrice(Number(e.target.value))}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sort