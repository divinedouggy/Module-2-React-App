
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About'
import Ingredients from './screens/Ingredients';
import NotFound from './screens/NotFound';

function App() {
  return (
    <div className="App">

      <div className='links'>
        <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/ingredients"}>Ingredients</NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/ingredients" element={<Ingredients/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>

    </div>
  );
}

export default App;
