import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import BaseNav from './Components/NavBars/BaseNav';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register'
import SubNav from './Components/NavBars/SubNav';
import HomeProduct from './Components/Products/HomeProduct';
import CartPage from './Components/Products/CartPage';
import { useState } from 'react';


function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeProduct isLogin={isLogin}/>}></Route>
          <Route path="/about" element={<h1>404 page not found</h1>}></Route>
          <Route path="/login" element={<Login isLogin = {isLogin}  setIsLogin={setIsLogin}/>}></Route>
          <Route path="/register" element={<Register isLogin={isLogin}/>}></Route>
          <Route path="/cart" element={<CartPage isLogin={isLogin}/>}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
