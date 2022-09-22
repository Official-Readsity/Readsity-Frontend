import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offer from './components/Offer';
import BestSellers from './components/BestSellers';
import Authors from './components/Authors';
import Footer from './components/Footer';
import JsonData from "./data/data.json";
import { useEffect, useState } from 'react';

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navbar/>
      <Hero data={landingPageData.Hero}/>
      <Offer data={landingPageData.Offer}/>
      <BestSellers data={landingPageData.BestSellers}/>
      <Authors data={landingPageData.Authors}/>
      <Footer/>
    </>
  );
}

export default App;