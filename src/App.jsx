import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Feedbacks, Navbar, StarsCanvas, Tech } from './components/components';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <div className="relative z-0">
              <Navbar />
              
              {/* <StarsCanvas /> */}
            </div>
          </div>

          <div className="relative z-0">
          <Hero />
            <About />
            <StarsCanvas />
          </div>

          <div className="relative z-0">
            <Experience />
            <StarsCanvas />
          </div>

          <div className="relative z-0">
            <Tech />
            <Feedbacks />
            <StarsCanvas />
          </div>

          
          

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
