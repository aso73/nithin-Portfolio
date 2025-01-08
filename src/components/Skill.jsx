import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { TbDeviceDesktopSearch } from "react-icons/tb";
import { TfiLinux } from "react-icons/tfi";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { BsBugFill } from "react-icons/bs";
import { FaKeycdn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Skill = () => {

    const {ref, inView} = useInView({
        triggerOnce:true, 
        threshold:0.2
    })

  return (
    <div id='skill' className='text-white py-10'>
        <motion.div
        ref={ref}
        initial={{opacity:0, y:50}}
        animate={inView ? {opacity:1, y:0}:{}}
        transition={{duration:0.5}}
        className='containter mx-auto px-4 text-center'
        >
            <h2 className='text-3xl md:text-4xl font-bold mb-20 '>My <span className='text-purple-400'>Skills</span> </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-default'>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:0.3}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-400 transition-shadow duration-300'
            >
                <TbWorld  className='text-purple-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>Networks</h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'>Networking Enthusiast with a keen interest in exploring and staying updated on the latest technological trends.</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:0.9}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-400 transition-shadow duration-300'
            >

                <BsBugFill  className='text-purple-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>Bug Bounty</h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'>Bug Bounty Specialist with expertise in identifying and reporting security vulnerabilities.</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:1.2}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-400 transition-shadow duration-300'
            >

                <TbDeviceDesktopSearch  className='text-purple-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'> Penetration testing </h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'> Penetration Tester with a strong background in identifying vulnerabilities and enhancing cybersecurity defenses..</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:1.5}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-400 transition-shadow duration-300'
            >

                <TfiLinux  className='text-purple-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>Linux Shell Scripting</h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'>Linux Shell Scripter with experience in automating tasks, managing system configurations, and streamlining workflows..</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:1.8}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-400 transition-shadow duration-300'
            >

                <MdOutlineScreenSearchDesktop  className='text-purple-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>Digital Forensics</h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'>Digital Forensics Specialist with expertise in investigating and analyzing digital evidence to uncover cybercrimes and security breaches.</p>
            </motion.div>

            <motion.div
            ref={ref}
            initial={{opacity:0, scale:0.8}}
            animate={inView ? {opacity:1, scale:1}:{opacity:0, scale:0.8}}
            transition={{duration:0.5, delay:2.1}}
            className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-400 transition-shadow duration-300'
            >

                <FaKeycdn  className='text-purple-400 text-4xl sm:text:5xl lg:text-6xl mb-4 mx-auto'/>
                <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>Cryptography </h3>
                <p className='text-sm sm:text-base lg:text-lg text-gray-400'>Cryptography Specialist with expertise in securing communications, data protection, and developing encryption protocols.</p>
            </motion.div>

            </div>

        </motion.div>
    </div>
  )
}

export default Skill
