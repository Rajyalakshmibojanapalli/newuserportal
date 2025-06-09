import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './global/Navbar';
import Footer from './global/Footer';
import Home from './pages/home/Home';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Contact from './components/contact/Contact';
import JaimaxSplash from './global/Splashscreen';
import JaimaxComponent from './components/About/About';
import FeaturesSection from './pages/home/HomeFeatures';
import BlogLayout from './pages/home/Blog';
const AppContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/register'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {!shouldHideNavbar && <Navbar />}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/about' element={<JaimaxComponent/>}/>
          <Route path="/contact" element={<Contact />} />
           <Route path="/features" element={<FeaturesSection />} />
             <Route path="/blog" element={<BlogLayout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <JaimaxSplash />;
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
