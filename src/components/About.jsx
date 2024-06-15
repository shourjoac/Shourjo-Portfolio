import { motion } from 'framer-motion'
import React from 'react'

function About() {
    return (
    
        <motion.div
        initial={{opacity:0}}
        transition={{duration: 1.5}}
        whileInView={{opacity:1}}
         className='flex flex-col relative h-screen text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center'>
         <div className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>About</div>
         <motion.img
         initial={{opacity:0, x:-200}}
         transition={{duration: 1.2}}
         whileInView={{opacity:1,x:0}}
         viewport={{once: true}}
         src="https://c1.wallpaperflare.com/preview/419/860/918/madison-wisconsin-university-of-wisconsin-camp-randall-stadium.jpg"
         className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover pr-5 md:rounded-lg md:w-64
         md:h-95 xl:w-[500px] xl:h-[500px]'
         />
         <div className='space-y-10 px-0 md:px-5 '>
            <div className="text-3xl font-semibold">Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background about <span className='underline decoration-[#F7AB0A]/50'>me!</span> </div>
            <ul className="custom-list">
                <li>Undergraduate student actively looking for a summer internship(willing to relocate temporarily).</li>
                <li>Hello, I am a junior at UW-Madison double majoring in Computer Science and Data Science having a 4.0 GPA.</li>
                <li>Currently, I am interning at Cogoport as a Backend Engineering Intern.</li>
                <li>Prior to this, I have completed two internships wherein I have worked in dynamic teams working on both the backend and the frontend.</li>
                <li>I am a motivated individual who is always willing to learn and contribute as part of a team.</li>
                <li>Further, I am a huge Arsenal fan and love everything about soccer and cricket.</li>
            </ul>
         </div>
        </motion.div>
      )
}

export default About