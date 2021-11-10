import React, { useState, useEffect } from 'react'
//import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const clearClipboard = setTimeout(() => {
      setAlert(false);
    }, 1000);

    return () => clearTimeout(clearClipboard)
  }, [alert])
  
  const bcg = rgb.join(',');
  //const hex = rgbToHex(...rgb);
  console.log(bcg); 
  const hexValue = `#${hexColor}`;

  const handleClick = () => {
    setAlert(true);
      navigator.clipboard.writeText(hexValue);
  }

  return (
    <article 
    className={`color ${index > 9 && 'color-light'}`} 
    style={{backgroundColor: `rgb(${bcg})`}} 
    onClick={() => handleClick}
    >
      
      <p className="percent-value"> {weight}% </p>
      <p className="color-value"> {hexValue} </p>

      {alert && <p className="alert">copied to clickboard</p>}
    </article>
  )
}

export default SingleColor
