"use client";

import React from "react";
import { FiSend } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

export default function ContactForm(){
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data = {
          email: e.target.senderEmail.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        console.log(response);

        if (response.status === 200) {
            console.log("Message sent.");
            toast.success("Message sent successfully!");
        }else {
            console.log("Message failed to send.");
            toast.error("Message failed to send.");
        }
        e.target.reset()
    };

    return(
        <motion.div className='flex flex-col items-center justify-center mt-10'>
            <motion.form 
                initial={{opacity: 0, x: -300}}
                whileInView={{opacity: 1, x: 0, transition: {ease: 'easeInOut', duration: 0.5, delay:0.2, type: 'tween', damping: 300, stiffness: 100}}}
                viewport={{ once: true, amount: 0.5 }}
                onSubmit={handleSubmit} className='flex flex-col items-start justify-center border shadow-xl shadow-[#7B4AE280] border-[#7B4AE280] rounded-2xl p-5'>
                <label className='text-[#7B4AE2] font-Raleway text-lg font-bold mb-4 mt-2'>Email *</label>
                <input required name="senderEmail" className='w-96 h-12 rounded-xl p-4 mb-4 text-[rgba(255, 255, 255, 0.5)] font-Raleway' type='email' placeholder="alan.turing@example.com"/>
                <label className='text-[#7B4AE2] font-Raleway font-bold text-lg mb-4'>Subject *</label>
                <input required name="subject" className='w-96 h-12 rounded-xl p-4 mb-4 text-[rgba(255, 255, 255, 0.5)] font-Raleway' type='text' placeholder='Let&apos;s build a company together'/>
                <label className='text-[#7B4AE2] font-Raleway font-bold text-lg mb-4'>Message *</label>
                <textarea name='message' maxLength={5000} required className='w-96 h-36 rounded-xl p-4 mb-4 text-[rgba(255, 255, 255, 0.5)] font-Raleway' 
                    placeholder={"Hey Yash,\nI love your website..."}/>
                <motion.button 
                    type="submit"
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.9}}
                    className='w-96 group text-base flex justify-center outline-none items-center gap-1 h-12 rounded-xl bg-[#7B4AE2] mb-4 text-white text-Raleway font-bold text-center hover:scale-105 transition-all'>
                    <motion.p className='text-s'>Send</motion.p>
                    <FiSend className='rotate-3 text-s'/>
                </motion.button>
            </motion.form>
        </motion.div>
    )
}