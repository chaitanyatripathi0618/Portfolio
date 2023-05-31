import React from 'react';
import { motion } from 'framer-motion';
import { style } from '../../style';
import { ComputersCanvas } from './canvas';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/assets/space.json";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-0 top-[40px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${style.heroHeadText} text-white`}>Hi, I'm <span className='bg-gradient-to-r from-cyan-500 to-blue-500  inline-block text-transparent bg-clip-text'>Chaianya Tripathi</span></h1>
          <p className={`${style.heroSubText} mt-2 text-white-100`}>
          Passionate web developer with a strong foundation in front-end development  and a keen eye for design. Dedicated to creating engaging and user-friendly websites that deliver exceptional user experiences.
          </p>
          <div className='mt-10 ml-36'>
            <a href='MyCv.pdf' download="Chaitanya.pdf">
              <button className="relative px-16 py-3 font-bold text-white rounded-lg group sm:px-16 sm:py-3 ">
                <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-[#915eff] ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-blue-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                <span className="relative">Chaitanya's Resume</span>
              </button>
            </a>
          </div>
          <div className="absolute top-1/2 right-0 transform translate-y-1/2 ">
            <Lottie animationData={groovyWalkAnimation}  style={{ height: '450px', marginTop:'-240px' }} />
          </div>
        </div>
      </div>

      {/* <ComputersCanvas/> */}
      <div className='absolute xs:bottom-15 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px} h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
