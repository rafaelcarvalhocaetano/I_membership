import React, { useState } from 'react';

import back from '../../../assets/icons/back.svg';
import next from '../../../assets/icons/next.svg';

import './action.scss';


const ActionPage = ({totaPage, onNextChange}: any) => {

  const [count, setCount] = useState(1);

  const nextPage = (data: number) => {
    if (count < totaPage) {
      setCount(count + data);
      onNextChange(count + data);
    }
  };

  const backPage = (data: number) => {
    if (count > 1) {
      setCount(count - 1);
      onNextChange(count + data);
    }
  }



  return(
    <div className="actions">
      <button className="btn btn-back" onClick={() => backPage(-1)}>
        <img src={back} alt="Voltar"/>
      </button>
      <div className="center">
        <p>{count}</p>
        <span>of</span>
        <p>{totaPage ? totaPage : 0 }</p>
      </div>
      <button className="btn btn-next" onClick={() => nextPage(1)}>
        <img src={next} alt="Próxima"/>
      </button>
    </div>
  );
}



export default ActionPage;