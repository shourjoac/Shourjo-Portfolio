import { motion } from 'framer-motion'
import React from 'react'

// type Project = {
//     title: string;
//     description: string;
//     imageUrl: string;
// };

// type Props = {
//     projects: Project[]
// }

function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <div className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</div>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20
  scrollbar-thumb-[#F7AB0A]/80'>

                {/* {projects.map((project, index) => ( */}
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        {/* <motion.img
                            initial={{ opacity: 0, y: -300 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={project.imageUrl}
                            alt='Project Image'
                            //"https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" alt=""
                        /> */}
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>My Contacts ~<a href='https://github.com/shourjoac/MyContactsAppBackend' target='_blank' rel='noopener noreferrer'>Link</a></span>
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                            Designed and developed REST APIs to store a user’s contacts. Incorporated features such as user authentication and
                            registration, login API, password hashing (using bcrypt), sign-in JWT tokens, and protected routes to improve quality.
                            Leveraged Thunder-Client to systematically test the APIs and used express middleware and async handlers to deal with errors to ensure a smooth user-experience.
                            </p>
                        </div>
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>AITeekoPlayer ~<a href='https://github.com/shourjoac/Automated-AI-Game-Player' target='_blank' rel='noopener noreferrer'>Link</a></span>
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                            Developed an AI game player for Teeko by implementing a minimax algorithm with alpha-beta pruning to efficiently
                            search the game tree and predict the best move from any given position, ensuring optimal gameplay strategy.
                            Created an internal state representation of the game board and player positions and utilized a heuristic scoring function
                            to evaluate potential moves.
                            Ensured adherence to Teeko's gameplay rules, including the drop phase for initial marker placement and subsequent
                            move selections. Further, conducted rigorous testing to verify the AI's performance, ensuring that it consistently
                            selects moves within the five seconds and achieves a win rate of 85% against random opponents.
                            </p>
                            <p className='text-4xl font-semibold underline text-center'>
                                For more projects, check out my <a href='https://github.com/shourjoac/' target='_blank' rel='noopener noreferrer'><span className='text-[#F7AB0A]/50'>GITHUB</span></a>
                            </p>
                        </div>
                    </div>
                {/* ))} */}

            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
        </motion.div>
    )
}

export default Projects