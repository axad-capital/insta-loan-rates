import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComp from './components/HomeComp/HomeComp';
import PrivacyPolicy from './components/Footer/Legal/PrivacyPolicy';
import Terms from './components/Footer/Legal/Terms';
import Disclaimer from './components/Footer/Legal/Disclaimer';
import Partners from './components/Footer/Legal/Partners';
import Thanks from './components/Thanks/Thanks'
import ThanksGoog from './components/Thanks/ThanksGoog'
import ThanksFb from './components/Thanks/ThanksFb'
import LandingPage from './components/LandingPage/LandingPage';
import LandingPageThanks from './components/Thanks/LandingPageThanks';

function App() {
  return (
    <div className="App">
      <div style={{ opacity: '0', position: 'absolute', left: '50%' }}>
        <a href="https://www.a1jkghtrk.com/28KL6/3F292Q1/?source_id={affiliate_id}&sub1={transaction_id}">offers!</a>
      </div>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomeComp />} />
          <Route exact path='/lp1' element={<LandingPage />} />
          <Route exact path='/goog' element={<HomeComp />} />
          <Route exact path='/fb' element={<HomeComp />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
          <Route exact path='/thanks' element={<Thanks />} />
          <Route exact path='/thanks/goog' element={<ThanksGoog />} />
          <Route exact path='/thanks/fb' element={<ThanksFb />} />
          <Route exact path='/thanks-lp1' element={<LandingPageThanks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
