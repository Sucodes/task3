import React from "react";
import styles from "../placeCard/PlaceCard.module.scss";
import stars from "../../styles/assets/stars.png";
import data from "../../imageData2.js";

const PlaceCard = () => {
  return (
    <>
      {data &&
        data.map((element) => {
          return (
            <div key={element.id} className={styles.place_card}>
              <>
                <img className={styles.place_card__image} src={element.img} alt="nft" />
              </>
              
              <div className={styles.place_card_detail}>
                <span className={styles.place_card_detail__1}>Desert king</span>
                <span className={styles.place_card_detail__2}>1MBT per night</span>
              </div>

              <div className={styles.place_card_detail}>
                <span className={styles.place_card_detail__3}>2345km away</span>
                <span className={styles.place_card_detail__4}>available for 2weeks stay</span>
              </div>

              <div className={styles.place_card__icon}>
                <img src={stars} alt="star icons" />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default PlaceCard;