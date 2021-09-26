import React from 'react';
import './Cardblog.css';

function Cardblog({ img, titulo, avatar, nome }) {
  return (
    <div className={'card-container1'}>
      <div className={'imgblog'}>
        <img src={img} />
      </div>
      <div className={'card-text'}>
        <h3>{titulo}</h3>
      </div>
      <div className={'avatar'}>
        <img src={avatar} />
        <p>{nome}</p>
      </div>
    </div>
  );
}

export default Cardblog;
