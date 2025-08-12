import './App.css';
// import heroImg from "./assets/16410.png";
// import hero2Img from "./assets/3342177.png"
// import hero3Img from "./assets/img.png"
import { useState } from 'react';
import Title from './component/Title';
 
function App() {

  const [name, setName] = useState("Ahror");



  const [modal, setModal] = useState(false);
  const [showConent, setShowContent] = useState(true);




  const [events, setEvents] = useState([
    { title: "akhror birhtday", date: "2023-10-01", id: 1 },
    { title: "Doniyor birhtday", date: "2023-10-02", id: 2 },
    { title: "Akmal birhtday", date: "2023-10-03", id: 3 },
  ]);

  const handleClick = () => {
    setName("Doniyor");
  };

  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => event.id !== id);
    });
  };



  let subtitle = "All events are here";
  return (
    


    <div className="App">
      <div className='none'>

        {/*  <div className="backround">
      <div className="max-width">
        <header className='display'>
          <ul className='display gap-100 '>
          <h2>BrandPuff</h2>
          <li className='font-size18 color'>Home</li>
          <li className='font-size18'>About us</li>
          <li className='font-size18'>Services</li>
          <li className='font-size18'>Contact</li>
          <li className='font-size18'>Blog</li>
          </ul>
          <button className='button-1'>Sign Up</button>
          </header>
          <div className="page-1 display">
          <div className="page-1-left">
          <h1 className='font-size65'>We create <br />
            <b className='color'>solution </b>for <br />
            your business</h1><br /><br />
            <p className='font-size20'>
            Our keep seeps a keys on energing trends <br />
            and technologies  to ensure your marketing <br />
            coampagins remain cutting edge
            </p><br /><br />
            <button className='button-2'>Get Started</button>
            </div>
            <img src={heroImg} alt="image" />
            </div>
            <div className="page-1-footer">
            <div className="text">
            <h1 className='font-size50'>We Provide The Best <b className='color'>Services</b></h1><br />
            <p className='font-size25'> Our keep seeps a keys on energing trends <br />
            and technologies  to ensure your marketing</p>
            </div>
            <div className="boxlar display">
            <div className="box-1">
            <h1>See/Seem</h1>
            <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Quisquam, non?</p>
            </div>
            <div className="box-1">
              <h1>Marketing</h1>
              <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Quisquam, non?</p>
              </div>
              <div className="box-1">
              <h1>VIsual Kamera</h1>
              <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Quisquam, non?</p>
              </div>
              <div className="box-1">
              <h1>Other</h1>
              <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. Quisquam, non?</p>
              </div>
              </div>
              </div>
              <div className="page-2">
              <div className="page-2-img">
              <img src={hero2Img} alt="image" />
              </div>
              <div className="page-2-text">
              <h1>Simple <b className='color'>Solution!</b></h1>
              <p>We understand that no two businnes <br />
              are like. That's why take the <br />
              little to understand</p><br /><br />
              <div className="Tajribalar">
              <div className="tajriba-1 display gap-50 ">
              <div className="raqam ">
              <h1>1</h1>
              </div>
              <div className="yozuv">
              <h2>Contact us</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </div><br />
                
                
                <div className="tajriba-1 display gap-50">
                <div className="raqam ">
                <h1>2</h1>
                </div>
                <div className="yozuv">
                <h2>Consult</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </div><br />
                
                <div className="tajriba-1 display gap-50">
                <div className="raqam ">
                <h1>3</h1>
                </div>
                <div className="yozuv">
                <h2>Place oreder</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </div><br />
                
                <div className="tajriba-1 display gap-50">
                <div className="raqam ">
                <h1>4</h1>
                </div>
                <div className="yozuv">
                <h2>Payment</h2>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </div>
                
                
                </div>
                <div className="buttonlar">
                <button className='button-3'>Get Started</button>
                <button className='button-4'>Send more</button>
                </div>
                </div>
                </div>
                <div className="page-3 display">
                <div className="page-3-text">
            <h1 className='font-size50'>Our <b className='color
            '>Agency</b></h1><br />  
            <p className='font-size18'>The mandam to inconsiderate <br />
            Five star hotel smoking cigarette <br />
            Mixing codeine up with the Phenegen <br />
            She got thick but she wanna get thin again  <br />
            Drinking apple cider vinegar <br />
            Wearing skin cause she wanna be kim and them <br />
            all right
            I know that youre bad stop acting</p><br /><br />
            <button className='button-3'>Read More</button>
            </div>
            <div className="page-3-img">
            <img src={hero3Img} alt="image" />
            </div>
            </div>
            </div>
            </div> */}
      </div>
        <Title title="Akhrors Kingdom🐹 Events" subtitle={subtitle}/>
        <br />  
        {showConent && <button onClick={() => setShowContent(false)}>Hide Content</button>}
        {!showConent && <button onClick={() => setShowContent(true)}>Show Content</button>}
        {showConent && <div>
          {events.length === 0 && <h3>not conent yet</h3>}
          
          {events.map((event) => {
            return (
              <div key={event.id}> 
              <h2>{event.title}</h2>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
              </div>
            );
          })}
          </div>}
        <br />
        {modal && (
          <div className="modal">
            <h2>Modal Content</h2>
            <button onClick={() => setModal(false)}>Close Modal</button>
          </div>
        )}
        <button onClick={() => setModal(true)}>Open Modal</button>
        <br />

        
          

      {/* <div className="container">
        <h1>Hi my name is {name}</h1>
        <button onClick={handleClick}>Change name</button>
      </div>

      {events.map((event) => (
        <div key={event.id} className="event">
          <h2>{event.title}</h2>
          <button onClick={() => handleDelete(event.id)}>Delete</button>
        </div>
      ))} */}



    </div>
  );
}


export default App;
