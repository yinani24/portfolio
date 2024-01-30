import { FiSend } from "react-icons/fi";

export default function ContactForm(){
    return(
        <div className='flex flex-col items-center justify-center mt-10'>
            <form className='flex flex-col items-start justify-center border border-[#7B4AE280] rounded-2xl p-5'>
                <label className='text-[#7B4AE2] font-Raleway text-lg font-bold mb-4 mt-2'>Email</label>
                <input className='w-96 h-12 rounded-xl p-4 mb-4 text-[rgba(255, 255, 255, 0.5)] font-Raleway' type='email' placeholder='alan.turing@example.com'/>
                <label className='text-[#7B4AE2] font-Raleway font-bold text-lg mb-4'>Subject</label>
                <input className='w-96 h-12 rounded-xl p-4 mb-4 text-[rgba(255, 255, 255, 0.5)] font-Raleway' type='text' placeholder={`Let's build a company together`}/>
                <label className='text-[#7B4AE2] font-Raleway font-bold text-lg mb-4'>Message</label>
                <textarea className='w-96 h-36 rounded-xl p-4 mb-4 text-[rgba(255, 255, 255, 0.5)] font-Raleway' 
                    placeholder={`Hey Yash,\nI love your website...`}/>
                <div className="flex w-96 h-12 items-center justify-center text-white">
                    <button className='w-96 h-12 rounded-xl mb-4 bg-[#7B4AE2] text-white text-Raleway font-bold text-center'>Send</button>
                    <FiSend className='w-full relative ml-8'/>
                </div>
            </form>
        </div>
    )
}