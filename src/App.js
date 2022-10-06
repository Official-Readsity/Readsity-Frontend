import Home from "./routes/Home";
import Blogs from "./routes/Blogs";
import Services from "./routes/Services";
import Books from "./routes/Books";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <>
      <Routes basename="/readsity">
        <Route path="/" element={<Home/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/Books" element={<Books/>} />
        <Route path="/Contact" element={<Contact/>} />
     </Routes>
    </>
  );
}


export default App;
