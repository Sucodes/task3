import React from 'react';
import styles from '../places/Places.module.scss';
import PlaceCard from '../placeCard/PlaceCard';
import image from '../../styles/assets/setting.png';

const Places = () => {
  return (
    <section className={styles.places}>
        <div className={styles.places_filter}>
          <ul>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>fantasy city</li>
            <li>beach</li>
            <li>Cabins</li>
            <li>Off-grid</li>
            <li>Farm</li>
          </ul>

          <div className={styles.places_filter__btn}>
            <span>Location</span>
            <img src={image} alt="" />
          </div>
        </div>

        <div className={styles.places_card}>
          <PlaceCard />
        </div>
    </section>
  )
}

export default Places;
