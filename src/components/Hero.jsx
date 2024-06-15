import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCirles from './BackgroundCircles'
//import { Link } from 'react-router-dom';


function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Shourjo Aditya Chaudhuri",
            "Junior @UW-Madison.",
            "Tech & Sports"
        ],
        loop: true,
        delaySpeed: 2000
    })

  return (
        <div className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
            <BackgroundCirles />
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://media.licdn.com/dms/image/D5603AQGeYyJ9A1_TUQ/profile-displayphoto-shrink_800_800/0/1699607717009?e=1723680000&v=beta&t=WTe26siAh7YZIo_d7wOfjnEPcrB8jnvf-hiuQng0YCE" alt="None" />
            <div className='z-20'>
                <div className='text-sm uppercase text-gray-500 pb-4 tracking-[15px]'>
                    Software Engineer
                </div>
                <div className='text-5xl lg:text-5xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor="F7AB0A" />
                </div>
                {/* <div className='pt-5'>
                <button className='heroButton' onClick={() => navigateTo('/about')}>About</button>
                    <button className='heroButton' onClick={() => navigateTo('/experience')}>Experience</button>
                    <button className='heroButton' onClick={() => navigateTo('/skills')}>Skills</button>
                    <button className='heroButton' onClick={() => navigateTo('/projects')}>Projects</button>
                </div> */}
            </div>
        </div>
    )
}

export default Hero


    
    