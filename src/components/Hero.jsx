import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className="lg:px-36 px-2 bg-gray-50 py-5">
            <Image src={"/banner2.webp"} width={1440} height={440} alt='offer' className='rounded-lg' />
        </div>
    )
}

export default Hero