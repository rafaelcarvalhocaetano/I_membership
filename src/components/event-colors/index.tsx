import React, { useState } from 'react';
import ButtonAIcon from '../buttonIcon';

import './style.scss';


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']


const EventColor = () => {

  const [checked, setChecked] = useState({
    index: 0,
    flag: false
  })

  const clickSelect = (index: number) => {
    if (index === checked.index && checked.flag) {
      setChecked({...checked, flag: false })
    } else {
      setChecked({ index, flag: true });
    }
    
  }

  const validatorClick = (i: number) => {
    return checked.index === i && checked.flag;
  }

  return (
    <ul className="colors">
      {
        colors.map((x: string, i: number) => (
          <li className="item-color" key={i}>
            <ButtonAIcon color={x}  handlerColor={() => clickSelect(i)} checked={validatorClick(i)}/>
          </li>
        ))
      }
    </ul>
  );
}

export default EventColor;