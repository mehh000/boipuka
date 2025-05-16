'use client'

import Navber from '@/components/Navber'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import { ArrowBigLeft, Edit } from 'lucide-react'
import Footerless from '@/components/layout/Footerless'

function profile() {

    const [eidt, setEdit] = useState(true)
    const [profileDta, setProfileData] = useState({
        name: '',
        email: ""
    })
    return (
        <>
            <Footerless>
                <div className="w-full my-5 flex items-center justify-center">
                    <div className="lg:w-[30%] w-full p-4 bg-white rounded-md flex flex-col gap-3">
                        <div className="w-full flex flex-row justify-end">

                            <div className="w-7 h-7 flex items-center justify-center  rounded-full bg-green-100 text-green-500">
                                <Edit onClick={() => setEdit(!eidt)} size={22} />
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <Image src={'/user-profile.png'} height={80} width={80} alt='profile' className='rounded-full' />
                        </div>
                        {eidt ?
                            <p className="text-base text-gray-800 text-center">Himal Hasan</p> :
                            <input type='text' placeholder='Enter Nmae' className='w-full border outline-0 rounded-md p-2 h-[48px]' />}
                        {eidt ?
                            <p className="text-base text-gray-800 text-center">mdhimal2040@gmai.com</p> :
                            <input type='text' placeholder='Enter Email' className='w-full border outline-0 rounded-md p-2 h-[48px]' />}


                    </div>
                </div>
            </Footerless>
        </>
    )
}

export default profile