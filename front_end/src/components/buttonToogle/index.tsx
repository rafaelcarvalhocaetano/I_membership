import React, { useState } from 'react';
import './style.scss';


const ButtonToogle = () => {


  const [toggle, setToggle] = useState({
    index: 0,
    toggle: false
  });

  const positionSelect = () => toggle.toggle && toggle.index === 1 ? 'btn-select-left' : 'btn-select-rigth';

  return (
    <div className={`btn-toggle-container ${positionSelect()}`}>
      <button className={`btn btn-event-select`} onClick={() => setToggle({index: 1, toggle: true})}>
        Event
      </button>
      <button className={`btn btn-event-select`} onClick={() => setToggle({index: 2, toggle: true})}>
        Reminder
      </button>
    </div>
  );
}

export default ButtonToogle;
