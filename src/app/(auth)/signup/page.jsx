'use client'

import Logo from '@/components/Logo'
import { EyeClosed, EyeIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

function Signup() {
    const [eye, setEye] = useState(true)
    return (
        <div className="lg:bg-gray-50 bg-white flex items-center justify-center w-full h-svh">

            <div className=" bg-white gap-5 lg:shadow-md rounded-md p-3 flex flex-col">
                <Logo />

                <div className="flex flex-col gap-3">

                    <div className="flex flex-col">
                        <label htmlFor="email">Name</label>
                        <input type="text" placeholder='Enter Your Name' className=" h-[50px] p-1 w-[400px] border-2 border-gray-300 rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">EMail</label>
                        <input type="email" placeholder='Enter Your email' className=" h-[50px] p-1 w-[400px] border-2 border-gray-300 rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Password</label>
                        <div className="h-[50px] p-1 w-[400px] border-2 border-gray-300 rounded-md flex flex-row items-center">
                            <input type="text" placeholder='Enter Your Password' className=" w-full h-full border-0 outline-0" />
                            <div className="flex items-center justify-center text-gray-500">
                                {
                                    eye ? <EyeIcon onClick={() => setEye(false)} size={24} /> : <EyeClosed onClick={() => setEye(true)} size={24} />
                                }
                            </div>
                        </div>

                    </div>

                    <button className='w-full rounded-md bg-violet-700 text-center font-medium text-base text-white py-2.5' >
                        Ragister
                    </button>
                </div>
                <Link href={'/login'} >Have a account? <span className=" underline text-blue-600">Login</span></Link>
            </div>
        </div>
    )
}

export default Signup