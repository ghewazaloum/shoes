import { Route,Routes } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Home ,ShoeDetails} from './Pages/index';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/ShoeDetails' element={<ShoeDetails/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
