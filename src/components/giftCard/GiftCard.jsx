import React from "react";
import styles from "../giftCard/GiftCard.module.scss";
import cardImage from "../../styles/assets/body.png";

const GiftCard = () => {
  return (
    <section className={styles.giftcard}>
      <aside className={styles.giftcard_left}>
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our customer
          access to loads of our exclusive services.
        </p>
        <input type="button" value="Learn more" />
      </aside>
      <img src={cardImage} alt="Gift cards" />
    </section>
  );
};

export default GiftCard;
