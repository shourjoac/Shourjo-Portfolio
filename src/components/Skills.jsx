import { motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'



function Skills({skills}) {
    return (
        <motion.div 
        initial={{opacity:0}}
        transition={{duration: 1.5}}
        whileInView={{opacity:1}}
        className='flex relative flex-col text-center md:text-left xl:flex-row-max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <div className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</div>
        <div className='absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over for <span className='underline decoration-[#F7AB0A]/50'>proficiency (%)</span></div>
        <div className='grid grid-cols-5 md:grid-cols-6 gap-1'>
            {Array.isArray(skills) ? skills.map((skill) => (
              <Skill 
                key={skill.id} 
                directionLeft={Math.random() < 0.5} 
                imageUrl={skill.imageUrl} 
                proficiency={skill.proficiency} 
              />
            )): <p>No skills available</p>}
        </div>
        
        
        </motion.div >
      )
}

export default Skills