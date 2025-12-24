import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './teacher.css'

const Teacher = () => {
  const [UserName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitTeacher = (e) => {
    e.preventDefault(); // Sahifa yangilanmasligi uchun
    if (UserName === "Baxtiniso" && password === 'nuriddinova12345' ) {
      // MUHIM: Ruxsatni saqlaymiz
      sessionStorage.setItem('isTeacherAuth', 'true');
      navigate("/teacherPage");
    } else {
      alert("Username or Password mistake...!");
    }
  }
  
  return (
    <div data-aos="fade-left" className='teacher'>
        <div className="teacher1 background">
            <h1>Teacher page</h1>
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={submitTeacher}>
                    <label>Username</label><br />
                    <input 
                        type="text"
                        placeholder='Name'
                        value={UserName}
                        onChange={(e) => setUserName(e.target.value)}
                    /><br />
                    <label>Password</label><br />
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />
                    <button type="submit" className='login-button'>Sign</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Teacher;