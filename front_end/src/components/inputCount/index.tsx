import React, { useState } from 'react';
import './style.scss';


const InputCount = () => {

  const [count, setCount] = useState('');

  return (
    <div className="input-count">
      <input type="text" onChange={(e) => setCount(e.target.value)} placeholder="Title" />
      {
        count.length > 0 && 
        (
          <div className="count">
            <span>{ count.length }</span>
          </div>
        )
      }
    </div>
  );
}

export default InputCount;
