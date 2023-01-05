import React, { Component } from 'react'
import Header from './Components/Header/header'
import Nav from './Components/Nav/nav'
import About from './Components/about/about'
import Experience from './Components/Experience/experience'
import Services from './Components/Services/services'
import Portfolio from './Components/Portfolio/portfolio'
import Testimonials from './Components/Testimonials/testimonial'
import Contacts from './Components/Contacts/contact'
import Footer from './Components/Footer/footer'

const app = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contacts />
    <Footer />
    </>
  )
}

export default app