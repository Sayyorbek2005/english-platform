import './taskfour4.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Taskfour4 = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  
  // Bo'shliqlar uchun statelar
  const [task3Inputs, setTask3Inputs] = useState([]);
  const [task4Inputs, setTask4Inputs] = useState([]);
  const [task5Inputs, setTask5Inputs] = useState([]);
  
  // Testlar (Multiple choice) uchun state
  const [testAnswers, setTestAnswers] = useState({});

  const answers1 = [{
    id: 1,
    narrit: 'Narrative gap-filling exercises. ',
    task3: 'Task 3. Filling the emotional gaps. ',
    text: 'Fill in each blank with a phrase that expresses what the characters might be feeling or thinking.',
    question: `The husband sat quietly with his coffee, watching the children play. He did not speak at first, because he was thinking about  __________. When he finally told his wife about the dream, he spoke calmly, almost gently, as if he did not want to disturb the peace of the evening. The wife listened without panic, perhaps because she sensed that  __________. She looked at her daughters, and instead of fear, she felt  __________, knowing that their night would remain ordinary. Later, when they washed the dishes together, they did not hurry or avoid silence. They moved slowly, carefully, as though  __________. And when the house became quiet, they both understood that there was nothing more to do than  __________.`
  }];

  const answers2 = [{
    id: 1,
    task: 'Task 4. Filling the Social Gaps',
    infer: 'Infer how the dream spread among people.',
    question: `The husband explained that he was not the only one who had the dream. At work, Stan Willis came in looking pale, and immediately the husband knew that  __________. They exchanged only a few words — they didn’t need more — because each recognized  __________. Meanwhile, the women in the neighborhood had also spoken about the dream. It spread quietly, not through news or officials, but through  __________. No one tried to make an announcement or cause alarm, perhaps because they all understood that  __________. Even the newspapers and radios said nothing, not out of ignorance but because  __________.`
  }];

  const answers3 = [{
    id: 1,
    task: 'Task 5. Filling the Final Moments Gaps',
    infer: 'Infer what is unspoken in the final scene.',
    question: `They climbed into bed without speaking. The wife remembered suddenly that she had left the water running in the kitchen, and she rose to turn it off. When she returned, they both laughed softly, because  __________. The lights were off, but they could still sense each other’s presence, hands finding hands in the dark. They did not say any grand final statements, because  __________. Instead, their goodnight was simple and familiar, just as it had always been. In the silence before sleep, each of them must have been thinking about  __________. And when they closed their eyes, there was no fear, only  __________, because they knew that  __________.`
  }];

  const task6Questions = [
    { id: 1, q: 'What is the husband actually trying to find out?', options: { A: 'Whether his wife would be frightened', B: 'Whether she had the same dream and already knows', C: 'Whether she wants to go outside', D: 'Whether she is angry with him' } },
    { id: 2, q: 'What does her reaction suggest?', options: { A: 'She does not believe the world will really end', B: 'She has emotionally prepared for death long before', C: 'She feels the end is natural and not something to resist', D: 'She is hiding her fear to comfort her husband' } }
  ];

  const renderWithInputs = (text, inputs, setInputs) => {
    const parts = text.split('__________');
    return parts.map((part, index) => (
      <span key={index}>
        {part}
        {index < parts.length - 1 && (
          <input
            type="text"
            className="taskfour-input"
            placeholder={`(${index + 1})`}
            value={inputs[index] || ''}
            onChange={(e) => {
              const newInputs = [...inputs];
              newInputs[index] = e.target.value;
              setInputs(newInputs);
            }}
          />
        )}
      </span>
    ));
  };

  const handleSubmit = () => {
    if (!userName.trim()) {
      alert("Iltimos ismingizni kiriting!");
      return;
    }

    // TeacherPage'da chiroyli ko'rinishi uchun bitta obyektga yig'amiz
    const finalAnswers = {
      "Task 3 (Emotional)": task3Inputs.join(', ') || 'No answer',
      "Task 4 (Social)": task4Inputs.join(', ') || 'No answer',
      "Task 5 (Final)": task5Inputs.join(', ') || 'No answer',
      "Task 6 (Test Q1)": testAnswers.Q1 || 'No answer',
      "Task 6 (Test Q2)": testAnswers.Q2 || 'No answer'
    };

    const finalData = {
      user: userName,
      answers: finalAnswers,
      level: 'Evaluative', // Siz so'ragan daraja
      taskType: 'Task 1.4-1.6.', // Nuqtali formatda (TeacherPage yashil blok uchun)
      date: new Date().toLocaleString()
    };

    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push(finalData);
    localStorage.setItem('allTests', JSON.stringify(oldData));

    toast.success("Natijalar Task 2 bo'limiga yuborildi!");
    navigate('/teacherPage');
  };

  return (
    <div data-aos="fade-left" className="tasks taskfour4">
      <div className="taskfour4-card">
        
        {/* TASK 3 */}
        {answers1.map(item => (
          <div key={item.id} className="taskfour4-question">
            <div className="answer-1">
              <h3>{item.narrit}</h3>
              <h3>{item.task3}</h3>
              <p>{item.text}</p>
            </div>
            <h2 className="passage-text">
              {renderWithInputs(item.question, task3Inputs, setTask3Inputs)}
            </h2>
          </div>
        ))}

        {/* TASK 4 */}
        {answers2.map(item => (
          <div key={item.id} className="taskfour4-question">
            <div className="answer-1">
              <h3>{item.task}</h3>
              <p>{item.infer}</p>
            </div>
            <h2 className="passage-text">
              {renderWithInputs(item.question, task4Inputs, setTask4Inputs)}
            </h2>
          </div>
        ))}

        {/* TASK 5 */}
        {answers3.map(item => (
          <div key={item.id} className="taskfour4-question">
            <div className="answer-1">
              <h3>{item.task}</h3>
              <p>{item.infer}</p>
            </div>
            <h2 className="passage-text">
              {renderWithInputs(item.question, task5Inputs, setTask5Inputs)}
            </h2>
          </div>
        ))}

        {/* TEST SECTION */}
        <div className="test-section">
          <h3 className="test-title">Task 6. Dialogue interpretation</h3>
          {task6Questions.map((item) => (
            <div key={item.id} className="test-block">
              <p><b>{item.id}. {item.q}</b></p>
              <div className="options-grid">
                {Object.entries(item.options).map(([key, val]) => (
                  <label key={key} className="radio-option">
                    <input 
                      type="radio" 
                      name={`question-${item.id}`} 
                      onChange={() => setTestAnswers({...testAnswers, [`Q${item.id}`]: key})} 
                    />
                    <span>{key}) {val}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="submit-area" style={{textAlign: 'center'}}>
          <input 
            type="text" 
            className="inp" 
            placeholder='What is your name ?' 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className='taskfour4-btn' onClick={handleSubmit} style={{display: 'block', margin: '20px auto'}}>Yuborish</button>
        </div>
      </div>
    </div>
  )
}

export default Taskfour4;