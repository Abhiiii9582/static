'use client';
import React, { useState } from 'react';
import styles from "./navbar.module.css"
import Link from 'next/link';

const Navbar = ({className}) => {
    const navData = [
      {
        id: 1,
        name: "HOME",
        route: "/",
        speed: "500",
      },
      {
        id: 2,
        name: "About",
        route: "/about",
        speed: "700",
      },
      {
        id: 3,
        name: "Service",
        route: "/",
        speed: "900",
      },
      {
        id: 4,
        name: "gallary",
        route: "/",
        speed: "1100",
      },
    ];
    const getId = (item) =>{
      console.log(item)
    }
  //  const [cursorX,setCursorX] = useState()
  //  const [cursorY,setCursorY] = useState()
  //  const [hover,setHover] = useState(false)

  //  window.addEventListener('mousemove',(e) =>{
  //   setCursorX(e.pageX)
  //   setCursorY(e.pageY)
  //  })
   
  return (
    <nav className={`${styles.navbar} ${className}`}>
      <ul className={styles.navList}>
        {navData?.map((value)=>{
            return (
              <>
                <li
                  className={styles.navItem}
                  key={value?.id}
                  onClick={() => getId(value?.id)}
                  data-aos="fade-down"
                  data-aos-duration={value?.speed}
                  // onMouseOver={() => setHover(true)}
                  // onMouseOut={() => setHover(false)}
                >
                  <Link
                    href={value?.route}
                    className={styles.navLink}
                    // dataText={value?.name}
                    // onMouseOver={() => setHover(true)}
                    // onMouseOut={() => setHover(false)}
                  >
                    {value?.name}
                  </Link>
                </li>
              </>
            );
        })}
        
      </ul>
      {/* <div className={`${styles.cursor} ${hover && styles.scale}`}
      style={{
        left:cursorX + 'px',
        top:cursorY + 'px'
      }}></div> */}
    </nav>
  );
}

export default Navbar
