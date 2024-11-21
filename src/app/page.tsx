import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

function page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
