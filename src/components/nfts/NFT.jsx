import React from 'react';
import styles from '../nfts/NFT.module.scss';
import Card from '../card/Card';

const NFT = () => {
  return (
    <section className={styles.nfts}>
        <h2>Inspiration for your next adventure</h2>
        <div className={styles.nfts_card}>
            <Card />
        </div>
    </section>
  )
}

export default NFT;
