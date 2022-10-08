import Home from "./routes/Home";
import Blogs from "./routes/Blogs";
import Services from "./routes/Services";
import Books from "./routes/Books";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import AllBooksPage from "./routes/AllBooksPage";
import ClassicsBooksPage from "./routes/ClassicsBooksPage";
import ChristainFictionBooksPage from "./routes/ChristainFictionBooksPage";
import EntrepreneurshipBooksPage from "./routes/EntrepreneurshipBooksPage";
import FictionBooksPage from "./routes/FictionBooksPage";
import HorrorBooksPage from "./routes/HorrorBooksPage";
import MysteryBooksPage from "./routes/MysteryBooksPage";
import RomanceBooksPage from "./routes/RomanceBooksPage";

function App() {
  return (
    <>
      <Routes basename="/readsity">
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Books/allbooks" element={<AllBooksPage />} />
        <Route path="/Books/classics" element={<ClassicsBooksPage />} />
        <Route
          path="/Books/christainfiction"
          element={<ChristainFictionBooksPage />}
        />
        <Route
          path="/Books/entrepreneurship"
          element={<EntrepreneurshipBooksPage />}
        />
        <Route path="/Books/fictionbooks" element={<FictionBooksPage />} />
        <Route path="/Books/horror" element={<HorrorBooksPage />} />
        <Route path="/Books/mystery" element={<MysteryBooksPage />} />
        <Route path="/Books/romance" element={<RomanceBooksPage />} />
      </Routes>
    </>
  );
}

export default App;
