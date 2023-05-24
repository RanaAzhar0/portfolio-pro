import React,{useEffect,useState} from "react";
import Aos from "aos";
import {TbBrandTailwind} from "react-icons/tb"
import ab1 from "../images/star-2.png"
import { useNavigate } from 'react-router-dom';
import img5 from "../images/icon2.png"
import {BiLogOutCircle} from "react-icons/bi"





function Service() {

  const navigate=useNavigate()

  let [open,setOpen]=useState(false);



    const Contact=()=>{
        navigate("/contact")
      }

    useEffect(()=> {
        Aos.init({duration:2000});
    },[]);

    return(
    <>
        <div className="w-full bg-black pt-14 pb-14 flex justify-center items-center">
            <div className=' md:w-[88%] w-[80%] h-[100%] flex flex-wrap justify-center md:flex md:justify-between'> 
                <div data-aos="fade-right" onClick={()=>setOpen(open)}  className="spain1 md:flex md:justify-evenly  flex flex-col justify-between items-center w-[90%] h-[55vh] md:w-[44%] lg:w-[35%] text-white md:h-[90vh] p-7  rounded-3xl   ">
                    <div className="h-[20%] w-[100%] flex justify-between items-center text-2xl md:text-5xl">
                      <ion-icon name="logo-nodejs"></ion-icon>
                      <h1 className="font-serif lg:text-1xl text-lg md:text-xl xl:text-2xl">DYNAMIC WEB</h1>
                    </div>
                    <div className="h-[20%] w-[100%] flex justify-between items-center text-2xl md:text-5xl">
                        <ion-icon name="logo-html5"></ion-icon>
                        <h1 className="font-serif lg:text-1xl text-lg md:text-xl xl:text-2xl">WEB DESIGNING</h1>
                    </div>
                    <div className="h-[20%] w-[100%] flex justify-between items-center text-2xl md:text-5xl">
                        <TbBrandTailwind/>
                        <h1 className="font-serif lg:text-1xl text-lg md:text-xl xl:text-2xl">RESPONSIVE WEB</h1>
                    </div>
                    <div className=" h-[20%] w-[100%] flex justify-between items-center text-2xl md:text-5xl">
                        <ion-icon name="logo-css3"></ion-icon>
                        <h1 className="font-serif lg:text-1xl text-lg md:text-xl xl:text-2xl">FRONTEND DEV</h1>
                    </div>
                </div>
                <div className="w-[100%]  md:w-[54%] lg:w-[63%] h-[100%] flex flex-col items-center">
                    <div data-aos="zoom-in" className="w-[100%] md:w-[100%] mt-1 h-[13vh]  text-white flex justify-center  items-center ">
                        <img src={ab1} />
                        <h1 className=' text-white font-extrabold font-[Poppins] sm:text-2xl md:text-3xl lg:text-5xl  '>MY OFFERINGS</h1>
                        <img src={ab1} />
                    </div>
                    <div data-aos="fade-down" className="spain1 p-5 flex flex-wrap justify-between lg:justify-between  md:justify-center items-center rounded-3xl w-[100%] md:w-[100%] mt-2 h-[100%]  text-white ">
                        <div className="spain111 p-5 w-[100%] md:w-[80%] lg:w-[48%] h-[100%]  rounded-3xl">
                            <h1 className="font-semibold text-gray-400">DYNAMIC WEBSITES</h1>
                            <p className="pt-4 font-serif">
                            Dynamic websites are websites that display content that is generated or updated dynamically, allowing for real-time interaction and personalized experiences for users. Unlike static websites, where the content remains the same until manually changed.                            </p>
                        </div>
                        <div className="spain111 p-5 w-[100%] md:w-[80%] shadow-black lg:w-[48%] mt-4 md:mt-4 lg:mt-0 h-[100%] rounded-3xl">
                            <h1 className="font-semibold text-gray-400">WEB DESIGNING</h1>
                            <p className="pt-4 font-serif">
                            IT involves a combination of creativity, technical skills, and an understanding of user behavior. The goal is to create visually appealing, functional, and user-friendly websites that effectively convey the client's message and meet the needs of their target audience.
                            </p>
                        </div>
                        <div className="spain111 p-5 w-[100%] md:w-[80%] shadow-black lg:w-[48%] mt-4 md:mt-4  h-[100%] rounded-3xl">
                            <h1 className="font-semibold text-gray-400">RESPONSIVE WEBSITE </h1>
                            <p className="pt-4 font-serif">
                            The benefits of a responsive website are numerous. It improves user engagement, reduces bounce rates, and enhances search engine optimization (SEO) by providing a seamless experience across devices.                            </p>
                        </div>
                        <div className="spain111 p-5 w-[100%] md:w-[80%] shadow-black lg:w-[48%] mt-4 md:mt-4 h-[100%] rounded-3xl">
                            <h1 className="font-semibold text-gray-400">FRONTEND DEVELOPER</h1>
                            <p className="pt-4 font-serif">
                            A frontend developer is a professional who specializes in creating the user-facing or client-side portion of a website or web application. They focus on implementing the visual and interactive elements that users see and interact with directly.                            </p>
                        </div>      
                    </div>
               </div>
               <div className="h-[100%] w-[100%] flex justify-center">
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
                </div>       
                    <h1 className='text-center w-[100%] text-white mt-5'>© All rights reserved by <span className='text-purple-600'> Rana Azhar </span> </h1>
                
            </div>
        </div>

    
    </>
    )
}
export default Service