import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, NavBar ,Form} from './Sections/index';
import { Home, Shoes ,ShoeDetails,Cart} from './Pages/index';
import { AuthProvider} from './Context/AuthContext';
import {ShoesProvider} from './Context/ShoesContext';
import { FormDisplayProvider } from './Context/FormDisplayContext';
import { ToastProvider } from './Context/ToastContext';
import {StripeContainer} from './components/index';



function App() {

  return (
    <div className="App">
      <ToastProvider>
      <FormDisplayProvider>
      <ShoesProvider>
        <AuthProvider>
         <StripeContainer/>
            <NavBar/>
            <Form/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/shoes'element={<Shoes/>}/>
              <Route path='/ShoeDetails'element={<ShoeDetails/>}/>
              <Route path='/Cart'element={<Cart/>}/>
            </Routes>
        </AuthProvider>
        </ShoesProvider>
        </FormDisplayProvider>
        </ToastProvider>
        <Footer/>
    </div>
  );
}

export default App;
