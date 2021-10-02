import React from 'react';
import { getStorage } from '../setCookie';
import Styles from './Modal.module.css';

const Modal = ({ onClose }) => {
  return (
    <div className={Styles.container}>
      <button className={Styles.close} onClick={onClose}>
        X
      </button>
      <h1 className={Styles.welcome}>{`Welcome ${getStorage()} `}</h1>
    </div>
  );
};

export default Modal;
