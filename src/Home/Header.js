import React from 'react';
import Botao from '../Botao/Botao';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import useMedia from '../useMedia';

const Header = () => {
  const mobile = useMedia('(max-width: 60rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  return (
    <>
      <nav className={styles.navContainer}>
        <NavLink to="/">
          <div className={styles.navHome}>Healthy Food</div>
        </NavLink>

        {mobile && (
          <button
            aria-label="Menu"
            className={`${styles.mobileButton} ${
              mobileMenu && styles.mobileButtonActive
            }`}
            onClick={(e) => setMobileMenu(!mobileMenu)}
          ></button>
        )}
        <nav
          className={`${mobile ? styles.navMobile : styles.nav} ${
            mobileMenu && styles.navMobileActive
          }`}
        >
          <ul className={styles.navLista}>
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
            <NavLink to="/Register">
              <Botao label={'Register'} branco />
            </NavLink>
          </nav>
        </nav>
      </nav>
    </>
  );
};
export default Header;
