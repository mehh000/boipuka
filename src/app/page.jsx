'use client'
import Book from '@/components/Book'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Navber from '@/components/Navber'
import Services from '@/components/Services'
import Image from 'next/image'
import React, { useState } from 'react'


function Home() {

  return (
    <>
      <Navber />
      <Hero />
      <Services />
      <Book />
      <Footer />
    </>
  )
}

export default Home