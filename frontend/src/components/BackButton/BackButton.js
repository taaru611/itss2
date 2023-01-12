
import React, { useEffect, useState } from 'react';
import './BackButton.css';


function BackButton() {
  const [isHome, setIsHome] = useState(false);

  
  useEffect(() => {
    if(window.location.href === "http://localhost:3000/"){
      setIsHome(true)
    }
    else {
      setIsHome(false)
    }
  },[]);
  
  const goBack = () => {
    window.history.back();  
  };

  return (
    isHome ?  (<div></div>) :
    (<button onClick={goBack} className='back-button'>
        &larr; Trở về
    </button>)
  );
}


export default BackButton;