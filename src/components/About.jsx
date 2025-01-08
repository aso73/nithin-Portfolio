import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import Abt from '../assets/abt.png'

const About = () => {

    const {ref, inView} = useInView({
        triggerOnce:true, 
        threshold:0.2
      })

  return (
    <div id="about" className='text-white py-8 cursor-default sm:mt-0'>
      <motion.div className='container mx-auto px-4'
       ref={ref}
       initial={{opacity:0, y:50}}
       animate={inView ? {opacity:1, y:0} : {}}
       transition={{delay:0.1, duration:0.3}}
      >
            <h2 
            className='text-3xl md:text-4xl font-bold mb-0 cursor-default justify-center items-center text-center'>About <span className='text-purple-400'>Me</span></h2>
            <br/>
            <motion.div className='px-16'
            ref={ref}
            initial={{opacity:0, y:50}}
            animate = {inView ? {opacity:1, y:0} : {opacity:0, y:50}}
            transition={{delay:0.3, duration:0.3}}
            >
              <p
              className='mb-5 text-gray-400 text-center'>
                  I am currently pursuing my degree in <b className='text-gray-300'>Computer Science and Engineering</b> with <b className='text-white'>Cyber Security</b> specilazition from <b className='text-gray-300'>Karpagam Academy of Higher Education Deemed to be university </b>.  I have worked on various software projects, focusing on <b className='text-gray-300'>web development</b> and <b className='text-gray-300'>Cyber Security</b> .
              </p>
            </motion.div>

            <div className='flex flex-col md:flex-row items-center '>
                <motion.div 
                ref={ref}
                initial={{opacity:0, x:-50}}
                animate={inView ? {opacity:1, x:0}:{}}
                transition={{delay:0.6, duration:0.3}}
                

                className='mb-0 md:md-0 md:mr-8 flex justify-center'>
                    <img
                        className='w-2/3 sm:1/2 md:w-10/12'
                        src={Abt}
                    />
                </motion.div>
                <motion.p 
                ref={ref}
                initial={{opacity:0, x:50}}
                animate={inView ? {opacity:1, x:0}:{}}
                transition={{delay:0.6, duration:0.3}}

                className='md:w-1/2 text-gray-300 px-4 md:px-0 text-base sm:text-lg md:text-xl justify-normal'>
                    I am a passionate and driven Junior Web Developer and Cyber Security enthusiast with hands-on experience in building impactful projects. <br/>  Additionally, I have expanded my expertise in Python, Kali linux, Nmap, Nessus, ZPhisher, Xerosploit ,TryHackMe and Linux Shell Scripting through various Learning platform. <br/>I am eager to bring my technical skills, creativity, and problem-solving abilities to real-world challenges and I am actively seeking internship opportunities to grow further in the fields of Cyber Security.</motion.p>
            </div>
        </motion.div>
    </div>
  )
}

export default About
