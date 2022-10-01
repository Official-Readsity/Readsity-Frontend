import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import BestSellers from "./components/BestSellers";
import BrowseCategory from "./components/BrowseCategory";
import Authors from "./components/Authors";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import JsonData from "./data/data.json";
import { useEffect, useState } from "react";

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
      <BrowseCategory />
      <Authors data={landingPageData.Authors} />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
