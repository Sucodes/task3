import React from 'react';
import styles from '../home/Home.module.scss';
import Header from '../header/Header';
import Tokens from '../tokens/Tokens';

const Home = () => {
  return (
    <section className={styles.home}>
      <Header />
      <Tokens />
      
    </section>
  )
}

export default Home;
