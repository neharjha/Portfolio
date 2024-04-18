import React from "react";
import { HandMetal } from "lucide-react";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import ButtonPage from "./ButtonPage";
import BannerImg from "./BannerImg";

const HeroPageHeader = (props) => {
  return (
    <div id="Home">
      <div className={styles.heroSection}>
        <div className={styles.namesection}>
          <div className="icon">
            <HandMetal color="white" />
          </div>
          <div className={styles.name}>
            Hello! I'm <span className={styles.colorname}>{props.name}</span>
          </div>
        </div>
        <div className={styles.para1}>
          A{" "}
          <span className={styles.textbold}>
            Front End Development |  UIUX Development |  React js UI |  Next js UI |  Angular UI | Bootsrap
          </span>
        </div>
        <div className={styles.work}>
          with <span className={styles.year}>{props.year}</span> Experience
        </div>
        <ButtonPage/>
      <BannerImg/>
      </div>
     
       </div>
  );
};

export default HeroPageHeader;
