import './App.css';
import Education from './Components/Education'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import NavBar from './Components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Portfolio from './Components/Portfolio'

function App() {
  return (
    <div className="App">
      <h1>Akili Inniss</h1>
      <h1>Software Enginner</h1>
      <NavBar/>
      <Routes>
    <Route path='/Education' element={<Education/>}/>
      <Route path='/Experience' element={<Experience/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='Portfolio' element={<Portfolio/>}/>
      

    </Routes>
      <img className="pic" src="https://cdn.discordapp.com/attachments/692019678482006016/1069031059469123735/IMG_4022.jpg"/>
    </div>
  );
}

export default App;
