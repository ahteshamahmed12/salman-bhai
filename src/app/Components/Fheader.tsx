import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { Menu } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
function Fheader() {
  return (
    <main>
    <div className='hidden lg:block w-[1440px] h-[134px] '>
        <div className='flex justify-between mr-24'>
            <h1 className='font-normal text-[24px] text-[#22202e] pt-[21px] pl-[28px]'>Avion</h1>
            <div className='flex gap-8 mt-[24px]'>
                <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>About us</p></Link>
                <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Contact</p></Link>
                <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Blog</p></Link>

                <span className='flex text-black text-[16px] gap-6 pl-4'>
                    <Search/>
                    <ShoppingCart/>
                    <CircleUser/>
                </span>
            </div>
        </div>

        <div className='w-[1440px] h-[64px] bg-[#f9f9f9] flex justify-center pt-[20px] gap-[44px]'>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>All products</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Plant plots</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Ceramics</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Tables</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Chair</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Crockery</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Tableware</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Cutlery</p></Link>
        </div>
    </div>




  

    <div className='lg:hidden w-[390px] h-[124px] md:w-[770px] '>
<div className='flex justify-between mr-8'>
    <h1 className='font-normal text-[24px] text-[#22202e] pt-[20px] pl-[24px]'>Avion</h1>
    <div className='mt-[27px]'>
    <DropdownMenu>
  <DropdownMenuTrigger><Menu/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>MENU</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>About us</DropdownMenuItem>
    <DropdownMenuItem>Contact</DropdownMenuItem>
    <DropdownMenuItem>Blog</DropdownMenuItem>
    <DropdownMenuItem><Search/></DropdownMenuItem>
    <DropdownMenuItem><ShoppingCart/></DropdownMenuItem>
    <DropdownMenuItem><CircleUser/></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
</div>

<div className='w-[1440px] h-[64px] md:w-[770px] bg-[#f9f9f9] flex pl-6 md:pl-20 pt-[20px] gap-[44px]'>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>All products</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Plant plots</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Ceramics</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Tables</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Chair</p></Link>
        <Link href=""><p className='font-normal text-[16px] text-[#726e8d]'>Crockery</p></Link>
        
        </div>
    </div>
    </main>
  )
}

export default Fheader