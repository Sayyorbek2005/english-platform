import './taskthree3.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"; 
import { BOT_1 } from "../../../../telegramConfig"; 

const Taskthree3 = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Task States
  const [activeAns, setActiveAns] = useState('');
  const [passiveAns, setPassiveAns] = useState('');
  const [calmAns, setCalmAns] = useState('');
  const [fearfulAns, setFearfulAns] = useState('');
  const [feelings, setFeelings] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [socialGaps, setSocialGaps] = useState({ s1: '', s2: '', s3: '', s4: '', s5: '' });
  const [finalGaps, setFinalGaps] = useState({ f1: '', f2: '', f3: '', f4: '', f5: '' });
  const [testAnswers, setTestAnswers] = useState({ t1: '', t2: '', t3: '', t4: '', t5: '' });
  const [symbolAnswers, setSymbolAnswers] = useState({ s1: '', s2: '', s3: '', s4: '', s5: '', s6: '' });

  const handleInputChange = (setter, key, val) => {
    if (isSubmitted) return;
    setter(prev => ({ ...prev, [key]: val }));
  };

  const handleTestSelect = (setter, qKey, option) => {
    if (isSubmitted) return;
    setter(prev => ({ ...prev, [qKey]: option }));
  };

  const handleSubmit = () => {
    if (isSubmitted) return toast.info("Siz allaqachon yuborgansiz.");
    if (!userName.trim()) return toast.error("Ismingizni kiriting!");

    let telegramText = `🧑‍🎓 Level: Inferential\n👤 Ism: ${userName}\n\n`;
    telegramText += `📊 T1 (Categorization): ${activeAns}, ${passiveAns}, ${calmAns}, ${fearfulAns}\n\n`;
    telegramText += `📊 T2 (Internal): ${Object.values(feelings).join(', ')}\n\n`;
    telegramText += `📊 T3 (Social): ${Object.values(socialGaps).join(', ')}\n\n`;
    telegramText += `📊 T4 (Final Scene): ${Object.values(finalGaps).join(', ')}\n\n`;
    telegramText += `📊 T5 (Dialogue): ${Object.values(testAnswers).join(', ')}\n\n`;
    telegramText += `📊 T6 (Symbols): ${Object.values(symbolAnswers).join(', ')}`;

    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);
    toast.success("Barcha javoblar yuborildi!");
    setIsSubmitted(true);
  };

  const headerStyle = { fontWeight: 'bold', backgroundColor: '#f1f2f6', borderBottom: '2px solid #2f3542', minHeight: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' };
  const cellStyle = { minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', borderBottom: '1px solid #eee' };
  const passageInputStyle = { border: 'none', borderBottom: '2px solid', background: 'transparent', textAlign: 'center', outline: 'none', fontWeight: '500', fontSize: '16px' };

  return (
    <div data-aos="fade-left" className="tasks taskthree3">
      <div className="taskthree3-card" style={{padding: '30px', backgroundColor: '#fff', borderRadius: '20px'}}>
        
        <div className="task-header" style={{textAlign: 'center', marginBottom: '40px'}}>
        </div>

        {/* Task 1 */}
        <div className="task-section" style={{marginBottom: '50px'}}>
          <h3 style={{borderLeft: '5px solid #3498db', paddingLeft: '15px'}}>Task 1. Categorise the characters into each of the following types: Active, Passive, Calm, and Fearful.</h3>
          <div className='jadval' style={{border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', display: 'flex', marginTop: '20px'}}>
            <div style={{flex: 1, borderRight: '1px solid #ccc'}}><h2 style={headerStyle}>Active</h2><div style={cellStyle}><input className='taskone1-input' style={{width: '90%'}} disabled={isSubmitted} value={activeAns} onChange={(e) => setActiveAns(e.target.value)} /></div></div>
            <div style={{flex: 1, borderRight: '1px solid #ccc'}}><h2 style={headerStyle}>Passive</h2><div style={cellStyle}><input className='taskone1-input' style={{width: '90%'}} disabled={isSubmitted} value={passiveAns} onChange={(e) => setPassiveAns(e.target.value)} /></div></div>
            <div style={{flex: 1, borderRight: '1px solid #ccc'}}><h2 style={headerStyle}>Calm</h2><div style={cellStyle}><input className='taskone1-input' style={{width: '90%'}} disabled={isSubmitted} value={calmAns} onChange={(e) => setCalmAns(e.target.value)} /></div></div>
            <div style={{flex: 1}}><h2 style={headerStyle}>Fearful</h2><div style={cellStyle}><input className='taskone1-input' style={{width: '90%'}} disabled={isSubmitted} value={fearfulAns} onChange={(e) => setFearfulAns(e.target.value)} /></div></div>
          </div>
        </div>

        {/* Task 2 */}
        <div className="task-section" style={{marginBottom: '50px'}}>
          <h3 style={{borderLeft: '5px solid #e67e22', paddingLeft: '15px'}}>Task 2. Fill in each blank with a phrase that expresses what the characters might be feeling or thinking.</h3>
          <div style={{ lineHeight: '2.5', fontSize: '18px', backgroundColor: '#fffcf9', padding: '30px', borderRadius: '15px', border: '1px solid #ffe8cc', marginTop: '20px' }}>
            The husband sat quietly with his coffee, watching the children play. He did not speak at first, because he was thinking about 
            <input type="text" style={{...passageInputStyle, width: '220px', borderColor: '#e67e22', color: '#d35400'}} placeholder="(1)" value={feelings.q1} onChange={(e) => handleInputChange(setFeelings, 'q1', e.target.value)} disabled={isSubmitted} />. 
            When he finally told his wife about the dream, he spoke calmly, almost gently, as if he did not want to disturb the peace of the evening. The wife listened without panic, perhaps because she sensed that 
            <input type="text" style={{...passageInputStyle, width: '260px', borderColor: '#e67e22', color: '#d35400'}} placeholder="(2)" value={feelings.q2} onChange={(e) => handleInputChange(setFeelings, 'q2', e.target.value)} disabled={isSubmitted} />. 
            She looked at her daughters, and instead of fear, she felt 
            <input type="text" style={{...passageInputStyle, width: '180px', borderColor: '#e67e22', color: '#d35400'}} placeholder="(3)" value={feelings.q3} onChange={(e) => handleInputChange(setFeelings, 'q3', e.target.value)} disabled={isSubmitted} />, 
            knowing that their night would remain ordinary. Later, when they washed the dishes together, they did not hurry or avoid silence. They moved slowly, carefully, as though 
            <input type="text" style={{...passageInputStyle, width: '280px', borderColor: '#e67e22', color: '#d35400'}} placeholder="(4)" value={feelings.q4} onChange={(e) => handleInputChange(setFeelings, 'q4', e.target.value)} disabled={isSubmitted} />. 
            And when the house became quiet, they both understood that there was nothing more to do than 
            <input type="text" style={{...passageInputStyle, width: '220px', borderColor: '#e67e22', color: '#d35400'}} placeholder="(5)" value={feelings.q5} onChange={(e) => handleInputChange(setFeelings, 'q5', e.target.value)} disabled={isSubmitted} />.
          </div>
        </div>

        {/* Task 3 */}
        <div className="task-section" style={{marginBottom: '50px'}}>
          <h3 style={{borderLeft: '5px solid #3498db', paddingLeft: '15px'}}>Task 3. Filling the Social Gaps. Infer how the dream spread among people.</h3>
          <div style={{ lineHeight: '2.5', fontSize: '18px', backgroundColor: '#f1f9ff', padding: '30px', borderRadius: '15px', border: '1px solid #d1e9ff', marginTop: '20px' }}>
            The husband explained that he was not the only one who had the dream. At work, Stan Willis came in looking pale, and immediately the husband knew that 
            <input type="text" style={{...passageInputStyle, width: '220px', borderColor: '#3498db', color: '#2980b9'}} placeholder="(1)" value={socialGaps.s1} onChange={(e) => handleInputChange(setSocialGaps, 's1', e.target.value)} disabled={isSubmitted} />. 
            They exchanged only a few words — they didn’t need more — because each recognized 
            <input type="text" style={{...passageInputStyle, width: '240px', borderColor: '#3498db', color: '#2980b9'}} placeholder="(2)" value={socialGaps.s2} onChange={(e) => handleInputChange(setSocialGaps, 's2', e.target.value)} disabled={isSubmitted} />. <br/><br/>
            Meanwhile, the women in the neighborhood had also spoken about the dream. It spread quietly, not through news or officials, but through 
            <input type="text" style={{...passageInputStyle, width: '240px', borderColor: '#3498db', color: '#2980b9'}} placeholder="(3)" value={socialGaps.s3} onChange={(e) => handleInputChange(setSocialGaps, 's3', e.target.value)} disabled={isSubmitted} />. 
            No one tried to make an announcement or cause alarm, perhaps because they all understood that 
            <input type="text" style={{...passageInputStyle, width: '280px', borderColor: '#3498db', color: '#2980b9'}} placeholder="(4)" value={socialGaps.s4} onChange={(e) => handleInputChange(setSocialGaps, 's4', e.target.value)} disabled={isSubmitted} />. 
            Even the newspapers and radios said nothing, not out of ignorance but because 
            <input type="text" style={{...passageInputStyle, width: '240px', borderColor: '#3498db', color: '#2980b9'}} placeholder="(5)" value={socialGaps.s5} onChange={(e) => handleInputChange(setSocialGaps, 's5', e.target.value)} disabled={isSubmitted} />.
          </div>
        </div>

        {/* Task 4 */}
        <div className="task-section" style={{marginBottom: '50px'}}>
          <h3 style={{borderLeft: '5px solid #9b59b6', paddingLeft: '15px'}}>Task 4. Filling the Final Moments Gaps. Infer what is unspoken in the final scene.</h3>
          <div style={{ lineHeight: '2.5', fontSize: '18px', backgroundColor: '#fdfaff', padding: '30px', borderRadius: '15px', border: '1px solid #efdbff', marginTop: '20px' }}>
            They climbed into bed without speaking. The wife remembered suddenly that she had left the water running in the kitchen, and she rose to turn it off. When she returned, they both laughed softly, because 
            <input type="text" style={{...passageInputStyle, width: '220px', borderColor: '#9b59b6', color: '#8e44ad'}} placeholder="(1)" value={finalGaps.f1} onChange={(e) => handleInputChange(setFinalGaps, 'f1', e.target.value)} disabled={isSubmitted} />. 
            They did not say any grand final statements, because 
            <input type="text" style={{...passageInputStyle, width: '280px', borderColor: '#9b59b6', color: '#8e44ad'}} placeholder="(2)" value={finalGaps.f2} onChange={(e) => handleInputChange(setFinalGaps, 'f2', e.target.value)} disabled={isSubmitted} />. <br/><br/>
            In the silence before sleep, each of them must have been thinking about 
            <input type="text" style={{...passageInputStyle, width: '250px', borderColor: '#9b59b6', color: '#8e44ad'}} placeholder="(3)" value={finalGaps.f3} onChange={(e) => handleInputChange(setFinalGaps, 'f3', e.target.value)} disabled={isSubmitted} />. 
            And when they closed their eyes, there was no fear, only 
            <input type="text" style={{...passageInputStyle, width: '180px', borderColor: '#9b59b6', color: '#8e44ad'}} placeholder="(4)" value={finalGaps.f4} onChange={(e) => handleInputChange(setFinalGaps, 'f4', e.target.value)} disabled={isSubmitted} />, 
            because they knew that 
            <input type="text" style={{...passageInputStyle, width: '240px', borderColor: '#9b59b6', color: '#8e44ad'}} placeholder="(5)" value={finalGaps.f5} onChange={(e) => handleInputChange(setFinalGaps, 'f5', e.target.value)} disabled={isSubmitted} />.
          </div>
        </div>

        {/* Task 5 */}
        <div className="task-section" style={{marginBottom: '50px'}}>
          <h3 style={{borderLeft: '5px solid #ff4757', paddingLeft: '15px', marginBottom: '25px'}}>Task 5. Read each dialogue line and choose the best interpretation from the options provided.</h3>
          {[
            { id: 't1', q: "Husband: “What would you do if you knew this was the last night of the world?”", sub: "What is the husband actually trying to find out?", opts: ["Whether his wife would be frightened", "Whether she had the same dream and already knows", "Whether she wants to go outside", "Whether she is angry with him"] },
            { id: 't2', q: "Wife: “I always thought I would be afraid, but I’m not.”", sub: "What does her reaction suggest?", opts: ["She does not believe the world will really end", "She has emotionally prepared for death long before", "She feels the end is natural and not something to resist", "She is hiding her fear to comfort her husband"] },
            { id: 't3', q: "Husband: “It’s not a matter of deserving; things just didn’t work out.”", sub: "What does this imply about his view of humanity?", opts: ["Humans are guilty and deserve punishment", "The end is random and meaningless", "Life is neither reward nor punishment — it simply ends", "He is angry at the world"] },
            { id: 't4', q: "Wife: “We haven’t been too bad, have we?”", sub: "Why does she ask this?", opts: ["She wants reassurance they lived a kind life", "She is asking whether people will remember them", "She is unsure if their children will forgive them", "She regrets not traveling more"] },
            { id: 't5', q: "Husband describing the office: “Everyone was just sitting around, waiting.”", sub: "What does this behavior reveal?", opts: ["People are confused and need instructions", "The shared dream removed the purpose of working", "The workday was unusually quiet", "The office was preparing for a holiday"] }
          ].map((item, idx) => (
            <div key={item.id} style={{marginBottom: '25px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '12px', border: '1px solid #eee'}}>
              <p style={{fontWeight: 'bold', fontSize: '17px'}}>{idx + 1}. {item.q}</p>
              <p style={{fontSize: '15px', color: '#666', fontStyle: 'italic', marginBottom: '15px'}}>{item.sub}</p>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                {item.opts.map((opt, i) => (
                  <button key={i} onClick={() => handleTestSelect(setTestAnswers, item.id, String.fromCharCode(65 + i))}
                    style={{ padding: '12px', textAlign: 'left', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: testAnswers[item.id] === String.fromCharCode(65 + i) ? '#ff4757' : '#fff', color: testAnswers[item.id] === String.fromCharCode(65 + i) ? '#fff' : '#333', cursor: 'pointer' }}>
                    {String.fromCharCode(65 + i)}. {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Task 6 */}
        <div className="task-section" style={{marginBottom: '50px'}}>
          <h3 style={{borderLeft: '5px solid #2ecc71', paddingLeft: '15px', marginBottom: '25px'}}>Task 6. Symbol and image interpretation. Identify what each symbol represents.</h3>
          {[
            { id: 's1', q: "1. The Coffee Cups", sub: "The husband and wife calmly drink coffee together. What does this symbolize?", opts: ["They are too tired to react emotionally", "They are trying to avoid thinking about reality", "They are accepting the end with peace and normalcy", "They are pretending everything is fine to fool the children"] },
            { id: 's2', q: "2. The Children Playing on the Rug", sub: "The daughters play quietly, unaware of anything unusual. What do they represent?", opts: ["The future of humanity", "Innocence untouched by fear or knowledge", "Anxiety disguised as play", "A reminder of responsibility and guilt"] },
            { id: 's3', q: "3. The Shared Dream", sub: "Everyone has the same dream about the end of the world. What does the dream symbolize?", opts: ["A government announcement", "A collective imagination", "A universal human intuition or acceptance", "A shared hallucination caused by stress"] },
            { id: 's4', q: "4. Washing the Dishes", sub: "The couple washes the dishes together as usual. This action suggests:", opts: ["They are trying to distract themselves", "They value simple shared routines even at the end", "They are in denial", "They are trying to appear normal for neighbors"] },
            { id: 's5', q: "5. The Running Water in the Sink", sub: "The wife returns to turn off the water she forgot. What does this symbolize?", opts: ["Fear disguised as humor", "Awareness that they should conserve resources", "The persistence of gentle human habits even at the end of life", "Confusion and loss of control"] },
            { id: 's6', q: "6. The Kiss Before Bed", sub: "The husband kisses his wife quietly before sleep. What does the kiss symbolize?", opts: ["A final goodbye full of fear", "Ordinary love continuing even during extraordinary circumstances", "A ritual meant to avoid thinking about death", "Regret for the past"] }
          ].map((item, idx) => (
            <div key={item.id} style={{marginBottom: '25px', padding: '20px', backgroundColor: '#f0fcf4', borderRadius: '12px', border: '1px solid #e0f2e9'}}>
              <p style={{fontWeight: 'bold', fontSize: '17px'}}>{item.q}</p>
              <p style={{fontSize: '15px', color: '#666', fontStyle: 'italic', marginBottom: '15px'}}>{item.sub}</p>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                {item.opts.map((opt, i) => (
                  <button key={i} onClick={() => handleTestSelect(setSymbolAnswers, item.id, String.fromCharCode(65 + i))}
                    style={{ padding: '12px', textAlign: 'left', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: symbolAnswers[item.id] === String.fromCharCode(65 + i) ? '#2ecc71' : '#fff', color: symbolAnswers[item.id] === String.fromCharCode(65 + i) ? '#fff' : '#333', cursor: 'pointer' }}>
                    {String.fromCharCode(65 + i)}. {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Area */}
        <div className="submit-area" style={{padding: '40px 0', textAlign: 'center', borderTop: '2px solid #eee'}}>
          <input disabled={isSubmitted} type="text" className="inp" placeholder='Enter your name' value={userName} onChange={(e) => setUserName(e.target.value)} />
          <button className='taskthree3-btn' onClick={handleSubmit} style={{ display: 'block', margin: '25px auto 0 auto', opacity: isSubmitted ? 0.7 : 1, cursor: isSubmitted ? 'default' : 'pointer' }}>
            {isSubmitted ? "Yuborildi" : "Yuborish"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Taskthree3;