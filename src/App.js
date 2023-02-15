import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar"
import './App.css';
import MainView from './Components/Main_View';


function App() {
  
  return (
    <>
  <BrowserRouter>
  <NavBar></NavBar>
  <Routes>
  <Route exact path="/" element={<MainView></MainView>}>
    
  </Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
