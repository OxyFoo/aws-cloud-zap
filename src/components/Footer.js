import React from 'react';
import Image from 'next/image'
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Pierre Marsaa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
