import React from 'react';
import { Wave } from  'react-animated-text';
import "./circle.css"

const exampleStyle = {
    display: 'inline-block',
    // border: '1px solid #ccc',
   
    // marginBottom: '1em',
    padding: '2em 1em 1em 1em',
    width: '80%',
    fontSize: '1.5rem',
    
  }
  
//   const codeDivStyle = {
//     backgroundColor: '#eee',
//     marginTop: '2em',
//     padding: '1px 1em',
//     overflow: 'scroll',
//     fontSize: '1rem',
//   };
  
//   const codeStyle = {
//     textAlign: 'left'
//   };

export const Wave1 = () => (
    <div className='example'>
      <Wave text="LOUD MOB MEDIA" effect="stretch" effectChange={2.0}  />
  
     
    </div>
  )
  