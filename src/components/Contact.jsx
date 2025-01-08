import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { FaPhone, FaEnvelope,} from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {

    const {ref, inView} = useInView({
        triggerOnce:true, 
        threshold:0.2
    })

  return (
    <div id="contact" className=' mb-20 px-5 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
        <motion.h2
        ref={ref}
        initial={{opacity:0,y:-100}}
        animate={inView?{opacity:1,y:0}:{}}
        transition={{delay:0.3, duration:0.5}}

        className='text-4xl font-bold text-white'
        >Contact <span
        className='text-purple-400'
        >Me</span> </motion.h2>
      </div>

      <div className=''>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-default'>

          <motion.div 
          ref={ref}
          initial={{opacity:0,x:-50}}
          animate={inView?{opacity:1,x:0}:{}}
          transition={{delay:0.2, duration:0.5}}

          className='flex items-center space-x-4'>
            <div className='bg-purple-400 p-2 rounded-full'>
              <a href="tel:9994529507">
                <FaWhatsapp className='text-white w-10 h-10 hover:text-green-400'/> 
              </a>
            </div>
            <div>
              <p className='text-lg font-medium text-purple-400 hover:text-green-400'>Call Me / Whatsapp</p>
              <a href="tel:9994529507">
                <p className='text-white hover:text-green-400'>+91 9994529507</p>
              </a>
            
            </div>
          </motion.div>

          <motion.div 
          ref={ref}
          initial={{opacity:0,x:-50}}
          animate={inView?{opacity:1,x:0}:{}}
          transition={{delay:0.4, duration:0.5}}
          className='flex items-center space-x-4'>
            <div className='bg-purple-400 p-4 rounded-full'>
              <a href='mailto: nithinraja.cy@gmail.com' target='_blank'> <FaEnvelope className='text-white w-6 h-6 hover:text-blue-400'/> </a>
            </div>
            <div>
              <p className='text-lg font-medium text-purple-400 hover:text-blue-500'>Email</p>
              <a href='mailto:nithinraja.cy@gmail.com' target='_blank'> <p className='text-white hover:text-blue-400'>nithinraja.cy@gmail.com</p> </a>
            </div>
          </motion.div>

          <motion.div 
          ref={ref}
          initial={{opacity:0,x:-50}}
          animate={inView?{opacity:1,x:0}:{}}
          transition={{delay:0.4, duration:0.5}}
          className='flex items-center space-x-4'>
            <div className='bg-purple-400 rounded-full p-2'>
              <a href='https://www.linkedin.com/in/nithin-raja-a88010291/' target='_blank'> <FaLinkedin className='text-white hover:text-blue-600 w-10 h-10'/>  </a>
            </div>
            <div>
             <a href='https://www.linkedin.com/in/nithin-raja-a88010291/' target='_blank'> 
             <p className='text-lg font-medium text-purple-400 hover:text-blue-600'>LinkedIn</p> 
             <p className='text-white hover:text-blue-600'>https://www.linkedin.com/in/nithin-raja-a88010291/</p>
             </a>

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Contact
