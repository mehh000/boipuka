'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import ShowBookCard from './ShowBookCard';


function Book() {



    const [isLiked, setIsLiked] = useState(true)
    return (
        <>


            <div className="lg:px-36 px-1   bg-gray-50 flex flex-wrap justify-evenly items-center">
                <div className="w-full flex flex-row items-center justify-between mb-3">
                    <h2 className="text-slate-900 text-lg font-bold">Newly Added</h2>
                    <h2 className="text-red-400 text-base font-bold">View all</h2>
                </div>
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />


            </div>
            <div className="lg:px-36 px-1  bg-gray-50">
                <Image src={'/sellb.jpg'} width={0} alt='sell Poster'
                    className=' rounded-md  '
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '200px' }} />
            </div>

            <div className="lg:px-36 px-1  bg-gray-50 flex flex-wrap justify-evenly items-center">
                <div className="w-full flex flex-row items-center justify-between mb-3">
                    <h2 className="text-slate-900 text-lg font-bold">ALl Collection</h2>
                    <h2 className="text-red-400 text-base font-bold">View all</h2>
                </div>
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />


            </div>

        </>
    )
}

export default Book


