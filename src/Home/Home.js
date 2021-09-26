import React from 'react';
import './Home.css';
import Header from './Header';
import Titulo from '../Titulo/Titulo';
import InputButton from '../Input/InputButton';
import Input from '../Input/Input';
import lupa from '../img/magnifying-glass.svg';

const Home = () => {
  return (
    <div className={'home-container'}>
      <Header />
      <div className={'search-container'}>
        <Titulo h1>"Ready for Trying a new recipe?"</Titulo>
      </div>
      <div className={'input-container'}>
        <Input placeholder={'Search healthy recipes'} />
        <InputButton img={lupa} />
      </div>
    </div>
  );
};

export default Home;
