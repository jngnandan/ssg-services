
import Home from './views/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ContactUs from './views/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import TrainingServices from './views/Boxing';
import CleaningServices from './views/CleaningServices'

import Boxing from './views/Boxing'
import SecurityServices from '../src/views/SecurityServices'
import SecurityPage from './views/Security/SecurityPage';
import CleaningPage from './views/Cleaning/CleaningPage';

import ReactGA from "react-ga";
const TRACKING_ID = "G-NT3KK7MS47"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function App() {
  return (
    <div className='h-screen mb-auto'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clearning-services' element={<CleaningServices />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/boxing' element={<Boxing />} />
          <Route path='/security-services' element={<SecurityServices />} />
          <Route path='/security-services/:id' element={<SecurityPage />} />
          <Route path='/cleaning-services/:id' element={<CleaningPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
