import React, { useEffect , useState } from "react";
import Aos from "aos";
import { CiMail } from "react-icons/ci"
import { BsTelephone } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import img5 from "../images/icon2.png"
import apiKey from '../emailkey'
import emailjs from 'emailjs-com';



function Contact() {

    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      console.log(emailData);

      const handleChange = (e) => {
        setEmailData({
          ...emailData,
          [e.target.name]: e.target.value
        });
      };
    
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    const sendMsg = (e) => {
        e.preventDefault();
    
        emailjs.send('service_g5l4uwg', 'template_6z5etmj', emailData, 'SZcvR3kCH1QuJbR27')
          .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            // Reset the form
            setEmailData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });
      };
    return (
        <>

            <div className="w-full bg-black pt-14 pb-14 flex justify-center items-center">
                <div className=' md:w-[88%] h-[100%] flex flex-wrap justify-center  md:flex md:justify-between'>
                    <div className=" flex flex-col justify-evenly w-[80%] md:w-[35%] h-[55vh] md:h-[65vh] text-white p-5 ">
                        <h1 data-aos="fade-up" className="text-white font-semibold text-lg">CONTACT INFO</h1>
                        
                        <div data-aos="zoom-in" className="h-[100%] w-[95%] flex items-center">
                            <div className="spain1 flex justify-center items-center w-[40%] h-[10vh]  rounded-3xl">
                            <CiMail className="text-4xl" />

                            </div>
                            <div className="flex flex-col justify-center p-2 w-full">
                            <h1 className="text-gray-400">MAIL US</h1>
                                <h1 className="text-white font-serif text-sm md:text-md">azhar1756350@gmail.com</h1>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="h-[100%] w-[95%] flex items-center">
                            <div className="spain1 flex justify-center items-center w-[40%] h-[10vh]  rounded-3xl">
                                <BsTelephone className="text-4xl" />
                            </div>
                            <div className="flex flex-col justify-center p-2 w-full">
                                <h1 className="text-gray-400">CONTACT US</h1>
                                <h1 className="text-white font-serif text-sm md:text-md">+923201756350</h1>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="h-[100%] w-[95%] flex items-center">
                            <div className="spain1 flex justify-center items-center w-[40%] h-[10vh] rounded-3xl">
                                <GoLocation className="text-4xl" />
                            </div>
                            <div className="flex flex-col justify-center p-2 w-full">
                                <h1 className="text-gray-400">LOCATION</h1>
                                <h1 className="text-white font-serif text-sm md:text-md">Lahore ,Thokar Naiz Baig  </h1>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="h-[100%] w-[95%] flex items-center">
                            <div className="spain1 flex justify-center items-center w-[40%] h-[10vh] rounded-3xl">

                                <h1 className="text-gray-400 text-4xl">CV</h1>
                            </div>
                            <div className="flex flex-col justify-center p-2 w-full">
                                <button className="spain11 text-sm md:text-md text-white font-serif p-2 w-[80%] rounded-3xl"><a href="https://onedrive.live.com/?id=3CD4AE019A8880BB%21558&cid=3CD4AE019A8880BB" target="_blank">DOWNLOAD NOW</a></button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="spain1 h-[100%] text-white p-8 md:w-[60%] w-[80%] rounded-3xl">
                        <div className="flex justify-between">
                            <h1 className="font-semibold text-5xl text-white">Let’s work <span className="text-purple-400">together. </span></h1>
                            <img src={img5} />
                        </div>
                        <input className="spain11 rounded-2xl w-[100%] p-4 mt-5" placeholder="Name *" name="name"  onChange={handleChange} value={emailData.name}/>
                        <input className="spain11 rounded-2xl w-[100%] p-4 mt-5" placeholder="Email *"  name="email" onChange={handleChange} value={emailData.email}/>
                        <input className="spain11 rounded-2xl w-[100%] p-4 mt-5" placeholder="Your Subject *" name="subject" onChange={handleChange} value={emailData.subject}/>
                        <textarea className="spain11 rounded-2xl w-[100%] p-4 mt-5 bg-transparent" placeholder="Your Message *" name="message" onChange={handleChange} value={emailData.message} rows="4" cols="50" />
                        <button className="duration-500 rounded-2xl w-[100%] p-4 mt-5 hover:text-black font-bold hover:bg-white" onClick={sendMsg} >Send Message</button>
                    </div>
                    <h1 className='text-center w-[100%] text-white mt-5'>© All rights reserved by <span className='text-purple-600'> Rana Azhar </span> </h1>
                </div>
            </div>

        </>
    )
}
export default Contact