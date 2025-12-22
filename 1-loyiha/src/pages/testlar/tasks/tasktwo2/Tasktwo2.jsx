import './tasktwo2.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Tasktwo2 = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  
  const [userAnswers, setUserAnswers] = useState({
    ans1: '', ans2: '', ans3: '', ans4: '',
    ans5: '', ans6: '', ans7: '', ans8: ''
  });

  const handleInputChange = (key, value) => {
    setUserAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!userName.trim()) {
      alert("Iltimos ismingizni kiriting!");
      return;
    }

    // TeacherPage kodingizdagi .includes("Task 1.") filtriga tushib, 
    // Task 2 blokida ko'rinishi uchun taskType ga nuqta qo'shildi.
    const finalData = {
      user: userName,
      answers: userAnswers,
      level: 'Reorganization', 
      taskType: 'Task 1.2', 
      date: new Date().toLocaleString()
    };

    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push(finalData);
    localStorage.setItem('allTests', JSON.stringify(oldData));

    toast.success("Natijalar Task 2 bo'limiga yuborildi!");
    navigate('/teacherPage');
  };

  const [answerstwo] = useState([
    { id: 1, key: 'ans1', title: 'Early Evening Conversation:', q: ['The man pours himself coffee while their two daughters play on the rug.', 'The husband asks his wife what she would do if this were the last night of the world.', 'The wife suggests possibilities like war, atomic bombs, or germ warfare as the cause.', 'The husband replies that it’s “just the closing of a book,” denying those causes.'] },
    { id: 2, key: 'ans2', title: 'Revelation of the Dream:', q: ['The husband explains that he had a dream in which a voice said everything would stop on Earth.', 'At the office, the husband discovers that his coworker Stan Willis had the exact same dream.', 'The couple realizes nearly everyone has shared this identical end-of-the-world dream.', 'The wife admits she also had the same dream and heard other women talk about it.'] },
    { id: 3, key: 'ans3', title: 'Accepting the News Calmly:', q: ['The wife asks, “Do we deserve this?” upon hearing the world will end.', 'The husband says deserving is irrelevant; things just didn’t work out.', 'Their children laugh and play innocently in the background.', 'The couple stays calm despite the gravity of the situation.'] },
    { id: 4, key: 'ans4', title: 'Reflections on Human Behavior:', q: ['The husband says he thought people would be “screaming in the streets”.', 'The wife notes that no one is panicking; it feels logical.', 'The husband muses that he won’t miss anything except his wife and daughters.', 'The wife concludes there’s nothing else to do but continue as normal.'] },
    { id: 5, key: 'ans5', title: 'Considering Others and ‘Why Tonight’:', q: ['They imagine people everywhere doing ordinary things.', 'The husband asks, “Why do you suppose it’s tonight?”', 'The wife speculates that it’s simply “time” for the world to end.', 'The husband observes bomber planes that will never reach land.'] },
    { id: 6, key: 'ans6', title: 'Evening Chores and Routine:', q: ['The husband decides to wash the dishes together.', 'They carefully wash and dry the dishes neatly.', 'At 8:30 PM, they tuck their daughters into bed.', 'They leave the bedroom door slightly open with a light on.'] },
    { id: 7, key: 'ans7', title: 'Late-Night Hours:', q: ['The couple sits in the living room reading and talking.', 'They listen to the radio and watch the fireplace.', 'The clock strikes 11:00 and 11:30.', 'They reflect that people everywhere are doing the same.'] },
    { id: 8, key: 'ans8', title: 'Final Moments of the Night:', q: ['The husband finally says “Well,” and kisses his wife.', 'The wife gets out of bed for a moment to turn off the water she left running in the sink.', 'They share a small laugh about the water.', 'They hold hands and say “Good night” for the last time.'] }
  ]);

  return (
    <div data-aos="fade-left" className='tasks tasktwo2'>
      <div className="tasktwo2-card">
        <div className="tasktwo2-question">
          <h2>1. Reordering Events Chronologically</h2>
          <p>Rearrange the events into the correct chronological order (e.g., A/B/D/C).</p>
        </div>

        {answerstwo.map((item) => (
          <div key={item.id} className="tasktwo2-question">
            <div className="answer-1">
              <h2 style={{color: '#2c3e50', marginBottom: '10px'}}>{item.title}</h2>
              <p>A. {item.q[0]}</p>
              <p>B. {item.q[1]}</p>
              <p>C. {item.q[2]}</p>
              <p>D. {item.q[3]}</p>
              <input 
                className='taskone1-input' 
                type="text" 
                placeholder='Sequence (e.g. A/B/D/C)' 
                value={userAnswers[item.key]}
                onChange={(e) => handleInputChange(item.key, e.target.value)}
              />
            </div>
          </div>
        ))}

        <div className="submit-box" style={{marginTop: '30px'}}>
          <input 
            type="text" 
            className="inp" 
            placeholder='What is your name?' 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className='tasktwo2-btn' onClick={handleSubmit}>Yuborish</button>
        </div>
      </div>
    </div>
  )
}

export default Tasktwo2;