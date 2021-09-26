import React from 'react';
import Titulo from '../Titulo/Titulo';
import Card from '../Card/Card';
import './Recipe.css';
import comida1 from '../img/comida_1.svg';
import comida2 from '../img/comida_2.svg';
import comida3 from '../img/comida_3.svg';
import comida4 from '../img/comida_4.svg';

const Recipe = () => {
  return (
    <div className={'container'}>
      <div className={'container-titulo'}>
        <Titulo h2>{'Our Best Recipes'} </Titulo>
        <Titulo p>
          {
            'Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts'
          }
        </Titulo>
      </div>
      <div className="cards-container">
        <div className="card-wrapper">
          <Card
            img={comida1}
            label={'See Recipe'}
            titulo={'Broccoli Salad with Bacon'}
          />
        </div>

        <div className="card-wrapper">
          <Card
            img={comida2}
            label={'See Recipe'}
            titulo={'Classic Beef Burgers'}
          />
        </div>

        <div className="card-wrapper">
          <Card
            img={comida3}
            label={'See Recipe'}
            titulo={'Classic Potato Salad'}
          />
        </div>

        <div className="card-wrapper">
          <Card
            img={comida4}
            label={'See Recipe'}
            titulo={'Cherry Cobbler on the Grill'}
          />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
