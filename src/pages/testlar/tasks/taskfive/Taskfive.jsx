import '../../test.css' 
import './taskfive.css'
import { useState } from 'react' 
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"; 
import { BOT_1 } from "../../../../telegramConfig"; 

const Taskfive = () => {
  const [userName, setUserName] = useState('');
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (key, value) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (isSubmitted) return toast.info("Siz allaqachon javob yuborgansiz.");
    if (!userName.trim()) return toast.error("Iltimos ismingizni kiriting!");

    let telegramText = `🌟 APPRECIATIVE LEVEL RESULT\n👤 Student: ${userName}\n\n`;
    telegramText += `🖋️ TASK 1: ${userAnswers['task1'] || "N/A"}\n\n`;
    telegramText += `⚖️ TASK 2.1: ${userAnswers['t2_justice'] || "N/A"}\n`;
    telegramText += `🛡️ TASK 2.2: ${userAnswers['t2_moral'] || "N/A"}\n`;
    telegramText += `📰 TASK 2.3: ${userAnswers['t2_news'] || "N/A"}\n`;
    telegramText += `🌏 TASK 2.4: ${userAnswers['t2_culture'] || "N/A"}\n\n`;
    telegramText += `✉️ TASK 3: ${userAnswers['task3'] || "N/A"}\n\n`;
    telegramText += `📊 TASK 4:\nBEFORE: ${userAnswers['t4_before'] || "N/A"}\nAFTER: ${userAnswers['t4_after'] || "N/A"}\nREFL: ${userAnswers['t4_reflection'] || "N/A"}`;

    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);
    toast.success("Barcha topshiriqlar muvaffaqiyatli yuborildi!");
    setIsSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    borderRadius: '10px',
    border: '1.5px solid #d1d8e0',
    fontSize: '15px',
    lineHeight: '1.6',
    outline: 'none',
    marginTop: '15px',
    minHeight: '180px',
    fontFamily: 'inherit',
    backgroundColor: isSubmitted ? '#f1f2f6' : '#fff'
  };

  return (
    <div data-aos="fade-left" className='tasks taskfive'>
      <div className="taskfive-card">
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#2c3e50', fontSize: '26px' }}>Appreciative Level</h1>
        </div>

        {/* --- TASK 1 --- */}
        <div className="taskfive-question" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '40px' }}>
          <h3 style={{ color: '#3498db', marginBottom: '10px' }}>Task 1. Creative Rewriting of a Scene</h3>
          <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
            Imagine you are inside the story and you can change how it unfolds. Choose one scene and rewrite it from a different point of view or change the decision.
            <br /><strong>Options:</strong> A) Owen Lewis’s perspective. B) Bosengate chooses to punish the soldier. C) Kathleen challenges his feelings of mercy.
          </p>
          <textarea 
            style={{ ...inputStyle, minHeight: '300px' }}
            placeholder="Your version should show: What would the characters feel? Changes in dialogue and emotional tone. A new ending: tragic, hopeful, or ironic?"
            value={userAnswers['task1'] || ''}
            disabled={isSubmitted}
            onChange={(e) => handleChange('task1', e.target.value)}
          />
        </div>

        {/* --- TASK 2 --- */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ color: '#2c3e50' }}>Task 2. Text – to – World Exercises</h2>
        </div>

        <div className="taskfive-question" style={{ backgroundColor: '#fdfdfd', padding: '20px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '25px' }}>
          <h3 style={{ color: '#2980b9' }}>⚖️ 2.1 Justice and Global Legal Systems</h3>
          <p style={{ fontSize: '14px', color: '#555' }}>Compare the courtroom in the story with real-world issues like fairness, jury bias, or corruption. <strong>Guiding question:</strong> How do Bosengate’s doubts help us understand the challenges of justice today?</p>
          <textarea style={inputStyle} placeholder="Your analysis here..." value={userAnswers['t2_justice'] || ''} disabled={isSubmitted} onChange={(e) => handleChange('t2_justice', e.target.value)} />
        </div>

        <div className="taskfive-question" style={{ backgroundColor: '#fdfdfd', padding: '20px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '25px' }}>
          <h3 style={{ color: '#27ae60' }}>🛡️ 2.2 Moral Responsibility in Society</h3>
          <p style={{ fontSize: '14px', color: '#555' }}>Connect Bosengate’s conscience to global issues like whistleblowers or unjust regimes. <strong>Guiding question:</strong> Are people obligated to speak up when morals oppose social expectations?</p>
          <textarea style={inputStyle} placeholder="Your reflection here..." value={userAnswers['t2_moral'] || ''} disabled={isSubmitted} onChange={(e) => handleChange('t2_moral', e.target.value)} />
        </div>

        <div className="taskfive-question" style={{ backgroundColor: '#fdfdfd', padding: '20px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '25px' }}>
          <h3 style={{ color: '#e67e22' }}>📰 2.3 Text-News Connections</h3>
          <p style={{ fontSize: '14px', color: '#555' }}>Think about recent news regarding human rights violations or controversial trials. <strong>Guiding question:</strong> How does the story foreshadow moral debates encountered today?</p>
          <textarea style={inputStyle} placeholder="Compare with a real-world news case..." value={userAnswers['t2_news'] || ''} disabled={isSubmitted} onChange={(e) => handleChange('t2_news', e.target.value)} />
        </div>

        <div className="taskfive-question" style={{ backgroundColor: '#fdfdfd', padding: '20px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '25px' }}>
          <h3 style={{ color: '#8e44ad' }}>🌏 2.4 Cultural Interpretation Reflection</h3>
          <p style={{ fontSize: '14px', color: '#555' }}>How would readers in different political realities react to this story? <strong>Guiding question:</strong> What would be the interpretation of readers depending on their cultural realities?</p>
          <textarea style={inputStyle} placeholder="Your cultural analysis here..." value={userAnswers['t2_culture'] || ''} disabled={isSubmitted} onChange={(e) => handleChange('t2_culture', e.target.value)} />
        </div>

        <hr style={{ margin: '40px 0', border: '0', borderTop: '2px dashed #cbd5e0' }} />

        {/* --- TASK 3 --- */}
        <div className="taskfive-question" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '40px' }}>
          <h3 style={{ color: '#3498db', marginBottom: '10px' }}>Task 3. A Letter to the Author or Main Character</h3>
          <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
            Write a letter to <strong>John Galsworthy</strong> or <strong>the Juryman</strong>, expressing your thoughts, feelings, and reflections about the story’s moral message. 
            <br />Include: Greeting → Impressions → Connection to worldview → Praise/Critique → Conclusion.
          </p>
          <textarea 
            style={{ ...inputStyle, minHeight: '300px' }}
            placeholder="Dear Mr. Galsworthy... / Dear Juryman..."
            value={userAnswers['task3'] || ''}
            disabled={isSubmitted}
            onChange={(e) => handleChange('task3', e.target.value)}
          />
        </div>

        {/* --- TASK 4 --- */}
        <div className="taskfive-question" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '12px', border: '1px solid #eee', marginBottom: '40px' }}>
          <h3 style={{ color: '#3498db', marginBottom: '10px' }}>Task 4. Before-and-After Worldview Chart</h3>
          <p style={{ color: '#555', fontSize: '14px', marginBottom: '15px' }}>Compare your beliefs about justice, duty, and compassion before and after reading the story.</p>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: '600', fontSize: '13px' }}>Column A: My views BEFORE reading</p>
              <textarea style={{ ...inputStyle, minHeight: '150px' }} placeholder="What you thought previously..." value={userAnswers['t4_before'] || ''} disabled={isSubmitted} onChange={(e) => handleChange('t4_before', e.target.value)} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: '600', fontSize: '13px' }}>Column B: My views AFTER reading</p>
              <textarea style={{ ...inputStyle, minHeight: '150px' }} placeholder="How the story reshaped your thinking..." value={userAnswers['t4_after'] || ''} disabled={isSubmitted} onChange={(e) => handleChange('t4_after', e.target.value)} />
            </div>
          </div>
          
          <p style={{ fontWeight: '600', fontSize: '13px', marginTop: '20px' }}>Reflection (5–7 sentences):</p>
          <p style={{ fontSize: '12px', color: '#777', fontStyle: 'italic' }}>What shift in perspective can you trace? Why do you think this shift happened?</p>
          <textarea 
            style={{ ...inputStyle, minHeight: '120px' }}
            placeholder="I began to see justice as more than just laws..."
            value={userAnswers['t4_reflection'] || ''}
            disabled={isSubmitted}
            onChange={(e) => handleChange('t4_reflection', e.target.value)}
          />
        </div>

        {/* --- SUBMIT BOX --- */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <input type="text" className="inp" placeholder='What is your name ?' value={userName} disabled={isSubmitted} onChange={(e) => setUserName(e.target.value)} />
          <button className='taskfive-btn' onClick={handleSubmit} style={{ display: 'block', margin: '20px auto 0 auto', opacity: isSubmitted ? 0.7 : 1 }}>
            {isSubmitted ? "Yuborildi" : "Yuborish"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Taskfive;