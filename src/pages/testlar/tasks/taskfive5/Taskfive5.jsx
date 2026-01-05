import '../../test.css' 
import './taskfive5.css'
import { useState } from 'react' 
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"; 
import { BOT_1 } from "../../../../telegramConfig"; 

const Taskfive = () => {
  const [userName, setUserName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [creativeText, setCreativeText] = useState('');
  const [optionAText, setOptionAText] = useState('');
  const [optionBText, setOptionBText] = useState('');

  const handleSubmit = () => {
    if (isSubmitted) {
      toast.info("Siz allaqachon javob yuborgansiz.");
      return;
    }

    if (!userName.trim()) {
      toast.error("Iltimos ismingizni kiriting!");
      return;
    }

    if (!creativeText.trim()) {
      toast.warning("Iltimos, Task 1 creative topshiriqni to'ldiring!");
      return;
    }

    if (!optionAText.trim() && !optionBText.trim()) {
      toast.warning("Iltimos, Task 2 dan bitta Option tanlab to'ldiring!");
      return;
    }

    let telegramText = `🧑‍🎓 Appreciative Level Result\n👤 Ism: ${userName}\n📘 Level: Appreciative\n📅 Sana: ${new Date().toLocaleString()}\n\n`;
    telegramText += `📝 TASK 1 (Creative Re-Writing):\n${creativeText}\n\n`;
    
    if (optionAText.trim()) {
      telegramText += `✉️ TASK 2 (Option A - Letter to Bradbury):\n${optionAText}\n\n`;
    }
    if (optionBText.trim()) {
      telegramText += `✉️ TASK 2 (Option B - Letter to Character):\n${optionBText}`;
    }

    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);

    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push({
      user: userName,
      task1: creativeText,
      optionA: optionAText,
      optionB: optionBText,
      level: 'Appreciative',
      taskType: 'Task 5',
      date: new Date().toLocaleString()
    });
    localStorage.setItem('allTests', JSON.stringify(oldData));

    toast.success("Javoblar yuborildi!");
    setIsSubmitted(true);
  };

  return (
    <div data-aos="fade-left" className='tasks taskfive'>
      <div className="taskfive-card">
        
        <div className="task-header" style={{textAlign: 'center', marginBottom: '30px'}}>
            <h1 style={{fontSize: '24px', color: '#2c3e50'}}>Exercises for the story “The Last Night of the World” by R.Bradbury</h1>
            <h3 style={{color: '#3498db', marginTop: '10px'}}>Appreciative level</h3>
        </div>

        {/* --- TASK 1 SECTION --- */}
        <div style={{marginBottom: '25px', padding: '20px', borderLeft: '5px solid #3498db', backgroundColor: '#f0f7ff', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{margin: '0 0 12px 0', color: '#2c3e50', fontSize: '18px'}}>Task 1. Creative Re-Writing: Re-Envisioning the Final Night</h4>
            <p style={{margin: '0 0 15px 0', fontSize: '15px', color: '#444', lineHeight: '1.6'}}>
                Choose one key scene from “The Last Night of the World” — for example: 
                <em> The conversation over coffee, Washing the dishes together, Putting the children to bed, </em> or <em> The final “Good night”.</em>
            </p>
            <p style={{margin: '0 0 10px 0', fontSize: '15px', color: '#444', lineHeight: '1.6'}}>
                Re-write the scene from a different perspective, time period, or narrative style, while keeping the emotional tone and meaning of calm acceptance. 
                <strong> Your goal is to preserve the emotional truth, not to change the plot.</strong>
            </p>
        </div>

        <div style={{overflow: 'hidden', borderRadius: '12px', border: '1px solid #dee2e6', marginBottom: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff'}}>
            <thead>
              <tr style={{backgroundColor: '#f1f2f6'}}>
                <th style={{padding: '15px', borderBottom: '2px solid #dee2e6', borderRight: '1px solid #dee2e6', textAlign: 'left', width: '25%', color: '#2c3e50'}}>Option</th>
                <th style={{padding: '15px', borderBottom: '2px solid #dee2e6', borderRight: '1px solid #dee2e6', textAlign: 'left', width: '40%', color: '#2c3e50'}}>Focus</th>
                <th style={{padding: '15px', borderBottom: '2px solid #dee2e6', textAlign: 'left', color: '#2c3e50'}}>Appreciative skill developed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding: '12px', borderBottom: '1px solid #dee2e6', borderRight: '1px solid #dee2e6', fontWeight: 'bold'}}>Change Point of View</td>
                <td style={{padding: '12px', borderBottom: '1px solid #dee2e6', borderRight: '1px solid #dee2e6'}}>Rewrite from the wife’s, children’s, or neighbor’s viewpoint</td>
                <td style={{padding: '12px', borderBottom: '1px solid #dee2e6', fontStyle: 'italic', color: '#666'}}>Sensitivity to perspective & emotional nuance</td>
              </tr>
              <tr>
                <td style={{padding: '12px', borderBottom: '1px solid #dee2e6', borderRight: '1px solid #dee2e6', fontWeight: 'bold'}}>Change Time Period/Setting</td>
                <td style={{padding: '12px', borderBottom: '1px solid #dee2e6', borderRight: '1px solid #dee2e6'}}>Place the same emotional situation in a new cultural or historical context</td>
                <td style={{padding: '12px', borderBottom: '1px solid #dee2e6', fontStyle: 'italic', color: '#666'}}>Recognizing universality of themes</td>
              </tr>
              <tr>
                <td style={{padding: '12px', borderBottom: '1px solid #dee2e6', borderRight: '1px solid #dee2e6', fontWeight: 'bold'}}>Change Narrative Voice/Style</td>
                <td style={{padding: '12px', borderBottom: '1px solid #dee2e6', borderRight: '1px solid #dee2e6'}}>Rewrite in poetic prose, diary entry, dramatic script, or internal monologue</td>
                <td style={{padding: '12px', borderBottom: '1px solid #dee2e6', fontStyle: 'italic', color: '#666'}}>Appreciation of tone and stylistic choices</td>
              </tr>
              <tr>
                <td style={{padding: '12px', borderRight: '1px solid #dee2e6', fontWeight: 'bold'}}>Change Sensory Emphasis</td>
                <td style={{padding: '12px', borderRight: '1px solid #dee2e6'}}>Rewrite using mostly sound, or mostly visual imagery, etc.</td>
                <td style={{padding: '12px', fontStyle: 'italic', color: '#666'}}>Awareness of atmosphere and descriptive choices</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{marginTop: '25px', marginBottom: '50px'}}>
          <label style={{display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#2c3e50'}}>Your Re-written Scene:</label>
          <textarea 
            placeholder="Start re-writing your chosen scene here..." 
            disabled={isSubmitted} value={creativeText}
            onChange={(e) => setCreativeText(e.target.value)}
            style={{width: '100%', minHeight: '350px', padding: '15px', borderRadius: '12px', border: '2px solid #d1d8e0', fontSize: '16px', lineHeight: '1.6', outline: 'none', backgroundColor: isSubmitted ? '#f8f9fa' : '#fff', transition: 'all 0.3s ease', fontFamily: 'inherit', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'}}
          />
        </div>

        {/* --- TASK 2 SECTION --- */}
        <div style={{marginBottom: '25px', padding: '20px', borderLeft: '5px solid #e67e22', backgroundColor: '#fff9f4', borderRadius: '0 8px 8px 0'}}>
            <h4 style={{margin: '0 0 12px 0', color: '#2c3e50', fontSize: '18px'}}>Task 2. Letter of Appreciation: Writing to the Author or a Character</h4>
            <p style={{margin: '0', fontSize: '15px', color: '#444', lineHeight: '1.6'}}>Express how the text made you feel, what emotional or philosophical insights it gave you, and why the story matters.</p>
        </div>

        {/* OPTION A */}
        <div style={{marginBottom: '35px', padding: '20px', border: '1px solid #dee2e6', borderRadius: '12px', backgroundColor: '#fff'}}>
            <h5 style={{margin: '0 0 10px 0', color: '#e67e22', fontSize: '17px'}}>Option A — Letter to the Author (Ray Bradbury)</h5>
            <p style={{fontSize: '14px', color: '#555', marginBottom: '10px', lineHeight: '1.5'}}>
                Write a letter (120–200 words) to Ray Bradbury explaining: What emotional impression the story left on you; Which moment or detail moved you the most and why; What you think the story says about life, time, or acceptance; What you appreciate about how he wrote it (tone, simplicity, calmness). <strong>Tone: respectful, reflective, thoughtful.</strong>
            </p>
            <textarea 
                placeholder="Write Option A letter here..." 
                disabled={isSubmitted} value={optionAText}
                onChange={(e) => setOptionAText(e.target.value)}
                style={{width: '100%', minHeight: '200px', padding: '15px', borderRadius: '12px', border: '2px solid #d1d8e0', fontSize: '15px', outline: 'none', fontFamily: 'inherit'}}
            />
        </div>

        {/* OPTION B */}
        <div style={{marginBottom: '35px', padding: '20px', border: '1px solid #dee2e6', borderRadius: '12px', backgroundColor: '#fff'}}>
            <h5 style={{margin: '0 0 10px 0', color: '#e67e22', fontSize: '17px'}}>Option B — Letter to a Character (Husband or Wife)</h5>
            <p style={{fontSize: '14px', color: '#555', marginBottom: '10px', lineHeight: '1.5'}}>
                Write a letter (120–200 words) addressed to either the husband or the wife in the story. Your letter should express: What you understand about their emotional state; How their calm acceptance affected you as a reader; What you would want to say to them if you could speak with them; What you learned from the way they chose to live their final evening. <strong>Tone: empathetic, human, gentle.</strong>
            </p>
            <textarea 
                placeholder="Write Option B letter here..." 
                disabled={isSubmitted} value={optionBText}
                onChange={(e) => setOptionBText(e.target.value)}
                style={{width: '100%', minHeight: '200px', padding: '15px', borderRadius: '12px', border: '2px solid #d1d8e0', fontSize: '15px', outline: 'none', fontFamily: 'inherit'}}
            />
        </div>

        {/* SUBMIT SECTION */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <input 
            type="text" className="inp" placeholder='What is your name ?' 
            value={userName} disabled={isSubmitted} onChange={(e) => setUserName(e.target.value)}
          />
          <button 
            className='taskfive-btn' onClick={handleSubmit}
            style={{ display: 'block', margin: '25px auto 0 auto', opacity: isSubmitted ? 0.7 : 1, cursor: isSubmitted ? 'default' : 'pointer' }}
          >
            {isSubmitted ? "Yuborildi" : "Yuborish"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Taskfive;