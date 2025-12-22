import './taskthree3.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Taskthree3 = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  
  // Statelar
  const [ans1, setAns1] = useState('');
  const [ans2, setAns2] = useState('');
  const [ans3, setAns3] = useState('');
  const [ans4, setAns4] = useState('');
  const [ans5, setAns5] = useState('');
  const [ans6A, setAns6A] = useState('');
  const [ans6B, setAns6B] = useState('');

  const handleSubmit = () => {
    if (!userName.trim()) {
      alert("Iltimos ismingizni kiriting!");
      return;
    }

    // TeacherPage Object.entries orqali o'qishi uchun obyekt shaklida yuboramiz
    const userAnswers = {
      "1. Critical Review": ans1 || 'no answer',
      "2. Position Paper": ans2 || 'no answer',
      "3. Debate Prep": ans3 || 'no answer',
      "4. Creative Writing": ans5 || 'no answer',
      "5. Letter to Author": ans6A || 'no answer',
      "6. Letter to Character": ans6B || 'no answer'
    };

    const finalData = {
      user: userName,
      answers: userAnswers,
      level: 'Inferential', // Siz aytgan daraja
      taskType: 'Task 1.3', // TeacherPage'da Task 2 (yashil blok)ga tushishi uchun nuqtali Task 1.x bo'lishi shart
      date: new Date().toLocaleString()
    };

    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push(finalData);
    localStorage.setItem('allTests', JSON.stringify(oldData));
    toast.success("Natijalar Task 2 bo'limiga yuborildi!");
    navigate('/teacherPage');
  };

  // Qatorlar orasini ochish va chiziq bilan ajratish uchun stil
  const cellStyle = { 
    lineHeight: '1.6', 
    minHeight: '100px', 
    display: 'flex', 
    alignItems: 'center', 
    padding: '15px 10px',
    borderBottom: '1px solid #eee',
    fontSize: '15px',
    margin: '0'
  };

  const headerStyle = {
    ...cellStyle,
    fontWeight: 'bold',
    backgroundColor: '#f1f2f6',
    borderBottom: '2px solid #2f3542',
    minHeight: '50px'
  };

  return (
    <div data-aos="fade-left" className="tasks taskthree3">
      <div className="taskthree3-card">
        
        {/* TASK 1.3: Critical Review */}
        <div className="taskthree3-question">
          <h1>Instruction:</h1>
          <p>Write a short critical review (250–350 words) of “The Last Night of the World” by Ray Bradbury. Your review must include an evaluation, supported by examples from the text. Avoid retelling the plot.</p>
          <h3>Review Structure</h3>
          <div className='jadval' style={{border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden'}}>
            <div className='jadval-1'>
              <h2 style={headerStyle}>Section</h2>
              <h2 style={cellStyle}>Introduction</h2>
              <h2 style={cellStyle}>The theme</h2>
              <h2 style={cellStyle}>Character portrayal</h2>
              <h2 style={cellStyle}>Style and Tone</h2>
              <h2 style={cellStyle}>Personal response/conclusion</h2>
            </div>
            <div className="jadval-2">
              <h2 style={headerStyle}>What to write</h2>
              <h2 style={cellStyle}>State you overall judgement of the story</h2>
              <h2 style={cellStyle}>Identify the central idea and explain how effectively Bradbury conveys them</h2>
              <h2 style={cellStyle}>Evaluate how realistically and meaningfully the characters are represented</h2>
              <h2 style={cellStyle}>Comment on Bradbury’s writing style (Simple? Poetic? Quiet?)</h2>
              <h2 style={cellStyle}>Explain how the story effected you personally and why?</h2>
            </div>
            <div className="jadval-3">
              <h2 style={headerStyle}>Evaluative Focus</h2>
              <h2 style={cellStyle}>Is it powerful, meaningful and subtle?</h2>
              <h2 style={cellStyle}>How well does the story express its message?</h2>
              <h2 style={cellStyle}>Are their reactions believable? Emotionally moving?</h2>
              <h2 style={cellStyle}>Does the tone enhance the emotional effect?</h2>
              <h2 style={cellStyle}>What lasting effect does the story leave?</h2>
            </div>
          </div>
          <textarea className='taskone3-input' placeholder='Write your review...' value={ans1} onChange={(e) => setAns1(e.target.value)}></textarea>
        </div>

        {/* TASK 1.4: Position Paper */}
        <div className="taskthree3-question">
          <h1>Position Paper: Is the Couple’s Calm Response Justified?</h1>
          <p>Write a position paper (300–400 words) defending your stance. Take a clear position → defend it → address opposing viewpoints.</p>
          <div className='jadval' style={{border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden'}}>
            <div className='jadval-1'>
              <h2 style={headerStyle}>Section</h2>
              <h2 style={cellStyle}>Claim (Thesis)</h2>
              <h2 style={cellStyle}>Reasoning</h2>
              <h2 style={cellStyle}>Support from text</h2>
              <h2 style={cellStyle}>Counterargument</h2>
              <h2 style={cellStyle}>Rebuttal</h2>
              <h2 style={cellStyle}>Conclusion</h2>
            </div>
            <div className="jadval-2">
              <h2 style={headerStyle}>What students do</h2>
              <h2 style={cellStyle}>State your position clearly</h2>
              <h2 style={cellStyle}>Explain why this view</h2>
              <h2 style={cellStyle}>Use a scene, dialogue line, or behaviour as evidence</h2>
              <h2 style={cellStyle}>Recognize an alternate interpretation</h2>
              <h2 style={cellStyle}>Show why your stance is stronger or more valid</h2>
              <h2 style={cellStyle}>Restate your final position</h2>
            </div>
            <div className="jadval-3">
              <h2 style={headerStyle}>Evaluative level</h2>
              <h2 style={cellStyle}>Judging/taking a stance</h2>
              <h2 style={cellStyle}>Rational justification</h2>
              <h2 style={cellStyle}>Using criteria to defend judgement</h2>
              <h2 style={cellStyle}>Comparing viewpoints</h2>
              <h2 style={cellStyle}>Defending evaluation</h2>
              <h2 style={cellStyle}>Synthesis and evaluative closure</h2>
            </div>
          </div>
          <textarea className='taskone3-input' placeholder='Write your position paper...' value={ans2} onChange={(e) => setAns2(e.target.value)}></textarea>
        </div>

        {/* Debate Preparation */}
        <div className="taskthree3-question">
          <h3>Debate Preparation Organizer:</h3>
          <div className='jadval' style={{border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden'}}>
            <div className='jadval-1'>
              <h2 style={headerStyle}>Step</h2>
              <h2 style={cellStyle}>Team thesis statement</h2>
              <h2 style={cellStyle}>Three supporting arguments</h2>
              <h2 style={cellStyle}>Textual evidence</h2>
              <h2 style={cellStyle}>Counterargument strategy</h2>
              <h2 style={cellStyle}>Rebuttal points</h2>
            </div>
            <div className="jadval-2">
              <h2 style={headerStyle}>What students prepare</h2>
              <h2 style={cellStyle}>Short, strong claim</h2>
              <h2 style={cellStyle}>Based on text, psychology, or logic</h2>
              <h2 style={cellStyle}>Lines of arguments or described actions</h2>
              <h2 style={cellStyle}>What the other side might say</h2>
              <h2 style={cellStyle}>How to weaken opposing claims</h2>
            </div>
            <div className="jadval-3">
              <h2 style={headerStyle}>Purpose</h2>
              <h2 style={cellStyle}>Establish stance</h2>
              <h2 style={cellStyle}>Build case</h2>
              <h2 style={cellStyle}>Ground argument</h2>
              <h2 style={cellStyle}>Anticipate opposition</h2>
              <h2 style={cellStyle}>Defend stance</h2>
            </div>
          </div>
          <textarea className='taskone3-input' placeholder='Prepare your debate...' value={ans3} onChange={(e) => setAns3(e.target.value)}></textarea>
        </div>

        {/* 6. Letter Options */}
        <div className="taskthree3-question">
          <h1>Letter of Appreciation (Choose Option A or B)</h1>
          <div className='answer-1' style={{border: '1px solid orange', padding: '15px', borderRadius: '10px', marginBottom: '20px'}}>
            <h3 style={{color: '#e67e22'}}>Option A — Letter to Ray Bradbury</h3>
            <p style={{fontSize: '14px'}}>Explain: Emotional impression, moving details, what story says about life, and style appreciation.</p>
            <textarea className='taskone3-input' placeholder='Letter to Author...' value={ans6A} onChange={(e) => setAns6A(e.target.value)}></textarea>
          </div>
          <div className='answer-1' style={{border: '1px solid #3498db', padding: '15px', borderRadius: '10px'}}>
            <h3 style={{color: '#2980b9'}}>Option B — Letter to a Character</h3>
            <p style={{fontSize: '14px'}}>Explain: Emotional state, how their calmness affected you, and lessons learned from them.</p>
            <textarea className='taskone3-input' placeholder='Letter to Character...' value={ans6B} onChange={(e) => setAns6B(e.target.value)}></textarea>
          </div>
        </div>

        <div className="submit-area" style={{padding: '20px 0', textAlign: 'center'}}>
          <input type="text" className="inp" placeholder='Your Name' value={userName} onChange={(e) => setUserName(e.target.value)} />
          <button 
            className='taskthree3-btn' 
            onClick={handleSubmit}
            style={{ display: 'block', margin: '20px auto 0 auto' }}
          >
            Yuborish
          </button>
        </div>
      </div>
    </div>
  )
}

export default Taskthree3;