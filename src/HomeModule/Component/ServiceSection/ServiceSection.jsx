import React from 'react';
import styles from "./ServiceSection.module.scss"
import Link from 'next/link';
import ServiceCard from './ServiceCard/ServiceCard';

const ServiceSection = () => {
  const serviceCardData = [
    {
      id: 1,
      cardNumber: "01",
      cardHeading: "Weddings",
      cardContent:
        "We provide many types of services like catering, wedding decoration, theme party decoration etc.",
      backgroundImage: "",
      route: "/service",
    },
    {
      id: 2,
      cardNumber: "02",
      cardHeading: "Corporate Events",
      cardContent:
        "We have more than 20 year's of experience in this field. So we plan everything kindly.",
      backgroundImage: "",
      route: "/service",
    },
    {
      id: 3,
      cardNumber: "03",
      cardHeading: "Anniversaries",
      cardContent:
        "We know that time is money so we provide every facility on time. There's no delay in our work.",
      backgroundImage: "",
      route: "/service",
    },
    {
      id: 4,
      cardNumber: "04",
      cardHeading: "Private Party",
      cardContent:
        "We know that time is money so we provide every facility on time. There's no delay in our work.",
      backgroundImage: "",
      route: "/service",
    },
    {
      id: 5,
      cardNumber: "05",
      cardHeading: "BirthDay Party",
      cardContent:
        "We have more than 20 year's of experience in this field. So we plan everything kindly.",
      backgroundImage: "",
      route: "/service",
    },
    {
      id: 6,
      cardNumber: "06",
      cardHeading: "Children Party",
      cardContent:
        "We provide many types of services like catering, wedding decoration, theme party decoration etc.",
      backgroundImage: "",
      route: "/service",
    },
  ];
  return (
    <section className={styles.serviceSection}>
      <div className={styles.headingWrapper}>
        <h6 className="text-[18px] font-semibold uppercase text-[#cda45e] ">
          What We Do
        </h6>
        <h2 className="text-[40px] font-semibold text-[#000] leading-[50px] mb-[25px]">
          Our Services
        </h2>
      </div>
      <div className={styles.serviceWrapper}>
        {serviceCardData?.map((value) => {
          return (
            <>
              <ServiceCard {...value} key={value?.id} />
            </>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceSection
