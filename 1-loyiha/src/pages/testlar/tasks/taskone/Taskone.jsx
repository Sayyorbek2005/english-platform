import '../../test.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Taskone = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(''); 
  const [selectedAnswers, setSelectedAnswers] = useState({}); 

  const [answers] = useState([
    {
      id: 1,
      question: '1.What was the attitude of Mr. Bosengate toward being summoned as a jury?',
      optionsA: 'a) He finds it exciting',
      optionsB: 'b) He finds it annoying',
      optionsC: 'c) He feels honored',
      optionsD: 'd) He is nervous and unsure',
    },
    {
      id: 2,
      question: '2.What is the relationship between Kathleen and Bosengate?',
      optionsA: 'a) She is his daughter',
      optionsB: 'b) She is his niece',
      optionsC: 'c) She is his wife',
      optionsD: 'd) She is his mistress',
    },
    {
      id: 3,
      question: '3.What is the accused man’s name in the story?',
      optionsA: 'a) Owen Lewis',
      optionsB: 'b) Mr. Bosengate',
      optionsC: 'c) George',
      optionsD: 'd) Kathleen ',
    },
    {
      id: 4,
      question: '4.What is Owen Lewis accused of? ',
      optionsA: 'a) He escaped from the army',
      optionsB: 'b) He committed suicide',
      optionsC: 'c) He attempted theft',
      optionsD: 'd) He trespassed the border',
    },
    {
      id: 5,
      question: '5.  What was Owen Lewis job before joining the army?',
      optionsA: 'a) Hairdresser',
      optionsB: 'b) Carpenter',
      optionsC: 'c) Lawyer',
      optionsD: 'd) Teacher',
    },
    {
      id: 6,
      question: '6.  What was the reason for Owen Lewis committing suicide?',
      optionsA: 'a) He was afraid of going to the front line',
      optionsB: 'b) His commanding officer tormented him',
      optionsC: 'c) He was depressed because of the separation from his wife',
      optionsD: 'd) He had serious health problems',
    },
    {
      id: 7,
      question: '7.On what condition did Mr.Bosengate agree on signing the verdict?',
      optionsA: 'a) Owen was declared not guilty',
      optionsB: 'b) The jury recommends mercy',
      optionsC: 'c) That the case be re-tried',
      optionsD: 'd) That the soldier is fined ',
    },
    {
      id: 8, 
      question: '8.What did Mr.Bosengate realize by the end of the story?',
      optionsA: 'a) The laws of the government should be strict',
      optionsB: 'b) The laws should be strict',
      optionsC: 'c) Society needs to be kind and helpful to people',
      optionsD: 'd) Military service is more important to empathy ',
    },
  ]);

  const handleSelect = (qId, variant) => {
    setSelectedAnswers({ ...selectedAnswers, [qId]: variant });
  };

  const sendResults = () => {
    if (userName.trim() === "") {
      alert("Iltimos ismingizni kiriting!");
      return;
    }

    const result = {
      user: userName,
      answers: selectedAnswers,
      level: 'Literal', // Darajasi
      taskType: 'Task 1', // TeacherPage birinchi blokda ko'rishi uchun
      date: new Date().toLocaleString()
    };

    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push(result);
    localStorage.setItem('allTests', JSON.stringify(oldData));

    toast.success("Javoblar yuborildi");
    navigate('/teacherPage');
  };

  return (
    <div data-aos="fade-left" className='tasks taskone'>
      <div className="taskone-card">
        {answers.map((item, index) => (
          <div key={index} className="taskone-question">
            <div>
              <h2>{item.question}</h2>
              <ul>
                <div className='taskone-card'>
                  <li className='a' onClick={() => handleSelect(item.id, 'A')} style={{ cursor: 'pointer', color: selectedAnswers[item.id] === 'A' ? 'blue' : '' }}>{item.optionsA}</li>
                  <li className='b' onClick={() => handleSelect(item.id, 'B')} style={{ cursor: 'pointer', color: selectedAnswers[item.id] === 'B' ? 'blue' : '' }}>{item.optionsB}</li>
                </div>
                <div>
                  <li className='c' onClick={() => handleSelect(item.id, 'C')} style={{ cursor: 'pointer', color: selectedAnswers[item.id] === 'C' ? 'blue' : '' }}>{item.optionsC}</li>
                  <li className='d' onClick={() => handleSelect(item.id, 'D')} style={{ cursor: 'pointer', color: selectedAnswers[item.id] === 'D' ? 'blue' : '' }}>{item.optionsD}</li>
                </div>
              </ul>
            </div>
            <br />
            <hr />
          </div>
        ))}
        <input 
          type="text" 
          className="inp" 
          placeholder='What is your name ?' 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className='taskthree-btn' onClick={sendResults}>Yuborish</button>
      </div>
    </div>
  );
};

export default Taskone;