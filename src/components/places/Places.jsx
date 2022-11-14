import React from 'react';
import styles from '../places/Places.module.scss';
import PlaceCard from '../placeCard/PlaceCard';

const Places = () => {
  return (
    <section className={styles.places}>

        <div className={styles.places_card}>
            <PlaceCard />
        </div>
    </section>
  )
}

export default Places;
