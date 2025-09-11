// import viteLogo from '/RhemidyFarmsLogo.svg';
import { Routes, Route } from 'react-router-dom';

// components
import Navbar from './Components/Nav/navbar';
import Footer from './Components/Footer/Footer';

// Pages
import Landing from './Pages/Landing';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
