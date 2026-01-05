import './tasktwo2.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"; 
import { BOT_1 } from "../../../../telegramConfig"; 

const Tasktwo2 = () => {
  const [userName, setUserName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Task 4 Matching State
  const [selectedHeading, setSelectedHeading] = useState(null);
  const [matches, setMatches] = useState({}); 

  const [userAnswers, setUserAnswers] = useState({
    t1_q1: '', t1_q2: '', t1_q3: '', t1_q4: '',
    t2_q1: '', t2_q2: '', t2_q3: '',
    t3_time1: '', t3_time2: '', t3_time3: '', t3_time4: '', t3_time5: ''
  });

  const headings = [
    { id: 1, text: "Accepting the Inevitable Calmly" },
    { id: 2, text: "A Shared Prophetic Dream" },
    { id: 3, text: "No Panic, Just Reflection" },
    { id: 4, text: "Final Chores and Goodnight" },
    { id: 5, text: "Everyone Had the Same Dream" },
    { id: 6, text: "A Typical Evening for Everyone" },
    { id: 7, text: "Questioning Why It’s Tonight" },
    { id: 8, text: "The Husband’s Unusual Question" }
  ];

  const summaries = [
    { id: 'D', text: "Instead of arguing or panicking, the couple reacts calmly to the revelation. They discuss whether they “deserve” the end of the world and conclude that it all feels logical." },
    { id: 'B', text: "The husband describes a dream he had. The next day at work, he discovered his colleague Stan (and others) had exactly the same dream, confirming it wasn’t just coincidence." },
    { id: 'E', text: "The husband and wife observe that no one around them is outwardly panicking. The husband muses that he will miss nothing of life except his family. They decide to carry on." },
    { id: 'H', text: "The couple carries out their usual nightly routine: washing dishes, tucking daughters into bed with tenderness, and sharing a gentle laugh before wishing goodnight for the last time." },
    { id: 'C', text: "The wife confesses that she, too, had the very same dream, as did other women in their neighborhood. Everyone seems to know about the world’s end through this shared dream." },
    { id: 'F', text: "They speculate about how other people are spending this final night. Likely, everyone is doing ordinary things — going to a show, listening to the radio, putting children to bed." },
    { id: 'G', text: "The husband wonders why the world must end specifically on this night. The wife offers a vague explanation. He mentions bomber planes that will never land as part of the reason." },
    { id: 'A', text: "A husband startles his wife with a strange question one evening – he asks what she would do if this were the last night of the world. She is initially unsure if he’s serious." }
  ];

  const handleInputChange = (key, value) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleHeadingClick = (id) => {
    if (isSubmitted) return;
    setSelectedHeading(id);
  };

  const handleSummaryClick = (char) => {
    if (isSubmitted || !selectedHeading) return;
    setMatches(prev => ({ ...prev, [selectedHeading]: char }));
    setSelectedHeading(null);
  };

  const handleSubmit = () => {
    if (isSubmitted) return;
    if (!userName.trim()) {
      toast.error("Iltimos ismingizni kiriting!");
      return;
    }
    const t4Final = Object.entries(matches).map(([num, char]) => `${num}-${char}`).join(', ');
    let telegramText = `🧑‍🎓 Test Ikki\n👤 Ism: ${userName}\n\n📊 Javoblar:\n`;
    Object.entries(userAnswers).forEach(([key, val]) => { telegramText += `${key}: ${val}\n`; });
    telegramText += `Task 4 Matching: ${t4Final}`;
    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);
    setIsSubmitted(true);
    toast.success("Muvaffaqiyatli yuborildi!");
  };

  return (
    <div data-aos="fade-left" className='tasks tasktwo2'>
      <div className="tasktwo2-card">
        
        {/* ==================== TASK 1 ==================== */}
        <div className="task-section">
          <h1 style={{textAlign: 'center', color: '#2c3e50', borderBottom: '3px solid #e67e22', paddingBottom: '10px'}}>Task 1: Chronological Order</h1>
          
          <div className="tasktwo2-question">
            <h2>1. Early Evening Conversation:</h2>
            <p>A. The man pours himself coffee while their two daughters play on the rug.</p>
            <p>B. The husband asks his wife what she would do if this were the last night of the world.</p>
            <p>C. The wife suggests possibilities like war, atomic bombs, or germ warfare as the cause.</p>
            <p>D. The husband replies that it’s “just the closing of a book,” denying those causes.</p>
            <input className='taskone1-input' type="text" placeholder="Sequence..." value={userAnswers.t1_q1} onChange={(e) => handleInputChange('t1_q1', e.target.value.toUpperCase())} disabled={isSubmitted} />
          </div>

          <div className="tasktwo2-question">
            <h2>2. Revelation of the Dream:</h2>
            <p>A. The husband explains that he had a dream in which a voice said everything would stop on Earth.</p>
            <p>B. At the office, the husband discovers that his coworker Stan Willis had the exact same dream.</p>
            <p>C. The couple realizes nearly everyone has shared this identical end-of-the-world dream.</p>
            <p>D. The wife admits she also had the same dream (the night before) and heard other women on the block talk about it.</p>
            <input className='taskone1-input' type="text" placeholder="Sequence..." value={userAnswers.t1_q2} onChange={(e) => handleInputChange('t1_q2', e.target.value.toUpperCase())} disabled={isSubmitted} />
          </div>

          <div className="tasktwo2-question">
            <h2>3. Accepting the News Calmly:</h2>
            <p>A. The wife asks, “Do we deserve this?” upon hearing the world will end.</p>
            <p>B. The husband says deserving is irrelevant; things just didn’t work out.</p>
            <p>C. The wife remarks that she isn’t afraid because the end seems logical given how they have lived.</p>
            <p>D. Their children laugh and play innocently in the background, unaware of the conversation.</p>
            <input className='taskone1-input' type="text" placeholder="Sequence..." value={userAnswers.t1_q3} onChange={(e) => handleInputChange('t1_q3', e.target.value.toUpperCase())} disabled={isSubmitted} />
          </div>

          <div className="tasktwo2-question">
            <h2>4. Reflections on Human Behavior:</h2>
            <p>A. The husband says he thought people would be “screaming in the streets” if the world were ending.</p>
            <p>B. The wife notes that no one is panicking; you don’t scream about something real and inevitable.</p>
            <p>C. The husband muses that he will miss nothing of life except his wife and daughters when it’s all over.</p>
            <p>D. The wife concludes there’s nothing else to do but continue their evening as normal.</p>
            <input className='taskone1-input' type="text" placeholder="Sequence..." value={userAnswers.t1_q4} onChange={(e) => handleInputChange('t1_q4', e.target.value.toUpperCase())} disabled={isSubmitted} />
          </div>
        </div>

        <hr style={{margin: '40px 0'}} />

        {/* ==================== TASK 2 ==================== */}
        <div className="task-section">
          <h1 style={{textAlign: 'center', color: '#2c3e50', borderBottom: '3px solid #3498db', paddingBottom: '10px'}}>Task 2: Concept Mapping</h1>
          
          <div className="tasktwo2-question">
            <h2>1. Timeline – Before vs. During the Last Night:</h2>
            <p>A. The husband dreamed about the world ending a few nights earlier. | B. The next day at work, he discovered others (like Stan Willis) had the same dream. | C. The wife and the neighborhood women talked about the dream earlier that day. | D. The wife had the exact same ominous dream on the night before. | E. The husband and wife discuss the end of the world over coffee that evening. | F. They wash the dinner dishes and put their daughters to bed as usual. | G. Later that night, the couple reads the newspaper and listens to the radio. | H. Just before bedtime, they wish each other goodnight one last time.</p>
            <input className='taskone1-input' type="text" placeholder="Your Answer" value={userAnswers.t2_q1} onChange={(e) => handleInputChange('t2_q1', e.target.value)} disabled={isSubmitted} />
          </div>

          <div className="tasktwo2-question">
            <h2>2. Normal Routine vs. Unusual Occurrences:</h2>
            <p>A. Brewing coffee and drinking it in the evening. | B. Everyone the couple knows has the same exact dream about the world ending. | C. Washing the dinner dishes and cleaning up the kitchen. | D. The husband and wife calmly anticipate that the world will end tonight. | E. Listening to the radio and sitting by the fireplace before bed. | F. The wife asks if a war or bombs might be causing the end of the world. | G. Tucking the children into bed at 8:30 PM as on any other night. | H. Noticing that there is no news or alarm about the apocalypse in the newspaper.</p>
            <input className='taskone1-input' type="text" placeholder="Your Answer" value={userAnswers.t2_q2} onChange={(e) => handleInputChange('t2_q2', e.target.value)} disabled={isSubmitted} />
          </div>

          <div className="tasktwo2-question">
            <h2>3. Who Said It – Husband or Wife:</h2>
            <p>A. “Do we deserve this?” | B. “It’s not a matter of deserving; things just didn’t work out.” | C. “I always thought I would be, but I’m not [afraid].” | D. “I won’t miss anything but you and the girls.” | E. “Why do you suppose it’s tonight?” | F. “Maybe it’s because it was never October 19, 1969, ever before in history…” | G. “There are bombers on their schedules that’ll never see land.” | H. “I left the water running in the sink.”</p>
            <input className='taskone1-input' type="text" placeholder="Your Answer" value={userAnswers.t2_q3} onChange={(e) => handleInputChange('t2_q3', e.target.value)} disabled={isSubmitted} />
          </div>
        </div>

        <hr style={{margin: '40px 0'}} />

        {/* ==================== TASK 3 ==================== */}
        <div className="task-section">
          <h1 style={{textAlign: 'center', color: '#2c3e50', borderBottom: '3px solid #9b59b6', paddingBottom: '10px'}}>Task 3: Creating a Timeline of Events</h1>
          <div className="tasktwo2-question">
            <p><strong>⦁ Four nights before the last night –</strong></p>
            <textarea className='tasktwo2-textarea' value={userAnswers.t3_time1} onChange={(e) => handleInputChange('t3_time1', e.target.value)} disabled={isSubmitted} style={{width: '100%', minHeight: '80px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px'}} />
            <p><strong>⦁ The next day (after the husband’s dream) –</strong></p>
            <textarea className='tasktwo2-textarea' value={userAnswers.t3_time2} onChange={(e) => handleInputChange('t3_time2', e.target.value)} disabled={isSubmitted} style={{width: '100%', minHeight: '80px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px'}} />
            <p><strong>⦁ The previous night –</strong></p>
            <textarea className='tasktwo2-textarea' value={userAnswers.t3_time3} onChange={(e) => handleInputChange('t3_time3', e.target.value)} disabled={isSubmitted} style={{width: '100%', minHeight: '80px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px'}} />
            <p><strong>⦁ Evening of October 19, 1969 –</strong></p>
            <textarea className='tasktwo2-textarea' value={userAnswers.t3_time4} onChange={(e) => handleInputChange('t3_time4', e.target.value)} disabled={isSubmitted} style={{width: '100%', minHeight: '80px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px'}} />
            <p><strong>⦁ 8:30 PM that night –</strong></p>
            <textarea className='tasktwo2-textarea' value={userAnswers.t3_time5} onChange={(e) => handleInputChange('t3_time5', e.target.value)} disabled={isSubmitted} style={{width: '100%', minHeight: '80px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc'}} />
          </div>
        </div>

        <hr style={{margin: '40px 0'}} />

        {/* ==================== TASK 4 ==================== */}
        <div className="task-section">
          <h1 style={{textAlign: 'center', color: '#2c3e50', borderBottom: '3px solid #27ae60', paddingBottom: '10px'}}>Task 4: Matching Headings</h1>
          <p style={{textAlign: 'center', marginBottom: '20px'}}>Click a <b>Number</b>, then click a <b>Letter</b> to match them.</p>
          <div style={{display: 'flex', gap: '15px', alignItems: 'stretch'}}>
            <div style={{flex: '1', display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {headings.map(h => (
                <div key={h.id} onClick={() => handleHeadingClick(h.id)} style={{
                  flex: '1', display: 'flex', alignItems: 'center', padding: '15px', border: '2px solid #ddd', borderRadius: '10px', cursor: 'pointer', minHeight: '100px',
                  backgroundColor: selectedHeading === h.id ? '#3498db' : (matches[h.id] ? '#2ecc71' : 'white'),
                  color: (selectedHeading === h.id || matches[h.id]) ? 'white' : 'black', transition: '0.3s'
                }}>
                  {h.id}. {h.text} {matches[h.id] ? ` ➔ [${matches[h.id]}]` : ''}
                </div>
              ))}
            </div>
            <div style={{flex: '1.2', display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {summaries.map(s => {
                const isMatched = Object.values(matches).includes(s.id);
                return (
                  <div key={s.id} onClick={() => handleSummaryClick(s.id)} style={{
                    flex: '1', display: 'flex', alignItems: 'center', padding: '15px', border: '1px solid #eee', borderRadius: '10px', cursor: 'pointer', minHeight: '100px', fontSize: '13px', lineHeight: '1.4',
                    backgroundColor: isMatched ? '#2ecc71' : '#f8f9fa',
                    color: isMatched ? 'white' : 'black', transition: '0.3s'
                  }}>
                    <strong>{s.id}.</strong> &nbsp; {s.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================== SUBMIT ==================== */}
        <div className="submit-box" style={{marginTop: '40px', textAlign: 'center'}}>
          <input type="text" className="inp" placeholder='Ismingizni kiriting' value={userName} onChange={(e) => setUserName(e.target.value)} disabled={isSubmitted} />
          <button className='tasktwo2-btn' onClick={handleSubmit} style={{ display: 'block', margin: '20px auto 0 auto', opacity: isSubmitted ? 0.7 : 1, cursor: 'pointer' }}>
            {isSubmitted ? "YUBORILDI" : "YUBORISH"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Tasktwo2;