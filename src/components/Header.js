import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <h1 style={{textAlign: 'center'}}>Header here</h1>
  );
};

{/*
    <div id={styles.nav}>
      <a href="https://www.oxyfoo.com/Pierre" style={{ zIndex: 99 }}>
        <img
          src="/images/test.png"
          alt="Our logo"
          id={styles.logoImage}
        />
      </a>
      <div id={styles.toggleDiv}>
        <input id={styles['menu-toggle']} type="checkbox" />
        <label className={styles['menu-button-container']} htmlFor={styles['menu-toggle']}>
          <div className={styles['menu-button']}></div>
        </label>
        <ul className={styles.menu}>
          <li></li>
          <li className={styles['li-header']} onClick={() => (location.href = '#anchorMe')}>
            <label htmlFor={styles['menu-toggle']} className={`${styles.fullSize} ${styles.LeftText}`}>
              About me
            </label>
          </li>
          <li className={styles['li-header']} onClick={() => (location.href = '#anchorProjects')}>
            <label htmlFor={styles['menu-toggle']} className={`${styles.fullSize} ${styles.LeftText}`}>
              Projects
            </label>
          </li>
          <li className={styles['li-header']} onClick={() => (location.href = '#anchorContact')}>
            <label htmlFor={styles['menu-toggle']} className={`${styles.fullSize} ${styles.LeftText}`}>
              Contact
            </label>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
    */}

export default Header;
