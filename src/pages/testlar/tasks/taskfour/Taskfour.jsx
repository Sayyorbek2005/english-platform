import '../../test.css'
import './taskfour.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"; 
import { BOT_1 } from "../../../../telegramConfig"; 

const Taskfour = () => {
  const [userName, setUserName] = useState('');
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      title: "1. Law vs Leniency (Qonun va Rahmdillik)",
      clue: "Bosengate strictly asks mercy for the soldier, though the law and punishment are determined for committing suicide.",
      question: "What is your opinion in this case? Is showing mercy more important than strict legal duties?"
    },
    {
      id: 2,
      title: "2. Justice vs Law (Adolat va Qonun)",
      clue: "Another juror: 'According to the law, committing suicide is a crime'. Bosengate replies: 'Justice is sometimes different from law'.",
      question: "Do you agree with Bosengate’s opinion about justice? Do you think that following the law could sometimes fail to bring justice?"
    },
    {
      id: 3,
      title: "3. Emotional Interference (Hissiyotlarning ta'siri)",
      clue: "Bosengate brings his own children to mind while observing Owen’s suffering.",
      question: "To what extent is it true that personal experience influences the decisions related to the law and justice system?"
    }
  ];

  const handleChange = (qKey, value) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qKey]: value }));
  };

  const handleSubmit = () => {
    if (isSubmitted) return toast.info("Siz allaqachon javob yuborgansiz.");
    if (!userName.trim()) return toast.error("Iltimos ismingizni kiriting!");

    let telegramText = `🧑‍🎓 EVALUATIVE LEVEL RESULT\n👤 Student: ${userName}\n\n`;
    
    telegramText += `📊 TASK 1: ANALYSIS\n`;
    questions.forEach((q) => {
      telegramText += `📌 Q${q.id}: ${userAnswers[`Q${q.id}`] || "N/A"}\n`;
    });

    telegramText += `\n📝 TASK 2: STORY REVIEW\n${userAnswers['T2_Review'] || "N/A"}\n`;
    telegramText += `\n📢 TASK 3: DEBATE POINT\n${userAnswers['T3_Debate'] || "N/A"}\n`;
    telegramText += `\n🖋️ TASK 4: CRITICAL ESSAY\n${userAnswers['T4_Essay'] || "N/A"}\n`;

    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);
    toast.success("Hamma topshiriqlar muvaffaqiyatli yuborildi!");
    setIsSubmitted(true);
  };

  // Textarea uchun chiroyli dizayn
  const inputStyle = {
    width: '100%',
    padding: '15px',
    borderRadius: '10px',
    border: '1.5px solid #d1d8e0',
    fontSize: '15px',
    lineHeight: '1.6',
    outline: 'none',
    marginTop: '10px',
    fontFamily: 'inherit',
    backgroundColor: isSubmitted ? '#f1f2f6' : '#fff',
    transition: 'border-color 0.3s'
  };

  return (
    <div data-aos="fade-left" className='tasks taskfour'>
      <div className="taskfour-card">
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#2c3e50', fontSize: '28px' }}>Evaluative Level</h1>
        </div>

        {/* --- TASK 1: ANALYSIS --- */}
        <h2 style={{ color: '#2c3e50', marginBottom: '25px', borderBottom: '2px solid #3498db', display: 'inline-block' }}>Task 1. Analysis Questions</h2>
        {questions.map((item) => (
          <div key={item.id} className="taskfour-question" style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#fdfdfd', borderRadius: '10px' }}>
            <h4 style={{ color: '#2980b9' }}>{item.title}</h4>
            <p style={{ fontSize: '14px', color: '#636e72', fontStyle: 'italic' }}>Context: {item.clue}</p>
            <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{item.question}</p>
            <textarea 
              className='taskfour-input' 
              style={inputStyle}
              placeholder='Your answer...'
              value={userAnswers[`Q${item.id}`] || ''}
              disabled={isSubmitted}
              onChange={(e) => handleChange(`Q${item.id}`, e.target.value)}
            />
          </div>
        ))}

        <hr style={{ margin: '40px 0', opacity: '0.2' }} />

        {/* --- TASK 2: STORY REVIEW --- */}
        <div className="taskfour-question">
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Task 2. Story Review Writing</h2>
          <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', fontSize: '14px', border: '1px solid #eee', lineHeight: '1.6', marginBottom: '15px' }}>
            <strong>Guidelines:</strong> Intro (Title, Author, Summary, Main Point), Key Points Evaluation (Themes, Characters, Style, Emotional Influence), Personal Outcomes (Experience, Law vs Justice), and Conclusion.
          </div>
          <textarea 
            className='taskfour-input' 
            style={{ ...inputStyle, minHeight: '250px' }}
            placeholder='Write your review here...'
            value={userAnswers['T2_Review'] || ''}
            disabled={isSubmitted}
            onChange={(e) => handleChange('T2_Review', e.target.value)}
          />
        </div>

        <hr style={{ margin: '40px 0', opacity: '0.2' }} />

        {/* --- TASK 3: DEBATE --- */}
        <div className="taskfour-question">
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Task 3. Class Debate</h2>
          <p style={{ fontWeight: 'bold', color: '#e67e22' }}>Motion: “Leniency, not punishment, is the true way to justice”</p>
          
          <div style={{ display: 'flex', gap: '20px', marginTop: '15px', marginBottom: '15px' }}>
            <div style={{ flex: 1, backgroundColor: '#e8f5e9', padding: '15px', borderRadius: '10px', fontSize: '13px' }}>
              <strong style={{ color: '#2e7d32' }}>Team FOR (Mercy):</strong>
              <p>Argue mental strain, human-centered justice. Evidence: bandaged wrist, Bosengate’s thoughts, final judge's sentence.</p>
            </div>
            <div style={{ flex: 1, backgroundColor: '#ffebee', padding: '15px', borderRadius: '10px', fontSize: '13px' }}>
              <strong style={{ color: '#c62828' }}>Team AGAINST (Punishment):</strong>
              <p>Violation of law, prevents indiscipline. Evidence: strict judge, cowardice arguments, wartime discipline.</p>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#555', fontStyle: 'italic' }}>Discussion: Does mercy undermine discipline? Is suffering more important than duty? Was the judge's compromise fair?</p>
          <textarea 
            className='taskfour-input' 
            style={{ ...inputStyle, minHeight: '150px' }}
            placeholder='Your debate arguments...'
            value={userAnswers['T3_Debate'] || ''}
            disabled={isSubmitted}
            onChange={(e) => handleChange('T3_Debate', e.target.value)}
          />
        </div>

        <hr style={{ margin: '40px 0', opacity: '0.2' }} />

        {/* --- TASK 4: CRITICAL ESSAY --- */}
        <div className="taskfour-question">
          <h2 style={{ color: '#2c3e50', marginBottom: '15px' }}>Task 4. Critical Essay</h2>
          <div style={{ backgroundColor: '#fffbe6', padding: '20px', borderRadius: '10px', fontSize: '14px', border: '1px solid #ffe58f', lineHeight: '1.6', marginBottom: '15px' }}>
            <p><strong>Explain:</strong> Evaluate ideas, themes, and characters. What message does the story deliver?</p>
            <p><strong>Structure:</strong> 
              <br/>• <strong>Intro:</strong> Brief explanation + Thesis statement.
              <br/>• <strong>Body:</strong> Topic sentence + Evidence (examples/quotes) + Evaluation.
              <br/>• <strong>Conclusion:</strong> Recap + Wider perspective (life, justice, humanity).
            </p>
          </div>
          <textarea 
            className='taskfour-input' 
            style={{ ...inputStyle, minHeight: '350px' }}
            placeholder='Write your critical essay here...'
            value={userAnswers['T4_Essay'] || ''}
            disabled={isSubmitted}
            onChange={(e) => handleChange('T4_Essay', e.target.value)}
          />
        </div>

        {/* --- SUBMIT BOX (DESIGN UNCHANGED) --- */}
        <div className="submit-box">
          <input 
            type="text" 
            className="inp" 
            placeholder='What is your name ?' 
            value={userName}
            disabled={isSubmitted}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button 
            className='taskfour-btn' 
            onClick={handleSubmit}
          >
            {isSubmitted ? "Yuborildi" : "Yuborish"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Taskfour;