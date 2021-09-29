import React from 'react';
import Header from '../Header/Header';
import Titulo from '../Titulo/Titulo';
import Input from '../Input/Input';
import InputButton from '../Input/InputButton';
import lupa from '../img/magnifying-glass.svg';
import './Home.css';

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
