import React from 'react';
import styles from "../styles/Buttons.module.css"



const ButtonPage = () => {
  
  return (
    <div className={styles.button_setion}>
      <a href="public/img/neha-resume.pdf" download>
      <button className={styles.btn1}>Resume</button>
</a>
  
    </div>
  )
}

export default ButtonPage
