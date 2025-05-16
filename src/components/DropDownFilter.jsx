
import React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { RxDropdownMenu } from "react-icons/rx";


function DropDownFilter() {

    const filteList = [
        { id: 1, category: "school", sub: '' },
        { id: 2, category: "High school", sub: '' },
        { id: 3, category: "HSC", sub: '' },
        { id: 4, category: "Deploma", sub: '' },
        { id: 5, category: "Engineering", sub: '' },
        { id: 6, category: "Manga", sub: '' },

    ]
    return (
        <DropdownMenu className="border-0 outline-0 hover:border-0 focus:border-0">
            <DropdownMenuTrigger className="border-0 outline-0 hover:border-0 focus:border-0">
                <RxDropdownMenu size={30} className='text-red-600 border-0 outline-0 hover:border-0 focus:border-0' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select Your Book</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    filteList.map((cat) => (
                        <DropdownMenuItem key={cat.id} > {cat.category} </DropdownMenuItem>
                    ))
                }


            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default DropDownFilter