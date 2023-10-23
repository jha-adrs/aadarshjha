import { useState } from 'react'
import './App.css'
import {  GithubIcon, LinkedinIcon, Mail } from 'lucide-react'
function App() {

  return (
    <>
      <div className="flex flex-col inset-0 w-full h-full bg-transparent text-white">
        <h1 className='font-bold m-4'>
          Hi 👋
        </h1>
        <h2 className='font-bold'>
          I&apos;m Aadarsh
        </h2>
        <h4 className=" m-3">
          This website is currently under construction...
        </h4>
        <div className=" bg-transparent flex flex-row justify-center m-4">
          <a href="https://github.com/jha-adrs" target="_blank" rel="noopener noreferrer" className="flex items-center text-black p-2  border-black hover:bg-gray-700 rounded-lg">
            <GithubIcon color='white' size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jha-aadarsh" target="_blank" rel="noopener noreferrer" className="flex items-center text-black p-2  border-black hover:bg-gray-700 rounded-lg">
            <LinkedinIcon color='white' size={24} />
          </a>
          <a href="mailto:aadarshjha6783@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-black p-2  border-black hover:bg-gray-700 rounded-lg">
          <Mail color='white' size={24} />
          </a>

        </div>
      </div>
    </>
  )
}

export default App
