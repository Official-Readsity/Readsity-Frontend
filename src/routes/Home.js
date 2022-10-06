import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import BestSellers from "../components/BestSellers";
import BrowseCategory from "../components/BrowseCategory";
import Authors from "../components/Authors";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Offer/>
      <BestSellers/>
      <BrowseCategory/>
      <Authors/>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home