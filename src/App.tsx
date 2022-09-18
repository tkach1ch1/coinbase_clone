import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { Gainers } from './pages/Gainers';
import { Losers } from './pages/Losers';


function App() {
  return (
    <>
      <Navbar />
      <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/explore/s/gainers' element={<Gainers/>} />
      <Route path='/explore/s/losers' element={<Losers />} />
    </Routes>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
