import React from 'react';
import Titulo from '../Titulo/Titulo';
import './Footer.css';
const Footer = () => {
  return (
    <div className={'footer-container'}>
      <Titulo span>© Copyrights 2019 Stack. All Rights Reserved.</Titulo>
      <div className={'privacy'}>
        <Titulo span>Privacy Policy</Titulo>
        <div className={'terms'}>
          <Titulo span> Terms and Conditions</Titulo>
        </div>
      </div>
    </div>
  );
};

export default Footer;
