"use client"
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Sort = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [minimumPrice, setMinimumPrice] = useState<number>(
        Number(searchParams.get("minPrice")) || 0
    );
    const [maximumPrice, setMaximumPrice] = useState<number>(
        Number(searchParams.get("maxPrice")) || 0
    );


    const updateSearchParams = (key: string, value: number | null) => {
        const params = new URLSearchParams(searchParams);
        if (value === 0 || value === null) { 
            params.delete(key);
        } else {
            params.set(key, value.toString());
        }
        router.push(`?${params.toString()}`);
    };

    return (
        <div className='flex gap-4 w-full mb-7'>
            <div className="min-w-[485px] w-fit">
                <div className="group">
                    <label className="block group-hover:text-[#FFFFFF] text-[#AAAAAA] font-[400] text-[13px]">حداقل قیمت :</label>
                    <input
                        type="number"
                        className="w-full h-[50px] px-3 bg-transparent border border-[#AAAAAA] rounded-2xl group-hover:border-[#FFFFFF] text-[#AAAAAA] group-hover:text-[#FFFFFF] placeholder:text-[#AAAAAA] hover:bg-[#353535] focus:outline-none focus:border-[#FFFFFF] focus:text-[#FFFFFF] text-right remove-arrows"
                        placeholder="0 تومان"
                        value={minimumPrice}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            setMinimumPrice(value);
                            updateSearchParams("minPrice", value); 
                        }}
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
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            setMaximumPrice(value);
                            updateSearchParams("maxPrice", value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sort;