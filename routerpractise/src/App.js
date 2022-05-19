import logo from './logo.svg';
import './App.css';
import Product from './Component/Product';
import Contact from './Component/Contact';
import About from './Component/About';
import Navigation from './Navigation';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import DisplayProduct from './Component/DisplayProduct';
import SampleTable from './SampleTable';
import ProductItems from './Component/ProductItems';
import ListProduct from './Component/ListProduct';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React workshop</h1>
      <Router>
      <Navigation/>
        <Routes>
          <Route path="*" element={<h1>404 page not found</h1>}></Route>
          <Route path="/" element={<h1>Welcome to home</h1>}></Route>
          <Route path="/product" element={<Product/>}>
                <Route path=":id" element={<ListProduct/>}></Route>
          </Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          {/* <Route path="/product/:id" element={<ProductItems/>}></Route> */}
          <Route path="/table" element={<SampleTable/>}></Route>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
