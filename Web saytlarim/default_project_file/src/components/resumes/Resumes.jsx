
import React from 'react'
import './Resumes.css'; 
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";

const Resumes = () => {
   




  return (




  <div className='resumes ' data-aos="fade-down">
    <div className="max-width">
     <div className="page-3">
    
        <div className="reklamalar">

        <div className="reklama-left">

       <h1 className='font-size40 ' >Why Hire Me ?</h1><br />
       
      <p className='font-size20'>Mening Ishga olishingizda turli <br /> xil qulaylakliklarni qolga kiritishingiz mumkin</p>
       <div className="reklama-buttonlar">
        <button className=' button-4 expreince font-size25'>Experince</button><br />
        <button className=' button-5 education font-size25'>Education</button><br />
        <button className='button-6 skil font-size25'>Skillar</button><br /><br />
        
       </div>
        </div>
        <div className="reklama-right">


            
            <div className="reklama-big-box">

            <h2 className='color-2'>My experince</h2><br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Hic in incidunt doloremque facere maiores asperiores?</p><br />
            <div className="experince boxlar ">
                <div className="qator-1 display gap-10">

                    <div className="box-1 font-size20">
                        <p>2022 - Present</p>
                        <h3>Full Stack Developer</h3><br />
                        <p>Tech Solution Inc</p>
                    </div>
                    
                    <div className="box-1 font-size20">
                        <p>Summer 2021</p>
                        <h3>Front-End Developer</h3><br />
                        <p>Web Desigin Studios</p>
                    </div>
                </div>
                        <br />
                    <div className="qator-2 display gap-10">

                        <div className="box-1 font-size20">
                            <p>2020 - 2021</p>
                            <h3>Freelance Developer</h3><br />
                            <p>E-commerce Startup</p>
                        </div>

                        <div className="box-1 font-size20">
                            <p>2019 - 2020</p>
                            <h3>Teaching Assistand</h3><br />
                            <p>Tech Academy</p>
                        </div>
                    </div>
            </div>
            </div>



            <div className="reklama-big-box-2">
<h2 className='color-2'>My Education</h2><br />
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Hic in incidunt doloremque facere maiores asperiores?</p><br />
<div className="education boxlar ">
    <div className="qator-1 display gap-10">

        <div className="box-1 font-size20">
            <p>2023</p>
            <h3>Full Stack Developer</h3><br />
            <p>Online Course Platform</p>
        </div>
        
        <div className="box-1 font-size20">
            <p>2022</p>
            <h3>Front-End Track</h3><br />
            <p>Code academy</p>
        </div>
    </div>
            <br />
        <div className="qator-2 display gap-10">

            <div className="box-1 font-size20">
                <p>2020 - 2021</p>
                <h3>Programming Course</h3><br />
                <p>Online Course</p>
            </div>

            <div className="box-1 font-size20">
                <p>2019</p>
                <h3>Certified Developer</h3><br />
                <p>Tech Institute</p>
            </div>
        </div>
</div>
</div>

        <div className="reklama-big-box-3">
            <div className="skills-boxlar">
                
            <h2 className='color-2'>My Skills</h2><br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Hic in incidunt doloremque facere maiores asperiores?</p><br />
                <br /><br />
            <div className="qator-1 display gap-10">
                <div className="box-2">
                    <h1 className='font-size40'><FaHtml5 /></h1>
                </div>

                <div className="box-2">
                    <h1 className='font-size40'><FaCss3 /></h1>
                </div>
                
                <div className="box-2">
             <h1 className='font-size40'><IoLogoJavascript /></h1>
                </div>
            </div><br /><br />
                    <div className="qator-2 display gap-10">
                        
                <div className="box-2">
                    <h1 className='font-size40'><FaReact /></h1>
                </div>

                <div className="box-2">
                    <h1 className='font-size40'><FaBootstrap /></h1>
                </div>

                <div className="box-2">
                    <h1 className='font-size40'><BsFiletypeScss /></h1>
                </div>
                    </div>
            </div>
        </div>


        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Resumes
