import React from "react";
import styles from "../styles/Ex.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { title } from "process";

const Experiance = () => {
  const ex = [
    {
      company: "Technofra",
      join: "Feb 2022 - sep 2023 ",
      degination:
        "Design and development of various sectors projects with the help of frontend technologies. i m doing as freelancer.",
    },
    {
      company: "Atrina Pvt",
      join: "sep 2023 -  Till now",
      degination:
        "As a UI/UX Developer at Atrina Company, I led the implementation of industry-leading UI/UX standards, crafting intuitive interfaces for various platforms. Through meticulous user research and analysis, I identified user needs and pain points, resulting in a substantial increase in user satisfaction. Collaborating closely with cross-functional teams, I ensured seamless integration of responsive design principles woking on some projects Account Aaggragetor, and 1Finances invocie , Taxations , and currectly working on Pinkmoney website",
    },
  ];
  return (
    <div id="Experiances">
      <div className={styles.title}>Experiances</div>
      <div className={styles.crd_container}>
        {ex.map((ex) => {
          return (
            <div>
              <div className={styles.card1}>
                <div className={styles.date}>
                  <div className={styles.date_cd}>{ex.company}</div>
                  <div className={styles.join}>{ex.join}</div>
                  <div className={styles.degree}>{ex.degination}</div>
                </div>
              </div>
            </div>
            //    </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiance;
