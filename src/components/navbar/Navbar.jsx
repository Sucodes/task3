import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.scss";
import logo from "../../styles/assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Wallet from "../wallet/Wallet";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [ closeWallet, setCloseWallet ] = useState(true);

  const showMenu = () => {
    setMenu(!menu);
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <img src={logo} alt="Metabnb logo" />
        </Link>

        <div onClick={showMenu} className={styles.navbar_menu}>
          {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {mobileMenu ? (
          <div className={styles.menubar}>
            <ul >
              <li onClick={showMenu}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={showMenu}>
                <Link to="/places">Place to stay</Link>
              </li>
              <li>NFTs</li>
              <li>Community</li>
              <li onClick={() => setShowWallet(true)} className={styles.wallet}>Connect wallet</li>
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

        <button onClick={() => setShowWallet(!showWallet)} className={styles.navbar_btn}>Connect wallet</button>
      </nav>

      {showWallet ? <Wallet closeWallet={closeWallet} setCloseWallet={setCloseWallet} /> : !showWallet}
    </>
  );
};

export default Navbar;
