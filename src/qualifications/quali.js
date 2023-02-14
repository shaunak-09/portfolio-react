import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "react-awesome-slider/dist/styles.css";
import './quali.scss'
 

  

function Quali() {
  return (
    <div className='quali' >
        <div data-aos="fade-up">
        <h1>Qualifications</h1>
        <AwesomeSlider className='slider' animation="cubeAnimation">
             <div className='content'><img src="https://assets.telegraphindia.com/telegraph/2021/Jul/1625344330_04metiit_4c.jpg" className='q-img' alt="..." />
              
              <div className='content-text'><h2>I am a second year undergrad pursuing Mechanical Engineering at </h2>
              <h2>IIT KHARAGPUR</h2>
                </div></div>
            <div className='content'><img src="https://www.drury.edu/wp-content/uploads/2021/04/HemSheela.jpg" className='q-img' alt="..."/>
            <div className='content-text'><h2 >I completed my plus 2 from    </h2>
              <h2 > Hemsheela Model School</h2></div></div>
            <div className='content'>  <img src="http://ccbi.org.in/images/schools/svsasn.jpg" className='q-img' alt="..."/>
              
            <div className='content-text'><h2>I completed my primary schooling from    </h2>
              <h2>ST.Vincent's High and Technical School </h2></div></div>
       </AwesomeSlider>

        </div>
        

    </div>
  )
}

export default Quali;