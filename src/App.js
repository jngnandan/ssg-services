
import Home from './views/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactUs from './views/ContactUs';
import Header from './components/Header';

import CleaningServices from '../src/views/Cleaning/CleaningServices'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clearning-services' element={<CleaningServices />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
