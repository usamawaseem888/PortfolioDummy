"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from 'axios';
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandLinkedin,
  IconBrandOnlyfans,
  IconBrandUnity,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { cn } from "@/app/lib/utils";



export function SignupFormDemo() {
    const [info,setInfo]=useState({
        fname:"",
        lname:"",
        email:"",
        msg:""
      })

      const getUser = (event,name) => {
        // console.log("Updated info:", name,event.target.value);
         setInfo(prevState => ({
           ...prevState,
           [name]: event.target.value,
         }));
       };

  const handleClick=()=>{
    
    console.log("handle click",info)
axios.post("https://portfolio-34b8e-default-rtdb.firebaseio.com/portfolio.json",info).then(res=>{
  console.log(res.data)
}).catch(error=>{console.log(error)})
  }


  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-8 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
      Send a Message
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
      Thank you for visiting my website, and please feel free to contact me.
      </p>

      <form className="my-8 gap-8 px-6" onSubmit={handleClick}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="First Name" type="text" value={info.fname} onChange={(event)=>{getUser(event,'fname')}} />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Last Name" type="text" value={info.lname} onChange={(event)=>{getUser(event,'lname')}} />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={info.email}   onChange={(event)=>{getUser(event,'email')}} />
        </LabelInputContainer>
        
        <LabelInputContainer className="mb-8">
          <Label htmlFor="textarea">Enter Message Heere</Label>
          <Input id="msg" placeholder="Message here" type="textarea" value={info.msg} onChange={(event)=>{getUser(event,'msg')}} />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          onSubmit={handleClick}
        >
          Send &rarr;
          <BottomGradient />
        </button>
        </form>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            onClick={()=>{window.open("https://github.com/usamawaseem888", "_blank" )}}
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            onClick={()=>{window.open("https://linkedin.com/in/usama-waseem-bbb27a279/", "_blank" )}}
          >
            <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Linkedin
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            onClick={()=>{window.open("https://play.unity.com/en/user/1bcac88f-91a5-4c21-bd77-c01faa1b4135", "_blank" )}}
          >
            <IconBrandUnity className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
             Unity
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            onClick={()=>{window.open("https://wa.me/+923244777090", "_blank" )}}
          >
            <IconBrandWhatsapp className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
             WhatsApp
            </span>
            <BottomGradient />
          </button>
        </div>
      
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
