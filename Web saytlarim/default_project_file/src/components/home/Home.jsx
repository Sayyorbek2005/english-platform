
import './Home.css'
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import heroImg from '../../assets/img.png';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
   
     <div className="page-1 "data-aos="fade-down" id='home'>
      <div className="max-width">
      <div className="katta-page display gap-50">
      <div className="left-text">
        <h3>Hello my name is <i className='color'>Ismailov Sayyor</i></h3> 
        <h3>I'm a Web Developer</h3><br />
        <p className='font-size20'>I'm a Web Developer with extensive experince for over 2 <br />
        years. My expertise is to create and website... <br />
        </p>
      <div className="linklar-div display">

      <>
      <Button className='button-1' type="primary" onClick={showModal}>
        Hire Me
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            target="_blank"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <label htmlFor="">Ismingiz</label><br />
       <input type=" text"placeholder='Ismingiz'  />
       <input type="text"placeholder='Familiyangiz' />
       <input type="Number" placeholder='Raqamingiz'/>
       
      </Modal>
    </>
        <div className="linklar display">
          <i className=' font-size20 i-linklar'><FaGithub /></i>
          <i className=' font-size20 i-linklar'><FaTelegramPlane /></i>
          <i className=' font-size20 i-linklar'><FaInstagram /></i>
          <i className=' font-size20 i-linklar'><FaYoutube /></i>
        </div>
      </div>
      </div>


      <div className="img-right">
        <img src={heroImg} alt="img" />
      </div>
      </div>


      <div className="tajribalar display">
        <div className="yil">
          <h1 className=' raqam font-size40'>12</h1>
          <b>Years of <br />
          expreince</b>
        </div>
        <div className="yil">
          <h1 className=' raqam font-size40'>26</h1>
          <b>Projects <br />
          completed</b>
        </div>
        <div className="yil">
          <h1 className=' raqam font-size40'>8</h1>
          <b>Technologies <br />
          mastered</b>
        </div>
        <div className="yil">
          <h1 className=' raqam font-size40'>500</h1>
          <b>Code <br />
          Commits</b>
        </div>
      </div>
      </div>
     </div>
      
  )
}

export default Home
