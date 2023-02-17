import PropTypes from 'prop-types';
import { useState } from 'react';
import Gender from './Gender';
import Weight from './Weight';

const Input = (props) => {
    const [qID, setqID] = useState(1);

    const handleInput = (id) => {
        setqID(id);
        console.log("Page ID: " + qID);
    };
    const showButton = (id, btn) => {
        if (qID === 1 && btn === "prev") {
            return false;
        } 
        else if (qID === 7 && btn === "next") {
            return false;
        }
        else {
            return true;
        }
    };
    const renderComponent = (qID) => {
        switch (qID) {
            case 1:
                return <Gender updateProfile={props.updateProfile}/>;
            case 2:
                return <Weight/>;
            default:
                return null;
        }    
    };
  return (
    <div className="input">   
    {showButton(qID, "prev") &&  <button onClick={() => handleInput(qID - 1)} className="btn btn-page input-prev">-</button>}
    {renderComponent(qID)}
    {showButton(qID, "next") &&  <button onClick={() => handleInput(qID + 1)} className="btn btn-page input-next">+</button>}
    </div>
  )
}



export default Input