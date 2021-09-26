import React from 'react';
import Home from './Home/Home';
import Recipe from './Recipe.js/Recipe';
import Sobre from './Sobre/Sobre';
import Blog from './Blog/Blog';
import Join from './Join/Join';
import Footer from './Footer/Footer';

const Landingpage = () => {
  return (
    <div>
      <Home />
      <Recipe />
      <Sobre />
      <Blog />
      <Join />
      <Footer />
    </div>
  );
};

export default Landingpage;
