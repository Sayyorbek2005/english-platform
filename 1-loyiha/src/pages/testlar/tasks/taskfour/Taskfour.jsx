import '../../test.css'
import './taskfour.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Taskfour = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userAnswers, setUserAnswers] = useState({}); // Inputlar uchun holat

  const [answers] = useState([
    {
      id: 1,
      question: 'Fill in the blanks in the tasks with the words from the word bank.',
      questionA: 'During the Great War, Mr. Henry Bosengate is summoned to serve as a ______ at the local assizes (court), which he feels is an annoying waste of his time.',
      optionA: 'juror, judge, soldier, lawyer',
      questionB: 'Mr. Bosengate’s wife, named ______, stands under the porch in a lilac linen dress to see him off on the morning of the trial.',
      optionB: 'Kathleen, Margaret, Elizabeth, Jane',
      questionC: 'His two young children, Kate and ______, run along the garden wall and wave goodbye to him as he drives away in his car.',
      optionC: 'Harry, William, Michael, Henry ',
      questionD: 'The defendant in the trial is a nervous young Welsh soldier named ______ ______, who is brought before the court in his ill-fitting uniform',
      optionD: 'Owen Lewis, David Evans, William Jones, Robert Lewis',
      questionE: 'In court, the soldier was desperately unhappy and explains to the audience that he had to commit suicide, as he couldn’t bear being separated from his  ______.',
      optionE: 'wife, regiment, children, parents',
      questionF: 'The soldier’s previous job was _______ before he was called up to the army',
      optionF: 'hairdresser, mechanic, farmer, teacher ',
      questionG: 'During the Process of verdict discussion, Mr. Bosengate claims recommending_______ for the soldier before he confirms the jury’s deliberations. ',
      optionG: 'mercy, punishment, conviction, discharge',
      questionH: 'The soldier was convicted because he tried to commit_____ when he served in the army, which was considered a serious offense.',
      optionH: 'suicide, theft, desertion, mutiny',
      questionI: 'Once the decision was announced, the soldier was instructed to return to the_______ and serve for the country, instead of being sent to prison. ',
      optionI: 'regiment, home, prison, office ',
      questionJ: 'Judging by the events, Mr. Bosengate had experienced, he concluded that people should be kind and _______ each other.  ',
      optionJ: 'help, obey, judge, admire  '
    },
  ]);

  // Input qiymatini saqlash
  const handleChange = (qKey, value) => {
    setUserAnswers(prev => ({ ...prev, [qKey]: value }));
  };

  const handleSubmit = () => {
    if (!userName.trim()) {
      alert("Iltimos ismingizni kiriting!");
      return;
    }

    // Natijalarni TeacherPage uchun massiv shakliga keltirish (Q1: javob, Q2: javob...)
    const formattedAnswers = Object.entries(userAnswers).map(
      ([key, val]) => `${key}: ${val}`
    );

    const finalData = {
      user: userName,
      answers: formattedAnswers,
      level: 'Evaluative', // Darajasi: Evaluative
      taskType: 'Task 1',    // Bo'lim: Task 1 answers (Oldingilar bilan bir xil joyga tushadi)
      date: new Date().toLocaleString()
    };

    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push(finalData);
    localStorage.setItem('allTests', JSON.stringify(oldData));

    toast.success("Task 4 javoblari Task 1 bo'limiga yuborildi!");
    navigate('/teacherPage');
  };

  return (
    <div data-aos="fade-left" className='tasks taskfour'>
      <div className="taskfour-card">
        {answers.map((item, index) => (
          <div key={index} className="taskfour-question">
            <div>
              <h2>{item.question}</h2><br />
              <ul>
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((letter, idx) => (
                  <div key={letter}>
                    <li>{idx + 1}. {item[`question${letter}`]}</li>
                    <li style={{color: '#7f8c8d', fontSize: '14px'}}>Word bank: {item[`option${letter}`]}</li>
                    <input 
                      className='taskfour-input' 
                      type="text" 
                      placeholder='Your answer'
                      onChange={(e) => handleChange(`Q${idx + 1}`, e.target.value)}
                    />
                    <br /><br />
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <input 
            type="text" 
            className="inp" 
            placeholder='What is your name ?' 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className='taskfour-btn' onClick={handleSubmit}>Yuborish</button>
        </div>
      </div>
    </div>
  )
}

export default Taskfour;