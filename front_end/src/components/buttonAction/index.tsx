import React from 'react';
import './style.scss';


const ButtonAction = (props: any) => {

  const getColor = () => {
    if (props.red) return 'red';
    if (props.orange) return 'orange';
    if (props.yellow) return 'yellow';
    if (props.green) return 'green';
    if (props.blue) return 'blue';
    if (props.purple) return 'purple';
    return '';
  }


  return (
    <button className={`btn btn-action ${getColor()}`} hidden={props.hide} >
      <span>{ props.title  }</span>
    </button>
  );
}

export default ButtonAction;
