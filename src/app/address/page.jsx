"use client"

import Footerless from '@/components/layout/Footerless'
import React, { useState } from 'react'
import { FaAddressBook } from 'react-icons/fa'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


function Address() {

    const adddress = [
        {
            id: 1,
            name: "Himal Hasan",
            number: "019494980",
            zela: 'Sherpur',
            upozela: 'Jhinaigati',
            landmark: 'Podda Bank',
            status: 'inactive'
        },
        {
            id: 2,
            name: "Himal Hasan",
            number: "019494980",
            zela: 'Kishoreganj',
            upozela: 'Sodor',
            landmark: 'Bank',
            status: 'active'
        }
    ];


    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: "Himal Hasan",
            number: "019494980",
            zela: "Sherpur",
            upozela: "Jhinaigati",
            landmark: "Podda Bank",
        },
    ])

    const [form, setForm] = useState({
        name: "",
        number: "",
        zela: "",
        upozela: "",
        landmark: "",
    })

    const handleChange = () => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        const newAddress = { ...form, id: Date.now() }
        setAddresses([...addresses, newAddress])
        setForm({ name: "", number: "", zela: "", upozela: "", landmark: "" })
    }



    return (
        <Footerless>


            <div className="w-full flex items-center justify-center mt-10">
                <div className="w-full max-w-xl bg-white rounded-md p-4 flex flex-col shadow-md">
                    <div className="w-full flex justify-end mb-4">
                        {/* add */}
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="p-2 px-4 rounded-md bg-green-100 text-green-600 hover:bg-green-500 hover:text-white cursor-pointer text-sm font-semibold">
                                    ADD
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add Address</DialogTitle>
                                    <DialogDescription>Fill in the form to add your address.</DialogDescription>
                                </DialogHeader>

                                <div className="flex flex-col gap-4">
                                    <Input
                                        placeholder="Name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        placeholder="Phone Number"
                                        name="number"
                                        value={form.number}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        placeholder="Zila"
                                        name="zela"
                                        value={form.zela}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        placeholder="Upazila"
                                        name="upozela"
                                        value={form.upozela}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        placeholder="Landmark"
                                        name="landmark"
                                        value={form.landmark}
                                        onChange={handleChange}
                                    />
                                    <div onClick={handleSubmit} className="py-2.5 w-full text-center rounded-md bg-green-100 text-green-600 hover:bg-green-500 hover:text-white cursor-pointer text-sm font-semibold">
                                        ADD
                                    </div>
                                  
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="flex flex-col gap-4">
                        {
                            adddress.map((data) => (
                                <div key={data.id} className="border p-4 rounded-md  transition">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FaAddressBook className="text-lg text-blue-500" />
                                        <p className="font-semibold text-gray-700">{data.name}</p> {data.status === 'active' ? <p className="text-red-500 text-sm ">active</p> : ''}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <p><strong>Phone:</strong> {data.number}</p>
                                        <p><strong>Zila:</strong> {data.zela}</p>
                                        <p><strong>Upazila:</strong> {data.upozela}</p>
                                        <p><strong>Landmark:</strong> {data.landmark}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Footerless>
    )
}

export default Address
