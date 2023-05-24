import {React,useEffect} from "react";
import img1 from "../images/me.png"
import ab1 from "../images/star-2.png"
import img5 from "../images/icon2.png"
import {BiLogOutCircle} from "react-icons/bi"
import { useNavigate } from 'react-router-dom';
import Aos from "aos";



function About() {

      const navigate=useNavigate()

    
    useEffect(()=> {
        Aos.init({duration:2000});
    },[]);

    const Contact=()=>{
        navigate("/contact")
      }

    
    return(
        <>
        
        <div className="w-full bg-black pt-14 pb-14 flex justify-center items-center">
            <div className=' md:w-[88%] h-[100%] flex flex-wrap justify-center  md:flex md:justify-between'> 
                <div data-aos="zoom-in" className="spain1  md:flex md:flex-row md:justify-between  flex flex-col items-center bg-[#1E1E1E] w-[55%] md:w-[33%] text-white lg:h-[57vh] md:h-[63vh] p-5 rounded-3xl   ">
                    <div className="spain h-[100%] w-[100%] md:w-[100%] rounded-3xl">
                      <img src={img1} className=" h-[100%] w-[100%] rounded-3xl  " />
                    </div>
                </div>
               <div className="w-[100%] md:w-[65%] mt-2 h-[100%]  flex flex-col items-center">
                    <div data-aos="fade-up" className="w-[100%] md:w-[100%] mt-1 h-[13vh]  text-white flex justify-center  items-center ">
                        <img src={ab1} />
                        <h1 className=' text-white font-extrabold font-[Poppins] text-3xl md:text-4xl lg:text-6xl  '>SELF-SUMMARY</h1>
                        <img src={ab1} />
                    </div>
                    <div data-aos="fade-down" className="spain1 p-5 rounded-3xl w-[80%] md:w-[100%] mt-2 h-[100%]  text-white ">
                        <img className='h-[10vh] ' src={img5} />
                        <h1 className=' text-white font-semibold font-[Inter, sans-serif] text-3xl md:text-5xl mt-4   '>Rana Azhar</h1>
                        <p className="text-lg mt-3 text-gray-400 font-serif">As a frontend developer with one year of experience, I am proficient in creating responsive and dynamic websites using modern web technologies such as HTML, CSS, JavaScript, and ReactJS.</p>
                    </div>
               </div>
                <div data-aos="zoom-in" className="spain1 mt-4 md:flex md:justify-between   flex flex-col justify-between  bg-[#1E1E1E] md:h-[45vh] h-[45vh] md:w-[49%] w-[80%] text-white p-5 rounded-3xl">
                    <div className="md:h-[100%] h-[100%]  w-full flex flex-col  ">
                      <h1 className="font-bold text-xl">EXPERIENCE</h1>
                      <p className="font-semibold text-gray-400 tracking-wide mt-4 text-lg">20021 - 2022</p>
                      <h1 className="font-semibold text-lg tracking-wide">Framer Designer & Developer</h1>
                      <p className="font-semibold text-lg tracking-wide text-gray-400">Evian Solutions,</p>
                      <h1 className="font-semibold text-lg tracking-wide text-gray-400 mt-5">2022 - 2023</h1>
                      <p className="font-semibold text-lg tracking-wide">Front-End Developer</p>
                      <h1 className="text-gray-400 text-lg tracking-wide font-semibold">Vvork cloud technologies</h1>
                    </div>
                </div>
                <div data-aos="zoom-in" className="spain1 mt-4 md:flex md:justify-between   flex flex-col justify-between  bg-[#1E1E1E] md:h-[45vh] h-[45vh] md:w-[49%] w-[80%] text-white p-5 rounded-3xl">
                    <div className="md:h-[100%] h-[100%]  w-full flex flex-col  ">
                      <h1 className="font-bold text-xl">EDUCATION</h1>
                      <p className="font-semibold text-gray-400 tracking-wide mt-4 text-lg">2017 - 2018</p>
                      <h1 className="font-semibold text-lg tracking-wide">F.S.C (pre Eng)</h1>
                      <p className="font-semibold text-lg tracking-wide text-gray-400">Government Boys Degree College Hujra Shah Muqeem</p>
                      <h1 className="font-semibold text-lg tracking-wide text-gray-400 mt-5">2018 - 2022</h1>
                      <p className="font-semibold text-lg tracking-wide">Bs (IT) </p>
                      <h1 className="text-gray-400 text-lg tracking-wide font-semibold">The University Of Lahore </h1>
                    </div>
                </div>

                <div className="flex justify-center w-[100%]">
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
export default About