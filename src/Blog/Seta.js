import React from 'react';
import './Blog.css';

const Seta = ({ seta, setaleft }) => {
  return (
    <button className={`setaright ${setaleft ? 'setaleft' : ''}`}>
      <img src={seta} />
    </button>
  );
};

export default Seta;
