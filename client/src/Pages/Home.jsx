import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import Events from '../Components/Home/Events'
import Gallery from '../Components/Home/Gallary'
import Team from '../Components/Home/Team'
import JoinSociety from '../Components/Home/Join'
import Footer from '../Components/Home/Footer'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Events/>
    <Gallery/>
    <Team/>
    <JoinSociety/>
    <Footer />
    </>
  )
}

export default Home
