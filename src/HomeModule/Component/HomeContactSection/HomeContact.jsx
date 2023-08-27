import React from 'react';
import styles from "./homeContact.module.scss";
import Link from 'next/link';

const HomeContact = () => {
  return (
    <>
      <section className={styles.mainWrapper}>
        <div className={styles.headingWrapper}>
          <p className="text-[16px] font-semibold uppercase text-[#cda45e] text-center">
            Contact Us
          </p>
          <h2 className="text-[40px] font-semibold leading-[50px] mb-[25px] text-white mt-[15px]">
            Celebrate With Us
          </h2>
          <p className="text-[16px] text-white text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quia quod fuga necessitatibus est magnam voluptates enim esse iusto accusamus!
          </p>
          <Link href="/contact">
          <button className={styles.contactBtn}>Contact Us</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomeContact
