"use client";
import React from 'react';
import { SignupFormDemo } from './ui/signupfrodemo';
import GlobeOnly from './ui/feature-section';


function Contact() {
    return (
        <div className='mt-40'>
            <div className="flex flex-col items-center mt-30">
        <h1 className="text-4xl font-semibold text-black dark:text-white">
         <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Say hello
              </span>
            </h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
        <SignupFormDemo/>
        </div>
        <div className='pr-20' >
           <GlobeOnly/>
        </div>

    </div>
          
           


        </div>
      
    );
}

export default Contact;
