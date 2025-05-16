'use client'
import Navber from '@/components/Navber'
import Image from 'next/image'
import React, { useState } from 'react'

function Payment() {
    const paymentOp = [
        { id: 1, value: 'bkash', image: '/bkash.png', receive_number: "019494848470" },
        { id: 2, value: 'nagat', image: '/nagat.jpg', receive_number: "019494848470" },
        { id: 3, value: 'cod', image: '/cod.png', receive_number: "019494848470" },
    ];

    const [selectedPay, setSelectedPay] = useState('no')
    return (


        <>
            <Navber />
            <div className="w-full mt-5 flex items-center justify-center">
                <div className="lg:w-[30%] w-full  bg-white rounded-md p-5 flex flex-col gap-2.5">
                    <h2 className="font-bold text-slate-700 text-base px-3 py-2.5 border-b-2">Choose your payment option</h2>
                    <div className="w-full flex flex-wrap gap-1 justify-evenly">
                        {
                            paymentOp.map((method) => (
                                <Image src={method.image} alt='methood' onClick={() => setSelectedPay(method.value)} height={60} width={60} className={`rounded-md ${selectedPay === method.value ? 'opacity-45 border-4 border-green-500' : ''}`} key={method.id} />
                            ))
                        }
                    </div>
                    <h2 className="font-bold text-slate-700 text-base px-3 py-2.5 border-b-2">Sending ammount : 234TK</h2>
                    {
                        selectedPay === 'bkash' || selectedPay === 'nagat' ? <div className={`w-full flex flex-col`}>
                            <p className="text-sm font-medium text-gray-500">TransectionId</p>
                            <input type="text" placeholder='Trnasection ID' className="w-full h-[48px] rounded-md outline-0  border p-2" />
                        </div> : ''
                    }
                    <div className="w-full rounded-md py-3 mt-4 hover:bg-gray-600 transition-all end-0.5 cursor-pointer text-white text-center text-lg bg-green-600">Done</div>
                </div>

            </div>

        </>
    )
}

export default Payment