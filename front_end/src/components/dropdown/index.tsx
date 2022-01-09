import React, { useEffect, useState } from 'react';
import './style.scss';

const Dropdown = ({ icon, children, turn, label }: any) => {

  const container: any = React.createRef();
  const [rotate, setRotate] = useState(false);
  const [data, setData] = useState(label);

  const handleClick = () => setRotate(!rotate);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  })

  const handleClickOutside = (event: any) => {
    if (container.current && !container.current.contains(event.target)){
      setRotate(false);
    }
  };
  
  return (
    <div className="dropdown-container" ref={container}>
      <button className={`btn btn-dropdown`} onClick={() => handleClick()}>
        <span>{ data }</span>
        <i className={`${icon} ${ rotate && turn ? 'rotate' : null } icn-clr`}></i>
      </button>
      {
        rotate && children &&
        (
          <ul className="list-dropdown" onClick={() => setRotate(false)}>{ children }</ul>
        )
      }
    </div>
  );
}

export default Dropdown;
