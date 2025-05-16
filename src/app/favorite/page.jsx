'use client'

import Navber from '@/components/Navber'
import ShowBookCard from '@/components/ShowBookCard'
import React from 'react'

function Favorite() {
    return (
        <>
            <Navber />
            <div className="flex w-full lg:px-36 px-0 flex-wrap items-center justify-center gap-2.5">
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

export default Favorite