import React,{useState,useEffect} from 'react'
import "./landingpage.scss"
import AnimatedLetters from './animated letters';
import Logo from './logo';
import Dcircle from './3dcircle';

function Landingpage() {
    const [letterClass1,setLetterClass1]=useState("text-animate ")
    const [letterClass2,setLetterClass2]=useState("text-animate ")
    const arr1=['M','Y','     ','N','A','M','E','      ','I','S'];
    const arr2=['S','H','A','U','N','A','K','    ','G','H','O','S','H']

    useEffect(()=>{
       setTimeout(()=>{
        setLetterClass2("text-animate-hover")
      },4000)
    },[])

    
  return (
    <div className='landingpage'>
        <div className='landingpage-content'>
        <h1>
        <div className='p'>   {<AnimatedLetters letterClass={letterClass1} strarray={arr1} id={1} />}
            </div>
        {/* {()=>{setLetterClass("fontb heading text-animate"); console.log(letterClass)}} */}
        
        <div className='heading'>{<AnimatedLetters  letterClass={letterClass2} strarray={arr2} id={11} />}
        </div>
        <div className='desc'data-aos="zoom-in-up">
          FRONTEND DEVELOPER| C++ CODER
        </div>
        </h1>
        
        </div>
        <div className='logo'>
           <Logo />
           {/* <Dcircle /> */}
        </div>
    </div>
  )
}

export default Landingpage;