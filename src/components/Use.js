import React from 'react'
    
const Use = (props) => {
    const handleClick = (e) => {
        props.updateProfile(e);
    };
  return (
    <div>
     
    <p className="question">What is your planned use:</p>
    {/* Carving Button */}
    <button name="use" value="carving" onClick={handleClick}>Carving</button>
    {/* Frontside Button */}
    <button name="use" value="frontside" onClick={handleClick}>Frontside</button>
    {/* All-Mountain Button */}
    <button name="use" value="all-mountain" onClick={handleClick}>All-Mountain</button>
    {/* Big Mountain Button */}
    <button name="use" value="big mountain" onClick={handleClick}>Big Mountain</button>
     {/* Powder Button */}
     <button name="use" value="powder" onClick={handleClick}>Powder</button>
    </div>
  )
}

export default Use