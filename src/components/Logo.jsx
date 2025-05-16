import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo({
    color =''
}) {
    return (
        <Link href={'/'} className="w-fit h-fit flex flex-row items-center">
            <Image src={'/logoA.png'} height={50} width={50} alt='logo' />
            <h2 className={`font-extrabold text-xl  ${color === 'white' ? 'text-white' : 'text-slate-900'  }`}>BoiPuka</h2>
        </Link>
    )
}

export default Logo