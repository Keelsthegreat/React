import './App.css';
import Resume from './Components/Resume';
import Education from './Components/Education'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import NavBar from './Components/NavBar';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
    <Route path='/education' element={<Education/>}/>
      <Route path='/experience' element={<Experience/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
      

    </Routes>
    </div>
  );
}

export default App;
