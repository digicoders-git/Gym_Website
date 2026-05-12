import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Blog from './pages/Blog';
import Trainers from './pages/Trainers';
import Plans from './pages/Plans';
import Join from './pages/Join';
import Login from './pages/Login';
import BlogDetail from './pages/BlogDetail';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import SocialFloating from './components/SocialFloating';
import Loader from './components/Loader';
import './App.css';

const PageWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Loader for 1 second
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <div className={loading ? "hidden" : "block"}>
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <SocialFloating />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <PageWrapper>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/join" element={<Join />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </PageWrapper>
      </div>
    </Router>
  );
}

export default App;
