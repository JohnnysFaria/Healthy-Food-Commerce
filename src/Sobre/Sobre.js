import React from 'react';
import './Sobre.css';
import Titulo from '../Titulo/Titulo';
import Botao from '../Botao/Botao';

const Sobre = () => {
  return (
    <section className={'sobre-container'}>
      <div className={'services'}>
        <Titulo h2>{'The best services ready To serve you'}</Titulo>
        <Titulo p>
          {
            'Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.'
          }
        </Titulo>
        <Titulo p>
          {
            'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
          }
        </Titulo>
        <Titulo p>
          {
            'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
          }
        </Titulo>
        <div className={'botao-serv'}>
          <Botao label={'Know More'} />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
