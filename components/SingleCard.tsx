import React from "react";
import styles from "../styles/Education.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { title } from "process";

const SingleCard = () => {
  const cards = [
    {
      date: "2017-2018",
      education: "10th",
     
      header: "SSC",
      p1: "Shri jamunadash aadhukiya valika vidhyalay",
      place: "Mumbai maharashtra",
    },
  ];

  return (
    <div>
     
      {cards.map((cd) => {
        return (
          <div className={styles.cd_contain}>
            <div className={styles.card2}>
              <div className={styles.date}>
                <div className={styles.date_cd}>{cd.date}</div>
                <div className={styles.degree}>{cd.education}</div>
              </div>
              <div className={styles.title_header}>
                {/* <div className={styles.t1}>{cd.title}</div> */}
                <div className={styles.headerh1}>{cd.header}</div>
              </div>
              <div className={styles.place}>
                <div className={styles.p1}>{cd.p1}</div>
                <div className={styles.Mumbai}>{cd.place}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleCard;
