import './taskfour4.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { sendToTelegram } from '../../../../telegram'
import { BOT_1 } from '../../../../telegramConfig'

const Taskfour4 = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [task1Review, setTask1Review] = useState('');
  const [task2Position, setTask2Position] = useState('');
  const [task3Essay, setTask3Essay] = useState('');

  const handleSubmit = () => {
    if (isSubmitted) return toast.info("Siz allaqachon javob yuborgansiz.");
    if (!userName.trim()) return toast.error("Iltimos ismingizni kiriting!");
    if (!task1Review.trim() || !task2Position.trim() || !task3Essay.trim()) {
      return toast.error("Iltimos barcha topshiriqlarni to'liq to'ldiring!");
    }

    let telegramText = `🧑‍🎓 EVALUATIVE LEVEL RESULTS\n👤 Ism: ${userName}\n\n`;
    telegramText += `📝 TASK 1 (Critical Review):\n${task1Review}\n\n`;
    telegramText += `📝 TASK 2 (Position Paper):\n${task2Position}\n\n`;
    telegramText += `📝 TASK 3 (Critical Essay):\n${task3Essay}`;

    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);
    toast.success("Barcha javoblar muvaffaqiyatli yuborildi!");
    setIsSubmitted(true);
  };

  const tableStyle = { width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', fontSize: '14px' };
  const tdStyle = { padding: '12px', border: '1px solid #dee2e6' };
  const thStyle = { padding: '12px', border: '1px solid #dee2e6', backgroundColor: '#f1f2f6', textAlign: 'left' };
  const textareaStyle = { width: '100%', padding: '15px', borderRadius: '12px', border: '2px solid #d1d8e0', outline: 'none', fontFamily: 'inherit', marginTop: '15px' };

  return (
    <div data-aos="fade-left" className="tasks taskfour4">
      <div className="taskfour4-card">
        
        <div className="answer-1" style={{textAlign: 'center', marginBottom: '40px'}}>
        </div>

        {/* --- TASK 1 --- */}
        <div style={{marginBottom: '60px'}}>
            <div style={{marginBottom: '20px', padding: '15px', borderLeft: '5px solid #3498db', backgroundColor: '#f0f7ff'}}>
                <h4 style={{margin: '0 0 10px 0'}}>Task 1. Write a short critical review (250–350 words) of “The Last Night of the World” by Ray Bradbury.</h4>
                <p style={{margin: '0', color: '#555'}}>Your review must include an evaluation, supported by examples from the text. Avoid retelling the plot.</p>
            </div>

            <div style={{overflow: 'hidden', borderRadius: '12px', border: '1px solid #dee2e6'}}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Section</th>
                            <th style={thStyle}>What to write</th>
                            <th style={thStyle}>Evaluative Focus & Your Input</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style={tdStyle}><strong>1. Introduction</strong></td><td style={tdStyle}>State your overall judgement of the story</td><td style={tdStyle}>Is it powerful, meaningful and subtle?</td></tr>
                        <tr><td style={tdStyle}><strong>2. The theme</strong></td><td style={tdStyle}>Identify the central idea and explain how effectively Bradbury conveys them</td><td style={tdStyle}>How well does the story express its message?</td></tr>
                        <tr><td style={tdStyle}><strong>3. Character portrayal</strong></td><td style={tdStyle}>Evaluate how realistically and meaningfully the characters are represented</td><td style={tdStyle}>Are their reactions believable? Emotionally moving?</td></tr>
                        <tr><td style={tdStyle}><strong>4. Style and Tone</strong></td><td style={tdStyle}>Comment on Bradbury’s writing style (Simple? Poetic? Quiet?)</td><td style={tdStyle}>Does the tone enhance the emotional effect?</td></tr>
                        <tr><td style={tdStyle}><strong>5. Conclusion</strong></td><td style={tdStyle}>Explain how the story effected you personally and why?</td><td style={tdStyle}>What lasting effect does the story leave?</td></tr>
                    </tbody>
                </table>
            </div>
            <textarea 
                placeholder="Write your critical review here..." 
                style={{...textareaStyle, minHeight: '220px'}}
                disabled={isSubmitted} value={task1Review}
                onChange={(e) => setTask1Review(e.target.value)}
            />
        </div>

        {/* --- TASK 2 --- */}
        <div style={{marginBottom: '60px'}}>
            <div style={{marginBottom: '20px', padding: '15px', borderLeft: '5px solid #e67e22', backgroundColor: '#fff9f4'}}>
                <h4 style={{margin: '0 0 10px 0'}}>Task 2. Position Paper: Is the Couple’s Calm Response Justified?</h4>
                <p style={{margin: '0', color: '#555'}}>Write a position paper (300–400 words) defending your stance. Take a clear position → defend it → address opposing viewpoints.</p>
            </div>

            <div style={{overflow: 'hidden', borderRadius: '12px', border: '1px solid #dee2e6'}}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Section</th>
                            <th style={thStyle}>What students do</th>
                            <th style={thStyle}>Evaluative level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style={tdStyle}><strong>Claim (Thesis)</strong></td><td style={tdStyle}>State your position clearly</td><td style={tdStyle}>Judging/taking a stance</td></tr>
                        <tr><td style={tdStyle}><strong>Reasoning</strong></td><td style={tdStyle}>Explain why this view</td><td style={tdStyle}>Rational justification</td></tr>
                        <tr><td style={tdStyle}><strong>Support from text</strong></td><td style={tdStyle}>Use a scene, dialogue line, or behaviour as evidence</td><td style={tdStyle}>Using criteria to defend judgement</td></tr>
                        <tr><td style={tdStyle}><strong>Counterargument</strong></td><td style={tdStyle}>Recognize an alternate interpretation</td><td style={tdStyle}>Comparing viewpoints</td></tr>
                        <tr><td style={tdStyle}><strong>Rebuttal</strong></td><td style={tdStyle}>Show why your stance is stronger or more valid</td><td style={tdStyle}>Defending evaluation</td></tr>
                        <tr><td style={tdStyle}><strong>Conclusion</strong></td><td style={tdStyle}>Restate your final position</td><td style={tdStyle}>Synthesis and evaluative closure</td></tr>
                    </tbody>
                </table>
            </div>
            <textarea 
                placeholder="Write your position paper here..." 
                style={{...textareaStyle, minHeight: '220px'}}
                disabled={isSubmitted} value={task2Position}
                onChange={(e) => setTask2Position(e.target.value)}
            />
        </div>

        {/* --- TASK 3 --- */}
        <div style={{marginBottom: '40px'}}>
            <div style={{marginBottom: '20px', padding: '15px', borderLeft: '5px solid #27ae60', backgroundColor: '#f1fcf4'}}>
                <h4 style={{margin: '0 0 10px 0'}}>Task 3. Critical Essay (350–500 words)</h4>
                <p style={{margin: '0', color: '#555'}}>Evaluate the effectiveness of Ray Bradbury’s use of ordinary domestic actions to express calm acceptance.</p>
            </div>

            <div style={{overflow: 'hidden', borderRadius: '12px', border: '1px solid #dee2e6'}}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Section</th>
                            <th style={thStyle}>What to write</th>
                            <th style={thStyle}>Evaluative work expected</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style={tdStyle}><strong>Introduction</strong></td><td style={tdStyle}>Present your thesis: Is the calm, ordinary ending effective?</td><td style={tdStyle}>Make a judgment.</td></tr>
                        <tr><td style={tdStyle}><strong>Body paragraph 1</strong></td><td style={tdStyle}>Discuss one ordinary action (e.g., drinking coffee)</td><td style={tdStyle}>Explain how it conveys meaning</td></tr>
                        <tr><td style={tdStyle}><strong>Body paragraph 2</strong></td><td style={tdStyle}>Discuss another everyday moment (washing dishes/bedtime)</td><td style={tdStyle}>Evaluate emotional impact.</td></tr>
                        <tr><td style={tdStyle}><strong>Counterpoint</strong></td><td style={tdStyle}>Consider different interpretation (e.g., "unrealistic")</td><td style={tdStyle}>Compare viewpoints.</td></tr>
                        <tr><td style={tdStyle}><strong>Conclusion</strong></td><td style={tdStyle}>Reaffirm evaluation and lasting effect</td><td style={tdStyle}>Synthesize insight.</td></tr>
                    </tbody>
                </table>
            </div>
            <textarea 
                placeholder="Write your critical essay here..." 
                style={{...textareaStyle, minHeight: '280px'}}
                disabled={isSubmitted} value={task3Essay}
                onChange={(e) => setTask3Essay(e.target.value)}
            />
        </div>

        {/* SUBMIT AREA */}
        <div className="submit-area" style={{textAlign: 'center', marginTop: '40px'}}>
          <input 
            disabled={isSubmitted} type="text" className="inp" 
            placeholder='What is your name ?' value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button 
            className='taskfour4-btn' onClick={handleSubmit} 
            style={{ display: 'block', margin: '25px auto', opacity: isSubmitted ? 0.7 : 1, cursor: 'pointer' }}
          >
            {isSubmitted ? "Yuborildi" : "Yuborish"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Taskfour4;