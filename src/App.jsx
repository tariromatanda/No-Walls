import React from 'react'
import Navbar from './components/Navbar'
import logo from "./assets/images/NoWallsLogo.png"
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import ProductsBrands from './components/ProductsBrands'
import Form from './components/Form'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
     <Navbar logo={logo}/>
     <Hero/>
     <About/>
     <Services/>
     <ProductsBrands/>
     <Form/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
