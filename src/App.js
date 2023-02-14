import { BrowserRouter,Route,Routes} from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import Navbar from './navbar/navbar';
import Landingpage from './landingpage/landingpage';
import About from './about/about';
import {Bars} from 'react-loader-spinner'
import './App.scss'
import Quali from './qualifications/quali';
import Contact from './contact/contact';
function App() {
  const [loading,setLoading]=useState(false);
 
  useEffect(()=>{
    
    setLoading(true);
   
    setTimeout(()=>{
       setLoading(false);
      
    },3000)
  },[])
 
  return (
  
    <div className="App">
      {
        
        loading?
        (
        
        <div className='loader'>
         
        <Bars
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClassName="loader-bar"
      visible={loading}
    />
        </div>):
        (
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Navbar /> <Landingpage /> <About /> <Quali /> <Contact />
          </> } />
  
      
        </Routes>
        </BrowserRouter>


        )
       
        
       
        
      }
      
     
    </div>
  );
}

export default App;
