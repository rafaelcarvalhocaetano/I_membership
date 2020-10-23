import React from 'react';

import './inputControll.scss';

const InputControll = ({label, placeholder, type, id, emitValue}: any) => {

  const requestInput = (value: any) => emitValue(value);

  return(
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type ? type : 'text'} name="user-name" id={id} placeholder={placeholder} autoComplete="off" onChange={(e) => requestInput(e.target.value)}/>
    </div>
  );
}

export default InputControll;