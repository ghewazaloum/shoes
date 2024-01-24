import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './Sections/index';
import { Home } from './Pages/index';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
