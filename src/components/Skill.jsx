import { motion } from 'framer-motion'
import React from 'react'

function Skill({directionLeft, imageUrl, proficiency}) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img 
            initial={{
                x: directionLeft ? -200: 200,
                opacity : 0
            }}
            transition={{duration: 1}}
            whileInView={{opacity:1, x:0}}
            src={imageUrl}
            alt='Skill Icon'
            className='rounded-full border bg-yellow-500 border-yellow-500 object-cover w-24 h-24 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <div className='absolute opacity-0 hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-24 w-24 md:w-28 xl:w-32 xl:h-32 rounded-full z-0' >
                <div className='flex items-center justify-center h-full' >
                    <div className='text-3xl font-bold text-black opacity-100'>{proficiency}</div>
                </div>
            </div>
        </div>
     )
}

export default Skill