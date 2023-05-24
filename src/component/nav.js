import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
   
    const navigate=useNavigate()

    const Home=()=>{
      navigate("/")
    }
    const About=()=>{
      navigate("/about")
    }
    const Work=()=>{
      navigate("/work")
    }
    const Contact=()=>{
      navigate("/contact")
    }

    let [open,setOpen]=useState(false);

  
  return (



    <div className='shadow-md shadow-gray-400 w-full z-10 sticky top-0 left-0'>
      <div className='md:flex items-center justify-around bg-black py-4 md:px-10 px-7'>
        <div onClick={Home} className={`text-4xl font-bold cursor-pointer flex items-center font-[Poppins] text-white `}>
          Rana Azhar
        </div>
      
      <div onClick={()=>setOpen(!open)} className=' text-white  text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <span></span><ion-icon  name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:justify-center bg-black text-center md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14 ':'top-[-490px]'}`}>
        <li className="mx-5 my-6 md:my-0">
            <h1 className="text-gray-400 text-xl hover:text-white duration-500 cursor-pointer" onClick={Home}>Home</h1>
        </li>
        <li className="mx-3 my-6 md:my-0">
            <h1 className="text-gray-400 text-xl hover:text-white duration-500 cursor-pointer" onClick={About}>About</h1>
        </li>
        <li className="mx-4 my-6 md:my-0">
            <h1 className="text-gray-400 text-xl hover:text-white duration-500 cursor-pointer" onClick={Work}>Work</h1>
        </li>
        <li className="mx-4 my-6 md:my-0">
            <h1 className="text-gray-400 text-xl hover:text-white duration-500 cursor-pointer" onClick={Contact}>Contact</h1>
        </li>
        
      </ul>

      <button onClick={Contact}  className={`md:flex md:justify-center md:items-center w-full absolute md:static md:z-auto z-[-1] left-0 font-extrabold text-lg bg-gray-700 font-[Poppins]  px-7 py-2   text-white hover:text-black hover:bg-white rounded-2xl md:w-auto text-center transition-all duration-500 ease-in ${open ? 'top-72':'top-[-890px]'}`}>
            Let's Talk
      </button>

        </div>
    </div>
  )
}

export default Nav