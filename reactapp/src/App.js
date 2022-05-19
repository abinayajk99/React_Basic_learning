// import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
// import Greet from './Greet';
// import Welcome from './Welcome';
// import CoditionalRendering from './CoditionalRendering'
import Home from './Home';
import Shop from './Shop';
import Navigation from './Navigation';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import UserForm from './UserForm';
import Unform from './Unform';


function App() {
  return (
    <div>
      <h1>welcome to React js workshop</h1>
      {/* <Greet/>
      <Welcome name="abinaya">janu</Welcome>
      <CoditionalRendering/>
      <Home/>
      <Contact/>
      <Shop/> */}
      {/* <Router>
      <Navigation/>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        
      </Router> */}
      {/* <UserForm/> */}
      <Unform/>
      
    </div>
  );
}

export default App;
