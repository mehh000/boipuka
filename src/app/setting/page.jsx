
import Footerless from '@/components/layout/Footerless'
import Navber from '@/components/Navber'
import React from 'react'

function Setting() {
    return (
        <>
            <Footerless>
                <div className="my-10 w-full flex items-center justify-center ">
                    <div className="lg:w-[30%] w-full bg-white rounded-md p-5">
                        <div className="w-full cursor-pointer text-center text-white bg-red-400 py-3 hover:bg-gray-500 rounded-md">
                            Delete my account
                        </div>
                    </div>
                </div>
            </Footerless>

        </>
    )
}

export default Setting