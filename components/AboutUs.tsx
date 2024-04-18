import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";

const AboutUs = () => {
  const img1 =
    "https://images.vexels.com/media/users/3/311256/isolated/lists/aea6b020ab097fce45285c9db8284d30-blue-on-ear-headphones.png";
  const img2 =
    "https://www.clipartmax.com/png/middle/33-336394_drawing-brush-logo-png-graphics-designing-software-icon.png";
  const img3 =
    "https://img.lovepik.com/free-png/20211210/lovepik-woman-travel-icon-free-vector-illustration-png-image_401475251_wh1200.png";

  return (
    <div id="About">
      <div className={styles.about_name}>About Me</div>
      <div className={styles.about}>
        <div className={styles.intrested_section}>
          <div className={styles.expriance}>
            <div className={styles.ex}>
              <Image
                src="/img/neha-offi.jpeg"
                alt="profile"
                height={400}
                width={300}
                className={styles.img_neha}
              />
            </div>

            <div className={styles.hobbies}>
              <div className={styles.paragraph}>
                Hey, I'm Neha jha , a UI/UX developer driven by a passion for
                crafting seamless digital experiences. With 2 years of
                experience in the industry, I bring expertise in HTML, CSS ,
                JavaScript, React js [ UI ] , Next Js [ UI ] , Angular [ UI ] . My
                journey in UI/UX development has been shaped by a commitment to
                blending creativity with user-centric design principles,
                ensuring that every interface I create is not only visually
                appealing but also intuitive and easy to navigate.
                <br />
                <br />
                <p>
                  Throughout my career, I've had the privilege of working on a
                  diverse range of projects, from responsive web designs to
                  interactive mobile applications. I thrive on the challenge of
                  solving complex design problems and collaborating with
                  cross-functional teams to bring ideas to life. My goal is
                  always to create meaningful interactions that resonate with
                  users and drive tangible results for businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
