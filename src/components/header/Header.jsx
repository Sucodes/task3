import React from 'react';
import styles from '../header/Header.module.scss';
import header_img from '../../styles/assets/home.png';

const Header = () => {
  return (
    <header className={styles.header}>
        <aside className={styles.header_left}>
            <h2>Rent a <span>Place</span> away <span>Home</span> in the <span>Metaverse</span></h2>

            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

            <form className={styles.header_left_form}>
              <input className={styles.input} type="search" placeholder='Search for location' />
              <input className={styles.submit} type='submit' value='Search'/>
            </form>
        </aside>

        <aside className={styles.header_right}>
          <img src={header_img} alt="" />
        </aside>
    </header>
  )
}

export default Header;
