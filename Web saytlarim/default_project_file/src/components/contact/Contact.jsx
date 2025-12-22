
import './Contact.css'
import { MdCall } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='contact' data-aos="fade-down">
      <div className="max-width">
        <div className="page-5">
          <div className="questionlar">
            <h1 className='font-size40'>Contact Me</h1>
            <div class="seven linear-1"></div><br />
            <div class="eight linear"></div><br /><br />
            <div className="question">
              <h1 className='color-2'>Have You Any Question</h1><br />
              <h3>I'M AT YOUR SERVICE</h3>
            </div>
            <div className="joylashuvlar ">

              <div className="call">
              <li className='font-size30 '><MdCall /></li>
              <h2 className=''>Call Us On</h2><br />
              <p>+998-93-339-99-23</p>
              </div>  

              <div className="call">
                <li className='font-size30 '><CiLocationOn /></li>
                <h2 className=''>Office</h2><br />
                <p>44-street, Islamabad</p>
              </div>

              <div className="call">
                <li className='font-size30 '><MdOutlineEmail /></li>
                <h2 className=''>Email</h2><br />
                <p>sayyor@gmail.com</p>
              </div>

              <div className="call">
                <li className='font-size30 '><IoEarthOutline /></li>
                <h2 className=''>Website</h2><br />
                <p>www.sayyor.uz</p>
                </div>

            </div>


            <div className="inputlar">
              <div className="input-text">

                <h2 className='color-2'>SEND ME AND EMAIL</h2><br />
                <h4>I'M VERY RESPONSIVE TO MESSAGE</h4>
              </div>

              <div className="input-ism-email display">
                <input type="text" placeholder='Your Name' className='input-ism' /><br />
                <input type="email" placeholder='Your Email' className='input-email' /><br />
              </div>

              <div className="input-subject">
                <input type="text" placeholder='Subject' className='input-subject' /><br />
              </div>

              <div className="input-message">
                <textarea placeholder='Message' className='input-message'></textarea><br />
                </div>

              <div className="input-button">
                <button className='input-buttonlar'>Send Message</button>
                </div>

            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Contact
