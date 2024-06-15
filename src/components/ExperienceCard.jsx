import { motion } from 'framer-motion'
import React from 'react'



function ExperienceCard({ jobTitle, companyName, technologies, startDate, endDate, description, imageSrc }) {
    console.log('technologies:', technologies);
    console.log('description:', description);
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[200px] md:w-[400px] xl:w-[600px]  xl:h-[580px] snap-center bg-[#363631] p-1 hover:opacity-100
        opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img 
             initial={{opacity:0, y:-100}}
             transition={{duration: 1.2}}
             whileInView={{opacity:1,y:0}}
             viewport={{once: true}}
            className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={imageSrc}
            alt={companyName}
            />
            <div className='px-0 md:px-5 py-2 md:py-5'>
                <div className='text-3xl font-semibold'>{jobTitle}</div>
                <div className='font-semibold text-2xl mt-1'>{companyName}</div>
                <div className='flex space-x-2 my-2'>
                        {(technologies && technologies.length > 0) ? (
                        technologies.map((tech) => (
                            <img 
                                key={tech.id}
                                className='h-10 w-10 rounded-full'
                                src={tech.imageUrl}
                                alt={tech.name}
                            />
                        ))
                         ) : (
                        <div>Machine Learning and Software Security</div>
                         )}
                </div>
                <div className='uppercase pt-1 pb-3 text-gray-300'>
                    {startDate} - {endDate}
                </div>
                <ul className='list-disc space-y-2 ml-5 text-lg max-h-48 overflow-y-auto pr-2 pb-10'>
                    {(description && description.length > 0) ? (
                        description.map((desc, index) => (
                            <li key={index}>{index+1}. {desc}</li>
                        ))
                    ) : (
                        <li>No description provided</li>
                    )}
                </ul>
            </div>
        </article>
      )
}

export default ExperienceCard