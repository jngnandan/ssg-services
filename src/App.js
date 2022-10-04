
import Home from './views/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactUs from './views/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import TrainingServices from '../src/views/Training/TrainingServices';

import CleaningServices from '../src/views/Cleaning/CleaningServices'
import SecurityServices from '../src/views/Security/SecurityServices'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clearning-services' element={<CleaningServices />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/training-services' element={<TrainingServices />} />
          <Route path='/security-services' element={<SecurityServices />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
