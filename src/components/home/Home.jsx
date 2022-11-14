import React from 'react';
import styles from '../home/Home.module.scss';
import Header from '../header/Header';
import Tokens from '../tokens/Tokens';
import NFT from '../nfts/NFT';
import GiftCard from '../giftCard/GiftCard';

const Home = () => {
  return (
    <section className={styles.home}>
      <Header />
      <Tokens />
      <NFT />
      <GiftCard />
    </section>
  )
}

export default Home;
