
import Link from 'next/link'
import React from 'react'

function Summery() {
    return (
        <div className="w-full p-4 bg-white rounded-md border flex flex-col gap-3">
            <h2 className="font-bold text-xl text-slate-700 py-2 border-b-2 text-center">Summery</h2>

            <div className="w-full flex flex-row items-center justify-between">
                <p className="font-bold text-sm text-slate-600">Qty</p>
                <p className="font-bold text-sm text-slate-600">2</p>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
                <p className="font-bold text-sm text-slate-600">Total</p>
                <p className="font-bold text-sm text-slate-600">222</p>
            </div>

            <Link href={'/cart/payment'} className="w-full bg-[#FF3A27] hover:bg-red-900 rounded-md py-3 text-center text-white font-bold">Checkout</Link>
        </div>
    )
}

export default Summery