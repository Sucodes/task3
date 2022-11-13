import React from 'react';
import styles from '../header/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
        <aside className={styles.header_left}>left</aside>
        <aside className={styles.header_right}>right</aside>
    </header>
  )
}

export default Header;
