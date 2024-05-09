
// import './App.css';

import  { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Nav from './components/Nav'
// import Main from './components/Main';
import Classes from './components/Classes';
import Join from './components/Join';
import Products from './components/Products';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Sign from './components/Sign.jsx';



function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
     
      <BrowserRouter>
      <Nav/>
     
      
      <Routes>
       <Route path="/" element={<Join/>}></Route>
       <Route path="/classes" element={<Classes/>}></Route>
       <Route path="/products" element={<Products/>}></Route>
       <Route path="/About" element={<About></About>}></Route>
       <Route path="/Login" element={<Login></Login>}></Route>
       <Route path="/Sign"  element={<Sign></Sign>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
