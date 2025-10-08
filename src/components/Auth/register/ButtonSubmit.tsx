"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'
import ArrowLSVG from '../authSVG/arrowLSVG'

const ButtonSubmit = () => {
    const { pending } = useFormStatus()
    return (
        <button
            type='submit'
            className='cursor-pointer flex rounded-[12px] flex-row justify-center items-center font-[600] text-[16px] shadow-[0_0_8px_2px_rgba(140,255,69,0.2)] bg-[#8CFF45] max-w-[588.25px] w-full text-[#363636] h-[44px] gap-4'
            disabled={pending}
        >
            {pending ? "در حال ارسال" : "تایید"}
              <ArrowLSVG />
        </button>
    )
}

export default ButtonSubmit