import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

function Header() {
    const openResume = () => {
        window.open('/Shourjo_Resume.pdf');
    };
    return (
        <div className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-row items-center"
            >
                {/* Social Icons */} 
                <SocialIcon
                    url="https://twitter.com/shourjoac"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://instagram.com/shourjoac"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url="https://github.com/shourjoac"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </motion.div>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className='flex flex-row items-center uppercase font-semibold underline text-1xl text-[#F7AB0A]/40 cursor-pointer'
                >
                <button className='heroButton' onClick={openResume}>Resume</button>
               
                </motion.div>
        </div>
    );
}

export default Header;
