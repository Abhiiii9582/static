import React from 'react';
import styles from "./ServiceSection.module.css"
import Link from 'next/link';
import ServiceCard from './ServiceCard/ServiceCard';

const ServiceSection = () => {
  const serviceCardData = [
    {
      id:1,
      cardNumber:"01",
      cardHeading:"BirthDay Party",
      cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?",
      backgroundImage:"",
      route:""
    },
    {
      id:2,
      cardNumber:"02",
      cardHeading:"Corporate Events",
      cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?",
      backgroundImage:"",
      route:""

    },
    {
      id:3,
      cardNumber:"03",
      cardHeading:"Weddings",
      cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?",
      backgroundImage:"",
      route:""

    },
    {
      id:4,
      cardNumber:"04",
      cardHeading:"Anniversaries",
      cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?",
      backgroundImage:"",
      route:""

    },
    {
      id:5,
      cardNumber:"05",
      cardHeading:"Children Party",
      cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?",
      backgroundImage:"",
      route:""

    },
    {
      id:6,
      cardNumber:"06",
      cardHeading:"Private Party",
      cardContent:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, odio?",
      backgroundImage:"",
      route:""

    }
  ]
  return (
    <section className={styles.serviceSection}>
      <div className={styles.headingWrapper}>
        <h6 className="text-[16px] font-semibold uppercase text-[#cda45e] ">What We Do</h6>
            <h2 className='text-[40px] font-semibold text-[#000] leading-[50px] mb-[25px]'>
              Our Event Service
            </h2>
      </div>
      <div className={styles.serviceWrapper}>
        {
          serviceCardData?.map((value)=>{
            return(
              <>
              <ServiceCard {...value} key={value?.id}/>
              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default ServiceSection
