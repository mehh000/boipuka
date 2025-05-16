'use client'

import Navber from '@/components/Navber'
import React from 'react'
import Summery from './components/Summery'
import CartCard from './components/CartCard'

function Cart() {
    return (
        <>
            <Navber />
            <div className="w-full lg:px-36 px-2 flex lg:flex-row flex-col gap-2 mt-3">
                <div className="flex-1 cart-container flex flex-col gap-1">
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>


                <div className=" lg:w-[20%] w-full cart-container flex flex-col gap-1">
                    <Summery />
                </div>
            </div>
        </>
    )
}

export default Cart