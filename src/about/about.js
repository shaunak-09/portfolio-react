import React,{useEffect, useState} from 'react'
import AnimatedLetters from '../landingpage/animated letters'
import './about.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import {Bars} from 'react-loader-spinner'


function About() {
    const arr1=['A','b','o','u','t',' ','M','e'];
    const [letterClass,setLetterClass]=useState("text-animate1");
    // const [loading,setLoading]=useState("true");

    // useEffect(()=>{
    //   setTimeout(()=>{
    //      setLoading("false");
    //   },2000)
    // },[])
  return (
    <>
    <div className='aboutus'>
        <h1><AnimatedLetters letterClass={letterClass} strarray={arr1} id={24}/></h1>
        <div className='text-area'>
        <p data-aos="fade-right">
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p data-aos="fade-right">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p data-aos="fade-right">
            I also do coding in C++.I am a regular competitive programmer with 4* in codechef.
          </p>

        </div>

        <div className="stage-cube-cont"  data-aos="flip-up">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
   

        
    </div>
    {/* <Loader type="pacman" /> */
    }
         {/* <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClassName="loader"
  visible={loading}
/> */}
    </>
    
  )
}

export default About