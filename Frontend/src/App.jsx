import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Service from "./components/Service";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;