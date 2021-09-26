import React from 'react';
import Titulo from '../Titulo/Titulo';
import Input from '../Input/Input';
import InputButton from '../Input/InputButton';
import './Join.css';

const Join = () => {
  return (
    <section className={'join-container'}>
      <div className={'membership'}>
        <div className={'join-email'}>
          <Titulo h2>{'Join our membership to get special offer'} </Titulo>
        </div>
        <div className={'join-input'}>
          <Input placeholder={'Enter your email address'} />
          <InputButton label={'Join'} btnjoin />
        </div>
      </div>
    </section>
  );
};

export default Join;
