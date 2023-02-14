import React from 'react'

function AnimatedLetters(props) {
  return (
    <div>
     {props.strarray.map((char,i)=>
     (<span key={i+props.id} className={`${props.letterClass} _${i+props.id}`}>{char}</span>
     )
     )}
    </div>
  )
}

export default AnimatedLetters