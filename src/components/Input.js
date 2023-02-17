import PropTypes from 'prop-types';
import { useState } from 'react';
import Gender from './Gender';
import Weight from './Weight';
import Height from './Height';
import Skill from './Skill';
import Use from './Use';
import Length from './Length';

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
        else if (qID === 6 && btn === "next") {
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
                return <Height/>;
            case 3:
                return <Weight/>;
            case 4:
                return <Skill/>;
            case 5:
                return <Use/>;
            case 6:
                return <Length/>;
            default:
                return null;
        }    
    };
  return (
    <div className="input">   
        {showButton(qID, "prev") &&  <button onClick={() => handleInput(qID - 1)} className="btn btn-page input-prev">-</button>}
        <div className="input-container">
            {renderComponent(qID)}
        </div>
        {showButton(qID, "next") &&  <button onClick={() => handleInput(qID + 1)} className="btn btn-page input-next">+</button>}
    </div>
  )
}



export default Input