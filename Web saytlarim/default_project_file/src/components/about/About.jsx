
import './About.css'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const About = () => {
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
    <div className='about' data-aos="fade-down">
      <div className="max-width">
      <div className="page-2">
        <h1 className='font-size40'>About Me</h1>
        <div class="five linear-1"></div>
        <div class="six linear"></div><br /><br /><br /><br />
        <div className='rasm-text'>
          <div className="me-about">
        <h3 className='font-size30'>I'm <b className='color'>Sayyor</b> and <b className='color'>Web Developer</b></h3><br />
        <p className='font-size20'>My name is Sayyor. I'm 19 years old <br />I'm study at the SamDu university anmd IT TAT company<br />
        </p>
            
          </div>
          <div className="me-img">
            
          </div>
        </div>
        
        <div className="malumotlar display">
          <div className="malumot-left">

            <div className=" aa birthday display">
              <b className='font-size20'>Birthday:</b>
              <p className='font-size18'>29 september </p>
            </div>
            <hr /><br />

            <div className=" aa website display">
              <b className='font-size20'>Website:</b>
              <p className='font-size18'>www.domain.com</p>
            </div>
            <hr /><br />  

            <div className=" aa degree display">
              <b className='font-size20'>Degree:</b>
              <p className='font-size18'>CS</p>
            </div>
            <hr /><br />

            <div className=" aa city  display">
              <b className='font-size20'>City:</b>
              <p className='font-size18'>Uzbekistan</p>
            </div>
            <hr /><br />

          </div>

          <div className="malumot-right">
          <div className="age aa  display">
            <b className='font-size20'>Age:</b>
            <p className='font-size18'>19</p>
          </div>
          <hr /><br />
          <div className=" aa email display">
            <b className='font-size20'>Email:</b>
            <p className='font-size18'>sayyor@gmail.com</p>
          </div>
          <hr /><br />
          <div className=" aa phone display">
            <b className='font-size20'>Phone:</b>
            <p className='font-size18'>93-339-99-23</p>
          </div>
          <hr /><br />
          <div className=" aa freelanse   display">
            <b className='font-size20'>Freelance:</b>
            <p className='font-size18'>Available</p>
          </div>
          <hr /><br />  
          </div>
          
          <div className="tajriba">
          
          <div className="skil_box_1 ">
            <h2 className="Html display">HTML 
              <h5>80%</h5></h2>
            <div className="foiz_1">
            <p className="foiz_1_1"></p>
            </div>
            </div><br /><br />

            <div className="skil_box_2">
            <h2 className="Css display">CSS 
              <h5>74%</h5></h2>
            <div className="foiz_2">
            <p className="foiz_2_1"></p>
            </div>
            </div><br /><br />

            <div className="skil_box_3">
            <h2 className="Java display">JAVA SCRIPT 
              <h5>63%</h5></h2>
            <div className="foiz_3">
            <p className="foiz_3_1"></p>
            </div>
            </div><br /><br />

            <div className="skil_box_5">
            <h2 className="React display">REACT 
              <h5>65%</h5></h2>
            <div className="foiz_5">
            <p className="foiz_5_1"></p>
            </div>
            </div>

          </div>
        </div>
        <div className="buttonlar">
          <button className='color button-2'>Download CV</button>
          <>
      <Button className='button-1' type="primary" onClick={showModal}>
        Hire me
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
