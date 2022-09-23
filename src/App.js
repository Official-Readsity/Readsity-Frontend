import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import BestSellers from "./components/BestSellers";
import Authors from "./components/Authors";
import Footer from "./components/Footer";
import JsonData from "./data/data.json";
import { useEffect, useState } from "react";
import Newsletter from "./components/Newsletter";
import BrowseCategory from "./components/BrowseCategory";


function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navbar />
      <Hero data={landingPageData.Hero} />
      <Offer data={landingPageData.Offer} />
      <BestSellers data={landingPageData.BestSellers} />
      <BrowseCategory></BrowseCategory>
      <Authors data={landingPageData.Authors} />
      <Newsletter/>
      <Footer />
    </>
  );
}

export default App;
