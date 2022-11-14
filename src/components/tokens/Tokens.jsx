import React from 'react';
import styles from '../tokens/Tokens.module.scss';
import icon1 from '../../styles/assets/icon1.png';
import icon2 from '../../styles/assets/icon2.png';
import icon3 from '../../styles/assets/icon3.png';

const Tokens = () => {
  return (
    <section className={styles.tokens}>
      <img className={styles.tokens_1} src={icon3} alt="Token 1" />
      <img className={styles.tokens_2} src={icon2} alt="Token 2" />
      <img className={styles.tokens_3} src={icon1} alt="Token 3" />
    </section>
  )
}

export default Tokens;
