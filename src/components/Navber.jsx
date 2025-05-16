
import React from 'react'
import Logo from './Logo'
import { LuUser } from "react-icons/lu";
import Header from './Header';
import { IoSearch } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import DropDownFilter from './DropDownFilter';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image';
import Link from 'next/link';


function Navber() {
    const login = false;
    return (
        <div className="w-full flex flex-col ">
            <Header />
            <div className="w-full bg-white flex flex-row py-3.5 lg:px-36 px-4 justify-between">
                <Logo />

                <div className=" w-[60%] h-12 border border-gray-300 rounded-md lg:flex hidden flex-row jus items-center">
                    <input type="text" placeholder='Find your book' className="w-full h-full border-0 outline-0 pl-1" />
                    <div className="px-3.5 border-0 border-l-[1px] border-gray-300 flex items-center justify-center h-full">
                        <IoSearch size={24} className='text-violet-700' />
                    </div>
                    <div className="px-3.5">
                        <DropDownFilter />
                    </div>
                </div>
                {
                    login ? <div className="flex flex-row gap-2">

                        <button className="bg-gray-200 text-violet-700 font-bold px-5 py-3 h-fit  text-center rounded-md">Login</button>
                        <button className="bg-violet-700 h-fit text-white font-bold text-[15px] px-5 py-3 rounded-md flex items-center justify-center flex-row gap-2">
                            <LuUser size={16} />
                            Sign-up</button>
                    </div> :
                        <div className="flex flex-row gap-4 items-center">
                            <Link href={'favorite'} className="px-2 py-2 border rounded-md border-gray-200">
                                <CiHeart size={24} />
                            </Link>
                            <Link href={'/cart'} className="px-2 py-2 border rounded-md border-gray-200">
                                <CiShoppingCart size={24} />
                            </Link>

                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Image src={'/user-profile.png'} height={40} width={40} alt='profile' className='rounded-full' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem><Link href={'/profile'}>Profile</Link></DropdownMenuItem>
                                    <DropdownMenuItem><Link href={'/address'}>Adress</Link></DropdownMenuItem>
                                    <DropdownMenuItem><Link href={'/setting'}>Setting</Link></DropdownMenuItem>
                                    <DropdownMenuItem className="bg-red-400 text-white" ><Link href={'/login'}>LogOut</Link></DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                }

            </div>
            <div className="flex lg:hidden flex-row w-full items-center gap-4 bg-white pb-2 justify-center">
                <div className=" w-[80%] px-4 h-12 border border-gray-300 rounded-md flex  flex-row jus items-center">
                    <input type="text" placeholder='Find your book' className="w-full h-full border-0 outline-0 pl-1" />
                    <div className="px-2 border-0 border-l-[1px] border-gray-300 flex text-center items-center justify-center h-full">
                        <IoSearch size={24} className='text-violet-700' />
                    </div>
                </div>
                <DropDownFilter />
            </div>

        </div>
    )
}

export default Navber