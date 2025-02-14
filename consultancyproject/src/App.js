import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/HomePage'
import Footer from './components/Footer'
import Water from './components/products/water';
function App() {
  return (
    <>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/components/products/water" element={<Water/>} />
          </Routes>
        <Footer/>
    </>
  );
}

export default App;
