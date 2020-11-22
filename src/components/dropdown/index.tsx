import React, { useState } from 'react';
import { hours } from '../../constants/hours';
import './style.scss';

const Dropdown = () => {

  const [rotate, setRotate] = useState(false);

  const handleClick = () => setRotate(!rotate);

  return (
    <div className="dropdown-container">
      <button className={`btn btn-dropdown ${rotate ? 'fcs' : null }`} onClick={() => handleClick()}>
        <span>19:00</span>
        <i className={`fas fa-chevron-down ${ rotate ? 'rotate' : null }`}></i>
      </button>
      {
        rotate && 
        (
          <ul className="list-dropdown">
            {
              hours.map((x: string, i: number) => (
                <li className="item-dropdown" key={i}>
                  <a className="action-dropdonw"><span>{ x }</span></a>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default Dropdown;
