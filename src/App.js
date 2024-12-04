import './App.css';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import Login from './Pages/Login';
import RegisterPage from './Pages/RegisterPage';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from './components/Map';
import Reviews from './components/Reviews';
import { CartProvider } from './components/ContextReducer';


function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createuser" element={<RegisterPage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/loginuser" element={<Login />} />
          <Route path="/map" element={<Map />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
      </Router>
    </CartProvider>
    
  );
}

export default App;
