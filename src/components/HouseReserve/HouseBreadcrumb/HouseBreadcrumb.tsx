import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const HouseBreadcrumb = () => {
    return (
        <Breadcrumb dir='rtl mb-5'>
            <BreadcrumbList>
                <BreadcrumbItem >
                    <BreadcrumbLink className='hover:text-[#8CFF45] text-[#AAAAAA]' href="/">خانه</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='rotate-180 text-[#AAAAAA]' />
                <BreadcrumbItem>
                    <BreadcrumbPage className='text-[#8CFF45]'>رزرو خانه</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default HouseBreadcrumb