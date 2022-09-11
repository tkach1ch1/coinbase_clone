import { Navbar } from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Router>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
