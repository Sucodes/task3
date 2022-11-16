import React from 'react';
import styles from '../wallet/Wallet.module.scss';
import x from '../../styles/assets/x.png';
import arrow from '../../styles/assets/arrow.png';
import metaMask from '../../styles/assets/metaMask.png';
import walletConnect from '../../styles/assets/walletConnect.png';

const Wallet = ({ closeWallet, setCloseWallet}) => {

  return (
    <>
      {closeWallet ? 
      <section className={styles.wallet}>
      <div className={styles.wallet_card}>
        <div className={styles.wallet_card_heading}>
          <p>Connect Wallet</p>
          <img 
          onClick={() => setCloseWallet(false)}
           src={x} alt="Close icon" />
        </div>
        <div className={styles.wallet_card_subheading}>
          <p className={styles.wallet_card_subheading__text}>Choose your preferred wallet:</p>

          <div className={styles.wallet_card_subheading__1}>    
            <p><img src={metaMask} alt="metamask icon" /> Metamask</p>
            <img  className={styles.wallet_card_subheading__1_img} src={arrow} alt="arrow icon" />
          </div>

          <div className={styles.wallet_card_subheading__2}>
            <p><img src={walletConnect} alt="walletConnect icon" /> WalletConnect</p>
            <img className={styles.wallet_card_subheading__2_img} src={arrow} alt="arrow icon" />
          </div>

        </div>
      </div>
    </section>
    : null}
    </>
  )
}

export default Wallet;
