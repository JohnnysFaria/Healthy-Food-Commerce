import React from 'react';
import './Botao.css';

function Botao({ label, branco }) {
  return <button className={`botao ${branco ? 'branco' : ''}`}>{label}</button>;
}

export default Botao;
