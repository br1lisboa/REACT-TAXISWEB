import React from 'react'

import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>

        <img src={discount} alt="descuentos" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'> 5% </span>
          off por {" "}
          <span className='text-white'> viajes por </span>
          plataforma
        </p>

      </div>
      <div className='flex flex-row justify-between items-center w-full'>

        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          La nueva de <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>GENERACION</span> {" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>de Viajes Seguros.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus aperiam consectetur earum pariatur repellat praesentium. Magnam asperiores, numquam culpa tempore earum distinctio rerum fugiat, nulla sequi eaque architecto odio!</p>
    </div>
  </section>
)

export default Hero