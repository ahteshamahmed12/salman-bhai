import React from 'react'
import { Truck } from 'lucide-react';
import { X } from 'lucide-react';
function Topheader() {
  return (
    <div className='w-[390px] h-[54px] md:w-[770px] md:h-[45px] bg-[#2a254b] lg:w-[1440px] lg:h-[41px] text-white flex md:justify-between font-normal text-[14px] pt-2  '>
    <div className='flex lg:ml-[420px] md:ml-[160px] '><Truck/> <span className='pl-2  font-normal text-[14px] '>Free delivery on all orders over £50 with code <span className='md:hidden'><br /></span> easter checkout</span></div>
        <span className='pl-6 lg:pl-0 pt-2 md:pt-0 md:pr-4 lg:pr-20 '><X/></span>
    </div>
  )
}

export default Topheader