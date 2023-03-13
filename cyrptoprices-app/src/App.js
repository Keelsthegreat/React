import "./App.css";
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/currencies";
import Main from "./pages/main";
import Price from "./pages/price";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/" element={ <Main /> } />
    <Route path="/" element={ <Currencies /> } />
    <Route path="/" element={ <Price /> } />
   </Routes>
    </div>
  );
}

export default App;
