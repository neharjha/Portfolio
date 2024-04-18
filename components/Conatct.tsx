import React from 'react'
import styles from  "../styles/Contact.module.css"

const Conatct = () => {
  return (
    <div>
      <div className={styles.conatct}>
<div className={styles.row}>
    <div className={styles.address}>
        <img src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png" alt="" className={styles.img1}/>
        <div className={styles.heder}>Address</div>
        <div className={styles.para}>Mumbai, Maharashtra 401203</div>
    </div>
    <div className={styles.phone}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="" className={styles.img1}/>
        <div className={styles.heder}>Phone</div>
        <div className={styles.para}>9326304954</div>
    </div>
    <div className={styles.email}>
    <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="" className={styles.img1} />
        <div className={styles.heder}>Email</div>
        <div className={styles.para}>neharjha1998@gmail.com</div>
    </div>
</div>
      </div>
    </div>
  )
}

export default Conatct
