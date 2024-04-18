import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const [data, setData] = useState(false);
  function getdata() {
    setData(!data);
  }
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navtext}># NEHA JHA</div>
        <div className={styles.menu}>
          {/* <div className={styles.menu_text} onClick={getdata}>
            {data ? "Menu" : "Menu"}
           </div>
          {data && (
            <div className={styles.navbar_responsive}>
              <div className={styles.home}>Home</div>
              <div className={styles.home}>About</div>
              <div className={styles.home}>Education</div>
              <div className={styles.home}>Experiance</div>
              <div className={styles.home}>Skill</div>
              <div className={styles.home}>Content</div>
              <div className={styles.home}>Contact</div>
            </div>
          )} */}
          {/* <div className={styles.home}>Home</div> */}
          <a href="#Home" className={styles.home}>Home</a>
             <a href="#About" className={styles.home}>About</a>
              <a href="#Education" className={styles.home}>Education</a>
             <a href="#Experiances" className={styles.home}> Experiance</a>
             <a href="" className={styles.home}>Skill</a> 
          <a href="" className={styles.home}>Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
