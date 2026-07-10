import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import "./App.css";

import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Welcome from "./components/welcome/Welcome";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <Welcome />;
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;