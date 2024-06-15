import React from 'react'
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'; 
import {useForm} from "react-hook-form"

function ContactMe() {
    const {register, handleSubmit} = useForm()
    const onSubmit = (formData) => {
        window.location.href = `mailto:sachaudhuri@wisc.edu?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
             <div className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact me</div>
    
             <div className='flex flex-col space-y-10 '>
                <div className='text-3xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'> Always available for a chat :{") "}</span> 
                </div>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <div className='text-2xl'>+1 (608)-621-8644</div>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MailIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <div className='text-2xl'>sachaudhuri@wisc.edu</div>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <LocationMarkerIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                        <div className='text-2xl'>4 N Park Street, Madison, Wisconsin</div>
                    </div>
    
                </div>
                <form onSubmit={handleSubmit(onSubmit)}className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                    </div>
                    <input {...register('subject')} placeholder="Subject" className="contactInput"type="text" name="" id="" />
                    <textarea {...register('message')} placeholder="Message" className="contactInput"/>
                    <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
      )
}
export default ContactMe