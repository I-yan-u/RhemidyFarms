// import viteLogo from '/RhemidyFarmsLogo.svg';
import { Routes, Route } from 'react-router-dom';

// components
import Navbar from './Components/Nav/navbar';
import Footer from './Components/Footer/Footer';
import AutoScrollUp from './Components/AutoScrollUp';
import ScrollToTop from './Components/ScrollToTop';

// Pages
import Landing from './Pages/Landing';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Products from './Pages/Products';
import Services from './Pages/Services';

function App() {
  return (
    <>
      <Navbar />
      <AutoScrollUp>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </AutoScrollUp>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
