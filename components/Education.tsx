import React from "react";
import styles from "../styles/Education.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { title } from "process";

const Education = () => {
  const cards = [
    
    {
      date: "2017-2018",
      education: "12th",
      title: "Bachelor s degree",
      header: "HSC",
      p1: "Nirmala memorial collage of commerce and sciance",
      place: "Mumbai maharashtra",
    },
    {
      date: "2018-2020",
      education: "BSC-IT",
      title: "Bachelor s degree",
      header: "Bachelor of infromation technology",
      p1: "D.T.S.S collage of commerce and sciance",
      place: "Mumbai maharashtra",
    },
  ];

  return (
    <div id="Education">
      <div className={styles.title}>Education</div>
      <div className={styles.container}>
        {cards.map((cd,index) => {
          // console.log(index)
          const activeStatus=index===1 ?styles.card_active:""
          return (
            <div>
             <div className={`${styles.card1} ${activeStatus}` }>
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
    </div>
  );
};

export default Education;
