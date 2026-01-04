import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import WhatWeDo from '../Components/Home/Feature'
import Events from '../Components/Home/Events'
import Opportunities from '../Components/Home/Opportunity'
import Team from '../Components/Home/Team'
import Gallery from '../Components/Home/Gallary'
import FinalCTA from '../Components/Home/Final'
import Footer from '../Components/Home/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <WhatWeDo/>
    <Events/>
    <Opportunities/>
    <Team/>
    <Gallery/>
    <FinalCTA/>
    <Footer/>
    </>
  )
}

export default Home