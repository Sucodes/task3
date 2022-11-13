import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../layout/Layout.module.scss';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <main className={styles.container}>
        <Navbar />

        <>
          <Outlet />
        </>
        
        <Footer />
    </main>
  )
}

export default Layout;
