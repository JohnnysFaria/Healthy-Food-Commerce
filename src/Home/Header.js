import React from 'react';
import Botao from '../Botao/Botao';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ label, placeholder }) => {
  return (
    <>
      <nav className={'nav-container'}>
        <NavLink to="/">
          <div className={'nav-home'}>Healthy Food</div>
        </NavLink>

        <div className={'nav'}>
          <ul className={'nav-lista'}>
            <li>
              <a>HEALTHY RECIPES</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>JOIN</a>
            </li>
          </ul>
          <nav>
            <NavLink to="/Register" activeStyle={{ textDecoration: 'none' }}>
              <Botao label={'Register'} branco />
            </NavLink>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Header;
