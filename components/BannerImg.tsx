import React from 'react'
import styles from "../styles/Home.module.css"


const BannerImg = () => {
    const imgesUrl = "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png"

    
  return (
    <div>
      <img src={imgesUrl} alt="" className={styles.skillImges}/>
    </div>
  )
}

export default BannerImg;
