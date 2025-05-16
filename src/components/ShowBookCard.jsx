import Image from "next/image"
import { FaRegHeart } from "react-icons/fa"

import React from 'react'

function ShowBookCard() {
    return (
        <div className=" relative  bg-gray-50 ">
            <div className=" absolute top-3 z-10 right-4 w-8 h-8 flex items-center justify-center bg-red-50 shadow-xl  rounded-full text-red-600">
                <FaRegHeart size={20} />
            </div>
            <div className=" absolute z-10 top-[300px] w-full bg-slate-600 px-2 py-1">
                <h2 className="font-bold text-red-400 text-base text-start">
                    230 <span className="text-green-500">TK</span>
                </h2>
            </div>
            <div className="flex flex-col gap-2">
                <Image src={'/book.png'} alt='book' height={200} width={200} />
                <div className="w-[200px] flex flex-col gap-1">
                    <h2 className=" text-slate-900 text-base w font-semibold">
                        Java script ES6 complte book
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default ShowBookCard