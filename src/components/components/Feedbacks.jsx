import React from 'react'
import { style } from "../../style";
import { testimonials } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper}  from "../../hoc";
import {motion} from 'framer-motion'

const FeedbackCard=({index,name,designation,testimonial,company,image})=>(
  <motion.div 
  variants={fadeIn("","spring", index*0.5,0.75)}
  className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
    
    <div className='mt-1'>
    <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
    <div className='mt-7 flex justify-between items-center gap-1'>
      <div className='flex-1 flex flex-wrap'>
        <p className='text-white font-medium text-[16px]'>
          <span className='blue-text-gradient'>@</span>{name}
        </p>

      </div>
    </div>

    </div>
  </motion.div>
)
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${style.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${style.heroSubText}`}>
            Whats makes me different from others
          </p>
          <h3 className={`${style.heroHeadText}`}>Certifications</h3>
        </motion.div> 
      </div>
      <div className={`${style.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {
          testimonials.map((testimonial,index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial}/>
          ))
        }

      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "feedbacks");