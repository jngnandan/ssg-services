
import Home from './views/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactUs from './views/ContactUs';
import Header from './components/Header';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
