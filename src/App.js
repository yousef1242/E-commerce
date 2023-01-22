
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarOne from './component/Navbar';
import Home from './homePage/Home';
import { useState,useEffect } from "react";
import { ProductDetailsList } from './Deatils/ProductDetailsList';
import {HashLoader} from "react-spinners"
import { Cart } from './cartPage/Cart';
import { Switch } from '@mui/material';



function App() {
  const [load,setLoad] = useState(true)
  const [loadd,setLoadd] = useState(false)
  const [theme,setTheme] = useState(false)
  useEffect(() => {
    setTimeout(() => {
        if(setLoad === true && setLoadd === false){
            setLoad(false)
            setLoadd(true)
        }else{
            setLoad(false) 
            setLoadd(true) 
        }
    },2000)
    
},[])
  return (
    <div className={theme ? "black" : "white"}>
   
     {load && 
        
       <HashLoader style={{textAlign:"center"}}  color="#36d7b7" /> 
   }
   
     {loadd &&
      <>
      <NavbarOne switch={<Switch onClick={() => setTheme(!theme)} ></Switch>}/>
      <Routes>
         <Route path='/' element={<Home mode={theme}/>}/>
         <Route path='/:productId' element={<ProductDetailsList modeTwo={theme}/>}/>
         <Route path='/cart' element={<Cart modeThree={theme}/>}/>
         
      </Routes>
      </>
        
  }
    </div>
  );
}

export default App;
