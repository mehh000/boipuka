'use client'

import Book from '@/components/Book'
import Header from '@/components/Header'
import Navber from '@/components/Navber'
import ShowBookCard from '@/components/ShowBookCard'
import React, { useState } from 'react'

import { IoGridOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import FilterCompo from '@/components/FilterCompo'

function Filter() {
    const [showGrid, setShowGrid] = useState(true)
    return (
        <>
            <Navber />
            <div className="px-36 py-2.5 w-full bg-white flex mb-5 flex-row items-center justify-between border border-t">
                <p className="">Best seller</p>
                <div className="flex flex-row items-center gap-2">

                    <div className={`w-8 h-8 border rounded-md flex items-center justify-center ${showGrid ? 'bg-blue-600 text-white' : 'bg-transparent'}`} >
                        <CiBoxList onClick={() => setShowGrid(!showGrid)} size={22} />
                    </div>

                    <div className={`w-8 h-8 border rounded-md flex items-center justify-center ${showGrid ? 'bg-transparent' : 'bg-blue-600 text-white'}`} >
                        <IoGridOutline onClick={() => setShowGrid(!showGrid)} size={22} />
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-14 flex flex-row w-full gap-3" >
                <div className=" w-[20%]  ">
                    <FilterCompo />
                </div>

                <div className=" flex-1 flex flex-wrap items-center h-fit gap-2  ">
                    <ShowBookCard />
                    <ShowBookCard />
                    <ShowBookCard />
                    <ShowBookCard />
                    <ShowBookCard />
                    <ShowBookCard />
                </div>
            </div>
        </>
    )
}

export default Filter