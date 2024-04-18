import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { HandMetal } from "lucide-react";
import Navbar from "../components/navbar";
import HeroPageHeader from "../components/HeroPageHeader";
import AboutUs from "../components/AboutUs";
import Education from "../components/Education";
import SingleCard from "../components/SingleCard";
import Experiance from "../components/Experiance";
import Skill from "../components/Skill";
import Contact from "../components/Conatct";


// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>My Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.my_profile}>
        <Navbar />
        <HeroPageHeader name="Neha Jha" year="2 Year" />
        <AboutUs />
        <Education />
        <SingleCard />
        <Experiance/>
        <Skill/>
        <Contact />
      </div>
    </>
  );
}
