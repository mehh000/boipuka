'use client'

import React from 'react'

function FilterCompo() {

    const filteList = [
        { id: 1, category: "school", sub: '' },
        { id: 2, category: "High school", sub: '' },
        { id: 3, category: "HSC", sub: '' },
        { id: 4, category: "Deploma", sub: '' },
        { id: 5, category: "Engineering", sub: '' },
        { id: 6, category: "Manga", sub: '' },

    ];


        const bookCondition = [
        { id: 1, category: "like new", sub: '' },
        { id: 2, category: "old", sub: '' },
        { id: 3, category: "page cut", sub: '' },
        { id: 4, category: "no ink touse", sub: '' },
        { id: 5, category: "good page", sub: '' },
        { id: 6, category: "broken", sub: '' },

    ]
    return (
        <div className="w-full flex flex-col">

            <div className="w-full p-5 bg-white rounded-md border flex flex-col gap-4">
                <h2 className="w-full py-2 text-slate-700 px-2.5 font-bold text-lg  border-b-2">Shop by Price</h2>

                <div className="w-full flex flex-row items-center justify-between">
                    <div className="flex flex-col items-center w-[40%]">
                        <p className="text-[13px] text-gray-500 ">min price</p>
                        <input type="text" className=" outline-0 text-center border rounded-md h-[48px] w-full" placeholder='Min' />
                    </div>

                    <div className="flex flex-col items-center w-[40%]">
                        <p className="text-[13px] text-gray-500 ">max price</p>
                        <input type="text" className=" outline-0 text-center border rounded-md h-[48px] w-full" placeholder='Max' />
                    </div>
                </div>
            </div>

            <div className="w-full p-5 bg-white rounded-md border flex items-center flex-wrap gap-4 mt-1">
                <p className="p-3 rounded-md border text-base ">Newly added</p>
                <p className="p-3 rounded-md border text-base ">Old upload</p>
                <p className="p-3 rounded-md border text-base ">Show all</p>
            </div>

            <div className="w-full p-5 bg-white rounded-md border flex items-center flex-wrap gap-4 mt-1">
                {
                    filteList.map((cat) => (
                        <p className="p-3 rounded-md border text-base " key={cat.id} > {cat.category} </p>
                    ))
                }
            </div>


            <div className="w-full p-5 bg-white rounded-md border flex items-center flex-wrap gap-4 mt-1">
                {
                    bookCondition.map((cat) => (
                        <p className="p-3 rounded-md border text-base " key={cat.id} > {cat.category} </p>
                    ))
                }
            </div>
        </div>
    )
}

export default FilterCompo