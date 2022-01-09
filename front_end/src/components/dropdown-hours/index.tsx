import React, { useEffect, useState } from 'react';

import { hours } from '../../constants/hours';

import './style.scss';

const DropdownHours = () => {

  const container: any = React.createRef();
  const [rotate, setRotate] = useState(false);
  const [timeHours, setTimeHours] = useState(hours[0]);

  const handleClick = () => setRotate(!rotate);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  })

  const handleClickOutside = (event: any) => {
    if (container.current && !container.current.contains(event.target)){
      setRotate(false);
    }
  };

  const getHours = (hours: string) => {
    setRotate(false);
    setTimeHours(hours);
  }

  return (
    <div className="dropdown-container" ref={container}>
      <button className={`btn btn-dropdown`} onClick={() => handleClick()}>
        <span>{ timeHours }</span>
        <i className={`fas fa-chevron-down ${ rotate ? 'rotate' : null }`}></i>
      </button>
      {
        rotate && 
        (
          <ul className="list-dropdown">
            {
              hours.map((x: string, i: number) => (
                <li className="item-dropdown" key={i}>
                  <a className="action-dropdonw" onClick={() => getHours(x)}><span>{ x }</span></a>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
}

export default DropdownHours;
