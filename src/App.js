import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, NavBar ,Form} from './Sections/index';
import { Home, Shoes ,ShoeDetails} from './Pages/index';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const CategoriesContext =createContext();
export const CategoryNameContext =createContext({CategoryName: null, setCategoryName: () => {} });
export const FormDisplayContext =createContext({FormDisplay: null, setFormDisplay: () => {} });
export const SelectedShoeContext =createContext({SelectedShoe: null, setSelectedShoe: () => {} });

function App() {
const [categories,setCategories]=useState('');
const [CategoryName,setCategoryName]=useState('');
const [FormDisplay,setFormDisplay]=useState('');
const [SelectedShoe,setSelectedShoe]=useState('');

useEffect(()=>{
  if(document.querySelector("#FormContainer")){
    setFormDisplay(document.querySelector("#FormContainer"));
  }
  axios.get("http://localhost:8000/shoes/categories/")
  .then(res=>{
      setCategories(res.data.results);
  })
},[])


  return (
    <div className="App">
      <CategoriesContext.Provider value={categories}>
      <CategoryNameContext.Provider value={{CategoryName,setCategoryName}}>
      <FormDisplayContext.Provider value={{FormDisplay,setFormDisplay}}>
      <SelectedShoeContext.Provider value={{SelectedShoe,setSelectedShoe}}>
        <NavBar/>
        <Form/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shoes'element={<Shoes/>}/>
          <Route path='/ShoeDetails'element={<ShoeDetails/>}/>
        </Routes>
        <Footer/>
        </SelectedShoeContext.Provider>
        </FormDisplayContext.Provider>
        </CategoryNameContext.Provider>
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
