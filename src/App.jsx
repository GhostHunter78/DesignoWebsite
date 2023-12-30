import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./layouts";
import Home from "./pages/Home/Home";
import WebDesign from "./pages/Web Design/WebDesign";
import AppDesign from "./pages/App Design/AppDesign";
import GraphicDesign from "./pages/Graphic Design/GraphicDesign";
import About from "./pages/About/About";
import Locations from "./pages/Locations/Locations";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WebDesign" element={<WebDesign />} />
        <Route path="/AppDesign" element={<AppDesign />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/About" element={<About />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
