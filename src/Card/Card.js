import React from 'react';
import Botao from '../Botao/Botao';
import './Card.css';

function Card({ label, img, titulo }) {
  return (
    <div className={'card-container'}>
      <div className={'card-img'}>
        <img src={img} alt={titulo} />
      </div>
      <div className={'card-texto'}>
        <p>{titulo}</p>
        <div className={'card-button'}>
          <Botao label={label} />
        </div>
      </div>
    </div>
  );
}

export default Card;
