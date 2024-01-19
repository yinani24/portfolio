export default function About() {
    return (
      <section id='about' className='flex flex-row h-screen'>
        <div className='flex flex-col w-1/2'>
          <h1 className='text-white font-raleway text-5xl font-bold'>About Me</h1>
          <p className='text-white font-raleway text-lg mt-4'>I am a second year Computer Science student at the University of Waterloo. I am passionate about full stack development and have experience working with React, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL. I am a quick learner and am always looking to learn new technologies.</p>
          <p className='text-white font-raleway text-lg mt-4'>I am currently looking for a Winter 2022 internship. Feel free to reach out to me if you have any opportunities or if you just want to chat!</p>
        </div>
        <div className='flex flex-col w-1/2'>
          <h1 className='text-white font-raleway text-5xl font-bold'>Education</h1>
          <div className='flex flex-col'>
            <h1 className='text-white font-raleway text-lg mt-4'>University of Waterloo</h1>
            <p className='text-white font-raleway text-lg mt-1'>Candidate for Bachelor of Computer Science</p>
            <p className='text-white font-raleway text-lg mt-1'>September 2020 - April 2025</p>
          </div>
          <div className='flex flex-col'>
            <h1 className='text-white font-raleway text-lg mt-4'>University of Waterloo</h1>
            <p className='text-white font-raleway text-lg mt-1'>Candidate for Bachelor of Mathematics</p>
            <p className='text-white font-raleway text-lg mt-1'>September 2020 - April 2025</p>
          </div>
        </div>
      </section>
    )
  }