import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './teacher.css'



const Teacher = () => {

   const [UserName, setUserName] = useState("");
   const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitTeacher = () => {
    if (UserName === "Baxtiniso" && password ==='nuriddinova12345' ) {
      navigate("/teacherPage");
    } else {
      alert("Username or Password mistake...!");
    }
  }
  console.log('====================================');
  console.log(UserName);
  console.log(password);

  console.log('====================================');
  
  return (
    <div data-aos="fade-left" className='teacher'>
        <div className="teacher1">
            <h1>Teacher page</h1>
            <div className="login">
              <h2>Login</h2>
           
           <form action="">
            <label htmlFor="">Username</label><br />
            <input 
            type="text"
            placeholder='Name'
            UserName={UserName}
            onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label htmlFor="">Password</label><br />
            <input 
            type="text" 
            placeholder='Password'
            password={password}
            onChange={(e) => setPassword(e.target.value)}
            />
           <button onClick={submitTeacher} className='login-button'>Sign</button>
           </form>
            </div>
        </div>

    </div>
  )
}

export default Teacher
