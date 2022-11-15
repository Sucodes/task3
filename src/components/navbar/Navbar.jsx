import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.scss";
import logo from "../../styles/assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [ menu, setMenu ] = useState(false);
  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={styles.navbar}>

      <Link to="/">
        <img src={logo} alt="Metabnb logo" />
      </Link>

      <div onClick={showMenu} className={styles.navbar_menu}>
        {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      {mobileMenu ? (
        <div className={styles.menubar}>
          <ul onClick={showMenu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/places">Place to stay</Link>
            </li>
            <li>NFTs</li>
            <li>Community</li>
            <li className={styles.wallet}>Connect wallet</li>
          </ul>
        </div>
      ) : null}

      <ul className={styles.navbar_links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/places">Place to stay</Link>
        </li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>

      <button className={styles.navbar_btn}>Connect wallet</button>
      
    </nav>
  );
};

export default Navbar;
