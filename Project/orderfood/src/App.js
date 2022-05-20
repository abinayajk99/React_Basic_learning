import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import BaseNav from './Components/NavBars/BaseNav';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register'
import SubNav from './Components/NavBars/SubNav';
import HomeProduct from './Components/Products/HomeProduct';
import CartPage from './Components/Products/CartPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeProduct/>}></Route>
          <Route path="/about" element={<h1>404 page not found</h1>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
