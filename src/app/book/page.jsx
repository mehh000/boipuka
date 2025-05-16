
import Footerless from '@/components/layout/Footerless'
import ShowBookCard from '@/components/ShowBookCard'
import Image from 'next/image'
import React from 'react'

function BookReview() {
    return (
        <Footerless>
            <div className="w-full lg:px-36 px-0 lg:py-10 py-0">
                <div className="w-full flex lg:flex-row flex-col bg-white p-4 rounded-md gap-5">
                    <Image src={'/book.png'} alt='book' width={360} height={360} />
                    <div className="flex flex-col gap-2 lg:w-[50%] w-full">
                        <h2 className="text-lg font-bold text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                        <div className="flex flex-wrap gap-3 items-center">
                            <p className="text-slate-700 text-base font-medium">234TK</p>
                            <button className="p-3 text-white bg-red-500 rounded-md hover:bg-gray-500">Add to cart</button>
                        </div>
                        <div className="flex flex-wrap gap-3 items-center">
                            <h2 className="text-base  py-2 text-slate-700 font-bold w-full border-b">Quality</h2>
                            <div className="p-3 rounded-md border text-center">Like new</div>
                            <div className="p-3 rounded-md border text-center">Good shape</div>
                            <div className="p-3 rounded-md border text-center">All Pgae</div>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center">
                            <h2 className="text-base  py-2 text-slate-700 font-bold w-full border-b">Category</h2>
                            <div className="p-3 rounded-md border text-center">Academic</div>
                            <div className="p-3 rounded-md border text-center">Engineering</div>
                            <div className="p-3 rounded-md border text-center">English</div>
                        </div>
                        <p className="text-slate-600 text-sm">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia libero pariatur labore?
                        </p>

                        <p className="text-slate-600 text-sm">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                            assumenda recusandae aliquam voluptates porro, modi dicta
                            magnam laudantium! Nemo provident quos recusandae perspiciatis
                            aliquam soluta id obcaecati dolor aut eius? Lorem ipsum dolor
                            sit amet consectetur, adipisicing elit. Ad, est nihil ipsam error
                            quod accusantium.
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:mx-36 mx-0 my-5 lg:p-4 p-0 flex flex-wrap justify-center items-center gap-2 rounded-md bg-white">
                <div className="w-full">
                    <h2 className="text-base  py-2 text-slate-700 font-bold w-full border-b">Related Books</h2>
                </div>
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
                <ShowBookCard />
            </div>
        </Footerless>
    )
}

export default BookReview