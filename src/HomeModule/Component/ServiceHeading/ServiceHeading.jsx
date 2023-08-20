import React from 'react';
import styles from "./serviceHeading.module.css"
import Link from 'next/link';

const ServiceHeading = () => {
    const data =[
        {
            id:1,
            route:"/",
            listName:"Product Launch"
        },
        {
            id:2,
            route:"/",
            listName:"Gala Dinner"
        },
        {
            id:3,
            route:"/",
            listName:"Live Shows"
        },
        {
            id:4,
            route:"/",
            listName:"Fashion Shows"
        },
        {
            id:5,
            route:"/",
            listName:"Theme Party"
        },
        {
            id:6,
            route:"/",
            listName:"Dealers Meet"
        },
        {
            id:7,
            route:"/",
            listName:"Annual Events"
        },
        {
            id:8,
            route:"/",
            listName:"Seminar & Conferences"
        },
           {
            id:1,
            route:"/",
            listName:"Product Launch"
        },
        {
            id:2,
            route:"/",
            listName:"Gala Dinner"
        },
        {
            id:3,
            route:"/",
            listName:"Live Shows"
        },
        {
            id:4,
            route:"/",
            listName:"Fashion Shows"
        },
        {
            id:5,
            route:"/",
            listName:"Theme Party"
        },
        {
            id:6,
            route:"/",
            listName:"Dealers Meet"
        },
        {
            id:7,
            route:"/",
            listName:"Annual Events"
        },
        {
            id:8,
            route:"/",
            listName:"Seminar & Conferences"
        },
    ]
  return (
    <section className={styles.serviceWrapper}>
      <ul className={styles.serviceList}>
        {
            data?.map((value)=>{
                return(
                    <>
                        <li className={styles.listItem} key={value?.id}>
                            <Link href={value?.route}>
                                    {value?.listName}
                            </Link>
                        </li>
                    </>
                )
            })
        }
        
      </ul>
        

    </section>
  )
}

export default ServiceHeading
