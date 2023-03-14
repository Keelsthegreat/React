import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Stock from './Components/Stock';
import About from './Components/About';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <div className="App">
     <NavBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/Stock' element={<Dashboard/>}/>
      <Route path='/stocks/:symbol' element={<Stock/>}/>
      <Route path='/About' element={<About/>}/>

    </Routes>
    </div>
  );
}

export default App;
