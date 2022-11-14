import React from "react";
import styles from "../card/Card.module.scss";
import stars from "../../styles/assets/stars.png";
import data from "../../ImageData.js";

const Card = () => {
  return (
    <>
      {data &&
        data.map((element) => {
          return (
            <div key={element.id} className={styles.card}>
              <>
                <img className={styles.card_image} src={element.img} alt="nft" />
              </>
              
              <div className={styles.card_detail}>
                <span className={styles.card_detail_1}>Desert king</span>
                <span className={styles.card_detail_2}>1MBT per night</span>
              </div>

              <div className={styles.card_detail}>
                <span className={styles.card_detail_3}>2345km away</span>
                <span className={styles.card_detail_4}>available for 2weeks stay</span>
              </div>

              <div className={styles.card_icon}>
                <img src={stars} alt="star icons" />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
