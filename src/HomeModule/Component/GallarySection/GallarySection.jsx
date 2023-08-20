'use client';
import React, { useEffect, useState } from 'react';
import styles from "./gallarySection.module.css";
import Image from 'next/image';
import { GrFormClose } from 'react-icons/gr';
import { BiChevronLeftCircle,BiChevronRightCircle } from "react-icons/bi"
import LightBox from './LightBox/LightBox';

const GallarySection = () => {
    const [currentIndex,setCurrentIndex]=useState(0)

    const images = [
        {
            id:"1",
            img:"https://images.unsplash.com/photo-1689702095156-135bdeb260e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=793&q=80"
        },
        {
            id:"2",
            img:"https://images.unsplash.com/photo-1689363302902-2c58330d6494?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        },
        {
            id:"3",
            img:"https://images.unsplash.com/photo-1689361318708-4d242b4c4987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"
        },
        {
            id:"4",
            img:"https://images.unsplash.com/photo-1689361319238-d7fc396077e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1445&q=80"
        },
        {
            id:"5",
            img:"https://images.unsplash.com/photo-1689702095156-135bdeb260e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=793&q=80"
        },
        {
            id:"6",
            img:"https://images.unsplash.com/photo-1689361319238-d7fc396077e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1445&q=80"
        },
        {
            id:"7",
            img:"https://images.unsplash.com/photo-1689361319907-a7c75f63600b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        },
        {
            id:"8",
            img:"https://images.unsplash.com/photo-1689600242990-25189446fd24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
        },
    ]
    const getValue = (item) =>{
        setCurrentIndex(item);
        setLightBox(true);
        console.log(item)
    }
    const[lightBox,setLightBox] = useState(false);
     const nextBtn = () =>{
      setCurrentIndex((oldPerson)=>{
        const result = (oldPerson + 1) % images.length;
        return result
      })
    }
      const prevBtn = () =>{
      setCurrentIndex((oldPerson)=>{
        const result = (oldPerson - 1 + images.length) % images.length;
        return result
      })
    }
  
  return (
    <>
      <section className={styles.gallaryWrapper}>
        <div className={styles.headingWrapper}>
        <p className="text-[16px] font-semibold uppercase text-[#cda45e] text-center">Portfolio</p>
            <h2 className='text-[40px] font-semibold text-[#000] leading-[50px] mb-[25px] text-center'>
              Our Latest Events
            </h2>
             <div className={styles.mainDiv}>
        {
            images?.map((value,index)=>{
                return(
                    <>
                    <div className={styles.mainImage} key={value?.id} onClick={()=>getValue(index)} >
                        <Image src={value?.img} alt='12' fill={"fill"}/>
                    </div>
                    </>
                )
            })
        }
      </div>
      {
        lightBox &&  <LightBox lightBox={lightBox}>
          <div className={styles.lightImage}>
        <div className={styles.lightImageWrapper}>
        <Image src={images[currentIndex].img} width={500} height={500}/>
        </div>
        </div>
        <div className={styles.closeIcon} onClick={()=>{setLightBox(false)}}>
            <GrFormClose />

        </div>
        <div className={styles.leftArrow} onClick={prevBtn}>
            <BiChevronLeftCircle />
        </div>
        <div className={styles.rightArrow} onClick={nextBtn}>
            <BiChevronRightCircle />
        </div>
          </LightBox>
      }

     
      </div>
      </section>
    </>
  )
}

export default GallarySection
