import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import FirstPara from './Components/FirstPara';
import SecondPara from './Components/SecondPara';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <div>
      <h1 className='header'>Sartre's List</h1>
      <h3 className='subHeader'>Better-Dressed People</h3>
      </div>
      <br/>
     <NavBar/>
     <FirstPara/>
     <br/>
     <hr/>
     <SecondPara/>
     <br/>
     <hr/>
    <Footer/>
    </div>
  );
}

export default App;
