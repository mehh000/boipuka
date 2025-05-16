import { Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function CartCard() {
    return (
        <div className="flex flex-row items-center justify-between bg-white rounded-md px-4 py-2">
            <div className="flex flex-row gap-1.5 w-full ">
                <input type="checkbox" name="" id="" className='w-3 h-3' />
                <Image src={'/book.png'} width={70} height={70} alt='itmc' className=' w-[30%]' />
                <div className="flex flex-col ">
                    <p className="font-bold text-base text-slate-700 ">Java script for beigainer ES^ and react js by Himal</p>
                    <p className="font-normal text-sm overflow-hidden text-ellipsis h-[50%] text-slate-500 w-[60%] ">Java script for beigainer ES^ and react js by HimalJava
                        script for beigainer ES^ and react js by HimalJava script for beigainer ES^ and react js by Himal</p>
                    <p className="font-bold text-base text-slate-700 pt-2">230Tk</p>
                </div>
            </div>
            <div className="w-10 h-10 rounded-md border flex items-center justify-center bg-red-100 text-red-500"> <Trash size={22} /> </div>

        </div>
    )
}

export default CartCard