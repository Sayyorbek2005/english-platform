import {  Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Home from "./pages/home/Home"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Books from './pages/books/Books';
import Test1 from './pages/testlar/Test';
import Test2 from "./pages/testlar/Test2/Test2";
import Twobook from './pages/twobook/Twobook';
import Teacher from './pages/teacher/Teacher';
import Taskone from './pages/testlar/tasks/taskone/Taskone';
import Tasktwo from './pages/testlar/tasks/tasktwo/Tasktwo';
import Taskthree from './pages/testlar/tasks/taskthree/Taskthree';
import Taskfour from './pages/testlar/tasks/taskfour/Taskfour';
import Taskfive from './pages/testlar/tasks/taskfive/Taskfive';
import Taskone1 from './pages/testlar/tasks/taskone1/Taskone1';
import Tasktwo2 from './pages/testlar/tasks/tasktwo2/Tasktwo2';
import Taskthree3 from './pages/testlar/tasks/taskthree3/Taskthree3';
import Taskfour4 from './pages/testlar/tasks/taskfour4/Taskfour4';
import Taskfive5 from './pages/testlar/tasks/taskfive5/Taskfive5'
import Keyone from './pages/testlar/keys/keyone/Keyone'
import Keytwo from './pages/testlar/keys/keytwo/Keytwo'
import { useEffect } from 'react';
import TeacherPage from './teacherPage/TeacherPage'


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  return (
    <div className="App">
      <ToastContainer />

      <div className="go-back" onClick={() => navigate(-1)}>
        <IoIosArrowBack />
        <p>go back</p>
      </div>

      <Header />
      <SideBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='books' element={<Books />} />
        <Route path='twobook' element={<Twobook />} />
        <Route path='test1' element={<Test1 />} />
        <Route path="test2" element={<Test2 />} />
        <Route path='teacher' element={<Teacher />} />
        <Route path='taskone' element={<Taskone />} />
        <Route path='tasktwo' element={<Tasktwo />} />
        <Route path='taskthree' element={<Taskthree />} />
        <Route path='taskfour' element={<Taskfour />} />
        <Route path='taskfive' element={<Taskfive />} />
        <Route path='taskone1' element={<Taskone1 />} />
        <Route path='tasktwo2' element={<Tasktwo2 />} />
        <Route path='taskthree3' element={<Taskthree3 />} />
        <Route path='taskfour4' element={<Taskfour4 />} />
        <Route path='taskfive5' element={<Taskfive5 />} />
        <Route path='keyone' element={<Keyone />} />
        <Route path='keytwo'element={<Keytwo/>}/>
        <Route path='teacherPage' element={<TeacherPage />} />
        
      </Routes>
    </div>
  );
}

export default App;