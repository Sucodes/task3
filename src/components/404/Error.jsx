import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../404/Error.module.scss';

const Error = () => {
  return (
    <section className={styles.error}>
      <h1> Oops! Something went wrong. </h1>
      <Link to='/'>Go back</Link>
    </section>
  )
}

export default Error;
