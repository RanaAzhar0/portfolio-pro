import React from 'react';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import img1 from "../images/me.png"
import img3 from "../images/sign.png"
import img4 from "../images/wine-shope.jpg"
import img5 from "../images/icon2.png"
import Aos from "aos";
import {TbBrandTailwind} from "react-icons/tb"
import {BsFillBootstrapFill} from "react-icons/bs"
import TypeWriterEffect from 'react-typewriter-effect'
import { useNavigate } from 'react-router-dom';
import {BiLogOutCircle} from "react-icons/bi"



function Hero() {

  const navigate=useNavigate()

  const Work=()=>{
    navigate("/work")
  }
  const About=()=>{
    navigate("/about")
  }

  const Contact=()=>{
    navigate("/contact")
  }

  const Service=()=>{
    navigate("/service")
  }
    useEffect(()=> {
        Aos.init({duration:2000});
    },[]);


    return(
        <>
            <div className="w-full bg-black pt-14 pb-14 flex justify-center items-center">
              <div className=' md:w-[88%] h-[100%] flex flex-wrap justify-center  md:flex md:justify-between'> 
                <div data-aos="zoom-in" onClick={About} className="spain1 cursor-pointer md:flex md:flex-row md:justify-between  flex flex-col items-center bg-[#1E1E1E] w-[55%] md:w-[48%] text-white md:h-[45vh] p-5 rounded-3xl   ">
                    <div className="spain h-[100%] w-[100%] md:w-[53%] rounded-br-[8vw]  rounded-tl-[8vw]">
                      <img src={img1} className=" h-[100%] w-[100%] rounded-br-[8vw]  rounded-tl-[8vw]  " />
                    </div>
                    <div className="flex flex-col md:w-[42%] h-[80%] w-[100%]">
                        <h1 className="w-full text-[14px] text-gray-400 sm:w-full pt-2">A WEB DESIGNER</h1>
                        <h1 className="font-bold text-2xl pt-2">Mr <br/> Azhar.</h1>    
                        <h1 className="w-full text-[14px] pt-2 text-gray-400 sm:w-full ">I am a Web Designer based in san francisco.</h1>
                        <div className='icon flex justify-end'>
                          <BiLogOutCircle className='img text-4xl duration-200 text-gray-400'/>
                        </div>
                    </div>
                </div>
                <div className=" w-[100%] md:w-[45%] md:h-[30vh] mt-5 h-[15vh]  text-white flex flex-col justify-evenly  items-center ">
                    <h1 className=' text-gray-400 font-serif'>HI, I'M A FREELANCER</h1>
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: 'white',
                        fontWeight:1000 ,
                        fontSize: '2em',
                        //md:fontSize:'',

                      }}
                      startDelay={1000}
                      cursorColor="white"
                      multiText={[
                        'FRONTEND-DEVELOP',
                        'WEB-DESIGNER',
                        'WEB-DEVELOPER',
                      ]}
                      loop="100"
                      nextTextDelay={1000}
                      typeSpeed={80}
                    />
                </div>
                <div data-aos="zoom-in" onClick={About} className="spain1 cursor-pointer mt-4 md:flex md:justify-between shadow-gray-300  flex flex-col justify-between  bg-[#1E1E1E] md:h-[35vh] h-[40vh] md:w-[26%] w-[55%] text-white p-5 rounded-3xl">
                    <div className="md:h-[60%] h-[80%] w-full flex justify-center">
                      <img src={img3} className=" h-[100%] w-[80%]   " />
                    </div>
                    <div className="flex flex-col justify-evenly md:w-[100%] h-[40%] w-[100%]">
                        <h1 className="text-[14px] text-gray-400 pt-4 ">MORE ABOUT ME</h1>
                        <div className='flex justify-between'>
                        <h1 className="font-bold text-2xl ">Credentials</h1>  
                          <BiLogOutCircle className='img text-4xl duration-200 text-gray-400'/>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" onClick={Service}  className="spain1 cursor-pointer mt-4 md:flex md:justify-between   flex flex-col justify-between  bg-[#1E1E1E] md:h-[35vh] h-[45vh] md:w-[45%] w-[80%] text-white p-5 rounded-3xl">
                    <div className="md:h-[60%] h-[70%]  w-full flex justify-around items-center text-5xl ">
                      <ion-icon name="logo-html5"></ion-icon>
                      <ion-icon name="logo-css3"></ion-icon>
                      <ion-icon name="logo-nodejs"></ion-icon>
                      <TbBrandTailwind/>
                      <BsFillBootstrapFill/>
                    </div>
                    <div className="flex flex-col justify-evenly  md:w-[100%] h-[40%] w-[100%]">
                        <h1 className="text-[14px] text-gray-400 pt-4 ">SPECIALIZATION</h1>
                        <div className='flex justify-between'>
                          <h1 className="font-bold text-2xl ">Services Offering</h1>
                            <BiLogOutCircle className='img text-4xl duration-200 text-gray-400'/>
                        </div>  
                    </div>
                </div>
                <div data-aos="zoom-in" onClick={Work} className="spain1 cursor-pointer mt-4 md:flex md:justify-between   flex flex-col justify-between  bg-[#1E1E1E] md:h-[35vh] h-[45vh] md:w-[25%] w-[55%] text-white p-5 rounded-3xl">
                    <div className="md:h-[60%] h-[80%] w-full flex justify-center">
                      <img src={img4} className=" h-[100%] w-[100%]   " />
                    </div>
                    <div className="flex flex-col justify-evenly md:w-[100%] h-[40%] w-[100%]">
                        <h1 className=" text-[14px] text-gray-400 pt-4 ">SHOWCASE</h1>
                        <div className='flex justify-between'>
                          <h1 className="font-bold text-2xl ">Projects</h1>
                            <BiLogOutCircle className='img text-4xl duration-200 text-gray-400'/>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in"  className="spain1 mt-4 md:flex md:justify-between   flex flex-col justify-between   md:h-[35vh] h-[100%] md:w-[100%] w-[80%] lg:w-[49%]  text-white p-5 rounded-3xl">
                    <div className="md:h-[100%] h-[100%] w-full flex justify-around items-center  ">
                      <div className='spain11 h-[100%]  flex flex-col justify-center items-center w-[80%] md:w-[30%] rounded-3xl'>
                        <h1 className='text-white text-lg md:text-5xl'>1.5</h1>
                        <h1 className=' text-gray-400 text-sm mt-3'>YEARS EXPERIENCE</h1>
                      </div>
                      <div className='spain11 h-[100%]  flex flex-col justify-center items-center w-[80%] md:w-[30%] rounded-3xl'>
                        <h1 className='text-white text-md md:text-5xl'>+15</h1>
                        <h1 className=' text-gray-400 text-sm mt-3'>CLIENTS WORLDWIDE</h1>
                      </div>
                      <div className='spain11 h-[100%]  flex flex-col justify-center items-center w-[80%] md:w-[30%] rounded-3xl'>
                        <h1 className='text-white text-md md:text-5xl'>+25</h1>
                        <h1 className=' text-gray-400 text-sm mt-3'>TOTAL PROJECTS</h1>
                      </div>
                    </div>
                </div>
                <div data-aos="zoom-in" onClick={Contact} className="spain1 cursor-pointer p-5 mt-4 md:flex md:justify-between   flex flex-col justify-between  bg-[#1E1E1E] md:h-[35vh] h-[45vh] md:w-[100%] lg:w-[49%] w-[80%] text-white rounded-3xl">
                    <div className="md:h-[30%] h-[70%] w-full   text-5xl ">
                      <img className='md:ml-[20px] h-[10vh] ml-[20px]' src={img5} /> 
                    </div>
                    <div className="flex  justify-between md:w-[100%] h-[60%] w-[100%]">
                        <h1 className=' text-white font-semibold md:ml-[20px] ml-[20px] text-5xl'>Let's<br/>work <span className='text-purple-600'>together</span></h1>                    
                        <div className='flex justify-between'>
                          <BiLogOutCircle className='img mt-5 h-[100%] text-4xl duration-200 text-gray-400'/>
                        </div>
                    </div>
                </div>
                
                <h1 className='text-center w-[100%] text-white mt-5'>© All rights reserved by <span className='text-purple-600'> Rana Azhar </span> </h1>
              </div> 
          </div>
        </>
    )
}
export default Hero