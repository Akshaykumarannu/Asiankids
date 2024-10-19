import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/AboutUs';
import Classes from './components/Classes/Classes'; // Import the Classes component
import Gallery from './components/Gallery/Gallery';
import Events from './components/Events/Events';
import ContactUs from './components/contactus/contactus';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
