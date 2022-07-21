
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About'
import Container from './screens/Container';
import NotFound from './screens/NotFound';
import Header from './components/Header';

function App() {


  
  return (
    <div className="App">
      <Header />
      
      <Routes  >
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/ingredients" element={<Container/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>

      

    </div>
  );
}

export default App;
