import React,{useEffect} from "react";
import {BiLogOutCircle} from "react-icons/bi"
import img4 from "../images/figma.jpg"
import Aos from "aos";
import ab1 from "../images/star-2.png"
import imgp1 from "../images/neo-reach.jpg"
import imgp2 from "../images/Screenshot (68).png"
import imgP3 from "../images/reaT-form.jpg"
import imgp4 from "../images/wine-shope.jpg"
import imgp5 from "../images/pro-app.jpg"
import { useNavigate } from 'react-router-dom';



function Work() {

    const navigate=useNavigate()

    useEffect(()=> {
        Aos.init({duration:2000});
    },[]);

    const project=()=>{
        navigate("/project")
      }
      const project2=()=>{
        navigate("/project2")
      }
      const project3=()=>{
        navigate("/project3")
      }
      const project4=()=>{
        navigate("/project4")
      }
      const project5=()=>{
        navigate("/project5")
      }
      const project6=()=>{
        navigate("/project6")
      }
    
    return(
        <>
         <div className="w-full bg-black pt-14 pb-14 flex justify-center items-center">
            <div className=' md:w-[88%] h-[100%] flex flex-wrap justify-center  md:flex md:justify-between'> 
                <div data-aos="zoom-in" onClick={project} className="spain11 cursor-pointer mt-4 md:flex md:justify-between flex flex-col justify-between md:h-[47vh] h-[45vh] lg:w-[35%] md:w-[40%] w-[65%] text-white p-5 rounded-3xl">
                    <div className="md:h-[75%] h-[80%] w-full flex justify-center">
                        <img src={img4} className=" h-[100%] w-[100%]  rounded-2xl " />
                    </div>
                    <div className="flex flex-col justify-evenly md:w-[100%] h-[20%] w-[100%]">
                        <h1 className=" text-[14px] text-gray-400 pt-4 ">REACT</h1>
                        <div className='flex justify-between'>
                            <h1 className="font-bold text-2xl font-serif">Vvork </h1>
                            <BiLogOutCircle className='img text-4xl duration-200 text-gray-400'/>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] md:w-[59%] lg:w-[64%] mt-1 h-[100%] ">
                    <div data-aos="fade-up" className=" w-[100%] ] mt-1 h-[13vh]  text-white flex justify-center  items-center ">
                            <img src={ab1} />
                            <h1 className=' text-white font-extrabold font-[Poppins] text-4xl md:text-4xl lg:text-6xl  '>ALL PROJECTS</h1>
                            <img src={ab1} />
                    </div>
                    <div className="w-[100%] h-[100%] flex flex-wrap justify-center md:justify-between items-end=">
                        <div data-aos="zoom-in" onClick={project2} className="spain11 cursor-pointer mt-4 md:flex md:justify-between flex flex-col justify-between md:h-[47vh] h-[45vh] lg:w-[49%] md:w-[49%] w-[65%] text-white p-5 rounded-3xl">
                            <div className="md:h-[75%] h-[80%] w-full flex justify-center">
                                <img src={imgp1} className=" h-[100%] w-[100%]  rounded-2xl " />
                            </div>
                            <div className="flex flex-col justify-evenly md:w-[100%] h-[20%] w-[100%]">
                                <h1 className=" text-[14px] text-gray-400 pt-4 ">HTML5</h1>
                                <div className='flex justify-between'>
                                    <h1 className="font-bold text-2xl font-serif">Vvork </h1>
                                    <BiLogOutCircle className='img text-4xl duration-200 text-gray-400'/>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" onClick={project3} className="spain11 cursor-pointer mt-4 md:flex md:justify-between   flex flex-col justify-between  md:h-[47vh] h-[45vh] lg:w-[49%] md:w-[49%] w-[65%] text-white p-5 rounded-3xl">
                            <div className="md:h-[75%] h-[80%] w-full flex justify-center">
                                <img src={imgp2} className=" h-[100%] w-[100%]  rounded-2xl " />
                            </div>
                            <div className="flex flex-col justify-evenly md:w-[100%] h-[20%] w-[100%]">
                                <h1 className=" text-[14px] text-gray-400 pt-4 ">REACT ROUTER</h1>
                                <div className='flex justify-between'>
                                    <h1 className="font-bold text-2xl font-serif">Vvork </h1>
                                    <BiLogOutCircle className='img text-4xl duration-200 text-gray-400'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" onClick={project4} className="spain11 cursor-pointer md:flex md:justify-between md:-mt-20 flex flex-col justify-between mt-4 lg:h-[62vh]  h-[65vh]  md:w-[40%] lg:w-[35%] w-[65%] text-white p-5 rounded-3xl">
                    <div className="md:h-[75%] h-[80%] w-full flex justify-center">
                        <img src={imgP3} className=" h-[100%] w-[100%]  rounded-2xl " />
                    </div>
                    <div className="flex flex-col justify-evenly md:w-[100%] h-[20%] w-[100%]">
                        <h1 className=" text-[14px] text-gray-400 pt-4 ">VALIDATION</h1>
                        <div className='flex justify-between'>
                            <h1 className="font-bold text-2xl font-serif">Vvork </h1>
                            <BiLogOutCircle className='img text-4xl duration-200 text-gray-400'/>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] md:w-[59%] lg:w-[64%] h-[100%] ">
                    <div className="w-[100%] h-[100%] flex flex-wrap justify-center md:justify-between items-end="> 
                        <div data-aos="zoom-in" onClick={project5} className="spain11 cursor-pointer mt-4 md:flex md:justify-between   flex flex-col justify-between md:h-[47vh] h-[45vh] lg:w-[49%] md:w-[49%] w-[65%] text-white p-5 rounded-3xl">
                            <div className="md:h-[75%] h-[80%] w-full flex justify-center">
                                <img src={imgp4} className=" h-[100%] w-[100%]  rounded-2xl " />
                            </div>
                            <div className="flex flex-col justify-evenly md:w-[100%] h-[20%] w-[100%]">
                                <h1 className=" text-[14px] text-gray-400 pt-4 ">ReactJS</h1>
                                <div className='flex justify-between'>
                                    <h1 className="font-bold text-2xl font-serif">Evian Solutions </h1>
                                    <BiLogOutCircle className='img text-4xl duration-200 text-gray-400'/>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" onClick={project6} className="spain11 cursor-pointer mt-4 md:flex md:justify-between   flex flex-col justify-between md:h-[47vh] h-[45vh] lg:w-[49%] md:w-[49%] w-[65%] text-white p-5 rounded-3xl">
                            <div className="md:h-[75%] h-[80%] w-full flex justify-center">
                                <img src={imgp5} className=" h-[100%] w-[100%]  rounded-2xl " />
                            </div>
                            <div className="flex flex-col justify-evenly md:w-[100%] h-[20%] w-[100%]">
                                <h1 className=" text-[14px] text-gray-400 pt-4 ">Pro App</h1>
                                <div className='flex justify-between'>
                                    <h1 className="font-bold text-2xl font-serif">Evian Solutions </h1>
                                    <BiLogOutCircle className='img text-4xl duration-200 text-gray-400 '/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-center w-[100%] text-white mt-5'>© All rights reserved by <span className='text-purple-600'> Rana Azhar </span> </h1>
            </div>
        </div>

        

        </>
    )
}
export default Work