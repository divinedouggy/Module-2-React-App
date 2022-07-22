
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './screens/Home';
import About from './screens/About'
import Container from './screens/Container';
import NotFound from './screens/NotFound';
import Header from './components/Header';
import Images from './screens/Images';

function App() {


  
  return (
    <div className="App">
      <Header />
      
      <Routes  >
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/ingredients" element={<Container/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/ingredients/'./screens/Images'" element={<Images/>}/>

      </Routes>

      

    </div>
  );
}

export default App;
