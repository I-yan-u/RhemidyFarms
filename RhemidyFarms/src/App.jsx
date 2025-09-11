// import viteLogo from '/RhemidyFarmsLogo.svg';
import { Routes, Route } from 'react-router-dom';

// components
import Navbar from './Components/Nav/navbar';
import Footer from './Components/Footer/Footer';
import AutoScrollUp from './Components/AutoScrollUp';
import ScrollToTop from './Components/ScrollToTop';

// Pages
import Landing from './Pages/Landing';

function App() {
  return (
    <>
      <Navbar />
      <AutoScrollUp>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </AutoScrollUp>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
