import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Work from "./components/work/Work";
import HomeSkeleton from "./components/home/HomeSkeleton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => setLoading(false), 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        {/* Header Skeleton */}
        <header className="header" id="header">
          <nav className="nav container">
            <div className="nav_logo">
              <div style={{ width: '80px', height: '24px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
            </div>
            <div className="nav_menu" id="nav-menu">
              <ul className="nav_list grid">
                <li className="nav_item">
                  <div style={{ width: '60px', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
                </li>
                <li className="nav_item">
                  <div style={{ width: '50px', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
                </li>
                <li className="nav_item">
                  <div style={{ width: '45px', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
                </li>
                <li className="nav_item">
                  <div style={{ width: '80px', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
                </li>
                <li className="nav_item">
                  <div style={{ width: '65px', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
                </li>
                <li className="nav_item">
                  <div style={{ width: '70px', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
                </li>
                <li className="nav_item">
                  <div style={{ width: '60px', height: '20px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}></div>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="main">
          <HomeSkeleton />
        </main>

        {/* Footer Skeleton */}
        <footer className="footer">
          <div className="footer_container container">
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ width: '100px', height: '24px', backgroundColor: '#f0f0f0', borderRadius: '4px', margin: '0 auto 1rem' }}></div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '32px', height: '32px', backgroundColor: '#f0f0f0', borderRadius: '50%' }}></div>
                <div style={{ width: '32px', height: '32px', backgroundColor: '#f0f0f0', borderRadius: '50%' }}></div>
                <div style={{ width: '32px', height: '32px', backgroundColor: '#f0f0f0', borderRadius: '50%' }}></div>
                <div style={{ width: '32px', height: '32px', backgroundColor: '#f0f0f0', borderRadius: '50%' }}></div>
                <div style={{ width: '32px', height: '32px', backgroundColor: '#f0f0f0', borderRadius: '50%' }}></div>
              </div>
              <div style={{ width: '200px', height: '16px', backgroundColor: '#f0f0f0', borderRadius: '4px', margin: '0 auto' }}></div>
            </div>
          </div>
        </footer>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;