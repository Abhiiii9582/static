import React, { useState } from 'react';
import styles from "./header.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import mainLogo from "../../assets/logo.png"
import Navbar from './NavBar/Navbar';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import RightSideBar from '@/HomeModule/Component/RightSideBar/RightSideBar';

const MainHeader = () => {
  const [sidebar,setSideBar] = useState(false)
  const showSideBar = () =>{
    setSideBar(true)
  }
  return (
    <>
      <header className={styles.header}>
        <Link
          href={""}
          className={styles.logoContainer}
          data-aos="fade-down"
          data-aos-duration="500"
        >
          <div className={styles.logoWrapper}>
            <Image src={mainLogo} alt="logo-image" />
          </div>
          <p className={styles.logoText}>BABASAAB</p>
        </Link>
        {/* === desktop Navbar === */}
        <Navbar className={styles.navView} />
        {/* === contact Btn === */}
        <div data-aos="fade-down" data-aos-duration="1400">
          <button className={styles.contactBtn}>Contact</button>
        </div>

        <button
          className={styles.menuIcon}
          data-aos="fade-down"
          data-aos-duration="1600"
          onClick={showSideBar}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </header>
      <RightSideBar setSideBar={setSideBar} sidebar={sidebar} />
    </>
  );
}

export default MainHeader
