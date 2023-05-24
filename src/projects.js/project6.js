import React,{useEffect} from "react";
import pro1 from "../images/pro-app.jpg"
import Aos from "aos";
import {AiOutlineClose} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';



function Project3() {

  const navigate=useNavigate()


    useEffect(()=> {
        Aos.init({duration:2000});
    },[]);

    const Work=()=>{
        navigate("/work")
      }


    return(
        <>
        <div className="bg-black flex justify-center h-16 w-[100%]">
            <div className="h-[100%] w-[30%] flex justify-center items-center">
                <AiOutlineClose onClick={Work} className="icom text-5xl text-gray-500 cursor-pointer mt-4"/>
            </div>

        </div>

        <div className="w-full bg-black pt-14 pb-14 flex justify-center items-center">
            <div className=' md:w-[88%] h-[100%] flex flex-wrap justify-center  md:flex md:justify-between'> 
                <div data-aos="fade-right" className=" cursor-pointer md:flex md:flex-row md:justify-between  flex flex-col items-center w-[60%] md:w-[48%] text-white md:h-[90vh] rounded-3xl   ">
                        <img className="h-[100%] w-[100%] rounded-3xl" src={pro1}/>
                </div>
                <div className="border  md:w-[1px] "></div>

                <div data-aos="zoom-in" className="spain1 flex flex-col justify-around mt-4 md:mt-0 w-[70%] md:w-[48%] text-white md:h-[90vh] p-7 rounded-3xl">
                    <h1 className="text-gray-400">PROJECT :<spna className="text-white text-ellipsis md:ml-5 md:text-lg font-serif">Mobile Theme</spna></h1>
                    <h1 className="text-gray-400 mt-2 md:mt-0 ">DETAILS :<spna className="text-white md:ml-5 font-serif">The project I worked on involved creating a captivating pro-themed website using a combination of HTML, CSS,  JavaScript, and Animation libraries.The main goal was to develop an engaging user interface and enhances the overall user experience.</spna></h1>
                    <h1 className="text-gray-400 mt-2 md:mt-0">Technologies :<spna className="text-white md:ml-5 md:text-lg font-serif">Html,css,javascript,Animation</spna></h1>
                    <h1 className="text-gray-400 mt-2 md:mt-0">Industry :<spna className="text-white md:ml-5 md:text-lg font-serif">WEB DEVELOPMENT</spna></h1>
                    <h1 className="text-gray-400 mt-2 md:mt-0">DATE :<spna className="text-white md:ml-5 md:text-lg font-serif"> sep-06-2022 </spna></h1>
                    <h1 className="text-gray-400 mt-2 md:mt-0">URL :<a className="text-blue-500 text-sm md:text-lg md:ml-5" href="https://ranaazhar0.github.io/-my-pro-app/">https://ranaazhar0.github.io/-my-pro-app/</a></h1>
                    <h1 className="text-gray-400 mt-2 md:mt-0">MY github :<a className="text-blue-500 md:text-lg md:ml-5" href="https://github.com/RanaAzhar0/-my-pro-app.git">https://github.com/RanaAzhar0/-my-pro-app.git</a></h1>
                </div>
            </div>
        </div>

        
        </>
    )
}
export default Project3