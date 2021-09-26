import React from 'react';
import './Input.css';

const Input = ({ placeholder }) => {
  return (
    <div>
      <input className={'input'} type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
