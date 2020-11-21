import React from 'react';
import './style.scss';


const ButtonAIcon = (props: any) => {

  const getColor = () => {
    if (props.color === 'red') return 'red';
    if (props.color === 'orange') return 'orange';
    if (props.color === 'yellow') return 'yellow';
    if (props.color === 'green') return 'green';
    if (props.color === 'blue') return 'blue';
    if (props.color === 'purple') return 'purple';
    return '';
  }

  return (
    <button className={`btn btn-icon-event ${getColor()} ${props.checked ? 'border-effect': null }`} onClick={() => props.handlerColor(props.item)}>
      {
        props.checked && (<i className="fas fa-check mf"></i>)
      }
    </button>
  );
}

export default ButtonAIcon;
