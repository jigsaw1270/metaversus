'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

import { staggerContainer , fadeIn  } from '../utils/motion';
import {  TitleText, TypingText } from '../components';
 import  {  newFeatures } from '../constants';



const World = () => (
<section className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView = "show"
  viewport={{once : 'false' , amount : 0.25}}
  className={`${styles.innerWidth} mx-auto flex flex-col`}>
    <TypingText title={ "| People on the world "} textStyles="text-center" />
    <TitleText title=<>Track your friends around you and invite them to play together in the same world</>
    textStyles="text-center" />
    <motion.div 
    variants={fadeIn('up', 'tween', 0.3 , 1)}
    className='relative mt-[68px] flex w-full h-[550px]'>
    <img src="/map.png" alt="map"
    className='object-cover w-full h-full' />

    <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>

    <img src="people-01.png" alt="people" className='w-full h-full' />

    </div>
    <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>

    <img src="people-02.png" alt="people" className='w-full h-full' />

    </div>
    <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>

    <img src="people-03.png" alt="people" className='w-full h-full' />

    </div>
    <div className='absolute bottom-20 left-[150px] w-[196px] h-[150px] p-[6px] rounded-lg bg-[#5d6680]'>

    <img src="moja (1).png" alt="people" className='w-full h-full' />
    <p className='absolute bottom-0 py-5 text-lg font-bold text-white'>Upside down</p>

    </div>
    <div className='absolute top-20 right-[150px] w-[196px] h-[150px] p-[6px] rounded-lg bg-[#5d6680]'>

    <img src="moja (2).png" alt="people" className='w-full h-full' />
    <p className='absolute bottom-0 py-5 text-lg font-bold text-white'>Hawkins Labs</p>

    </div>

    </motion.div>
  </motion.div>
  </section>
);

export default World;
