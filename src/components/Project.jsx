import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const Project = () => {

    const {ref, inView} = useInView({
            triggerOnce:true, 
            threshold:0.2
    })

    const pro = [
        {
            id:1,
            title:"",
            description:"",
            image:"",
            link:""
        },
        {
            id:2,
            title:"",
            description:"",
            image:"",
            link:""
        },
        {
            id:3,
            title:"",
            description:"",
            image:"",
            link:""
        }
    ]

  return (
    <div id='project' className='py=12 mt-20 py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

      <motion.h2 
        ref={ref}
        initial={{opacity:0,y:50}}
        animate={inView?{opacity:1,y:0}:{}}
        transition={{delay:0.3, duration:0.5}}
        className='text-3xl md:text-4xl font-bold text-white text-center mb-12 cursor-default'>My <span className='text-purple-400'>Projects</span></motion.h2>

      </div>

      <motion.div 
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20 cursor-default'>
        {
          pro.map((pro) => (
            <motion.div 
            ref={ref}
            initial={{opacity:0,y:50}}
            animate={inView?{opacity:1,y:0}:{}}
            transition={{delay:pro.id*0.3, duration:0.5}}
            className='bg-gray-900 shadow-lg rounded-lg overflow-hidden'
            key={pro.id}>

              <img 
              className='w-full h-48 object-cover'
              src={pro.image}/>
              <div className='p-6'>

                <h3 className='text-xl text-white font-semibold mb-2'>{pro.title}</h3>
                <p
                className='text-slate-400 mb-4 '
                >{pro.description}</p> 

                <motion.a 
                href={pro.link} target='_blank' className=' border border-purple-400 text-purple-400 px-4 py-2 rounded-full hover:bg-purple-400 hover:text-black transition'>Details</motion.a> 
              </div>
            </motion.div>

          ))
        }
      </motion.div>
    </div>
  )
}

export default Project
