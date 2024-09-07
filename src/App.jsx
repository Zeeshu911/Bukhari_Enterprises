import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Vegetables from "./pages/Vegetables";
import Fruits from "./pages/Fruits";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import Whatsapp from "./components/Whatsapp";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/fruits/:item" element={<ItemDetails />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/vegetables/:item" element={<ItemDetails />} />
      </Routes>
      <Footer />
      <Whatsapp/>
    </Router>
  );
};

export default App;
