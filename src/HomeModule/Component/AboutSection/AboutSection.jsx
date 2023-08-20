import React from 'react';
import styles from "./aboutSection.module.css";
import Image from 'next/image';
import about1 from "../../../assets/about1.jpg"

const AboutSection = ({ button, mainAboutContent }) => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutImage}>
          <Image src={about1} alt="about image" />
        </div>
        <div className={styles.rightContent}>
          <h6 className="text-[16px] font-semibold uppercase text-[#cda45e] mb-[16px]">
            About Us
          </h6>
          <h2 className="text-[40px] font-semibold text-[#000] leading-[50px] mb-[16px]">
            We're the largest Events Agency
          </h2>
          <p className="text-[15px] font-normal text-[#8d8d8d]">
            Baba Saab Event Co. has been the heart of the most happening and
            rocking corporate events, wedding events, birthday parties and other
            event projects.
          </p>
          <p className="text-[15px] font-normal text-[#8d8d8d] mt-3">
            The Stage is set, the lights dim and its show time. Remember your
            event does not have any dress rehearsal and so there is no second
            chance.
          </p>
          {button && <button className={styles.contactBtn}>Read More</button>}
        </div>
      </div>
      {mainAboutContent && (
        <div className={styles?.mainAboutContent}>
          <p className="text-[15px] font-normal text-[#8d8d8d] text-justify">
            With Baba Saab managing your event nothing is left for a chance. We
            take care of even the smallest things and manage the events as if
            our own.
          </p>
          <p className="text-[15px] font-normal text-[#8d8d8d] text-justify mt-3">
            Baba Saab Event Co. leading Event management portal and largest
            events classified directory with one of its kind services.
          </p>
          <p className="text-[15px] font-normal text-[#8d8d8d] text-justify mt-3">
            We pride ourselves as a well established corporate planners, wedding
            planners, party planners and event managers. We are a 360 degree
            event management, brand marketing and entertainment firm with
            complete focus on providing end to end solutions to meet the
            requirements of our clients. Baba Saab Event Co. stands for three
            creative people who came up together to form an impeccable, ideal
            and ingenious company. Affordability, Quality and Mind Blowing
            Events is what we guarantee. Our main focus is to guarantee great
            memories keeping in mind the budget of the clients because events
            like wedding, sangeet etc do create a hole in your pocket. is our
            company foundation stone with a vision to make peoples big dream a
            reality.
          </p>
        </div>
      )}
    </section>
  );
};

export default AboutSection
