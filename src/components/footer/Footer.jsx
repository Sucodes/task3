import React from 'react'
import styles from '../footer/Footer.module.scss';
import logo2 from '../../styles/assets/logo2.png';
import facebook from '../../styles/assets/facebook.png';
import instagram from '../../styles/assets/instagram.png';
import twitter from '../../styles/assets/twitter.png';
import copy from '../../styles/assets/copy.png';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_links}>
        <><img className={styles.footer_links__logo} src={logo2} alt="Metabnb logo" /></>

        <div className={styles.footer_links_icon}>
          <img src={facebook} alt="Facebook icon" />
          <img src={instagram} alt="Instagram icon" />
          <img src={twitter} alt="Twitter icon" />
        </div>

        <p>
          <img src={copy} alt="" /> 
          2022 Metabnb
        </p>
      </div>

      <div className={styles.footer_note}>
        <div>
          <h5>Community</h5>
          <ul>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>

        <div>
          <h5>Places</h5>
          <ul>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </div>

        <div >
          <h5>About us</h5>
          <ul>
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer;
