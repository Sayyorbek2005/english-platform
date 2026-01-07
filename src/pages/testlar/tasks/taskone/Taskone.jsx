import '../../test.css'
import './taskone.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"
import { BOT_1 } from "../../../../telegramConfig"

const Taskone = () => {
  const [userName, setUserName] = useState('');
  const [selections, setSelections] = useState({});
  const [activeWord, setActiveWord] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [gapAnswers, setGapAnswers] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '' });
  const [task5Answers, setTask5Answers] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '' });
  const [task6Answers, setTask6Answers] = useState({});

  const handleWordClick = (word) => {
    if (isSubmitted) return;
    setActiveWord(word);
  };

  const handleOptionClick = (optionKey) => {
    if (isSubmitted) return;
    if (activeWord) {
      setSelections(prev => ({ ...prev, [activeWord]: optionKey }));
      setActiveWord(null);
    } else {
      toast.warning("Avval so'zni tanlang!");
    }
  };

  const handleTask6Select = (questionIndex, option) => {
    if (isSubmitted) return;
    setTask6Answers(prev => ({ ...prev, [questionIndex]: option }));
  };

  const getTextColor = (type, value) => {
    for (let word in selections) {
      const option = selections[word];
      if ((type === 'word' && word === value) || (type === 'option' && option === value)) {
        return { color: '#007bff', fontWeight: 'bold' };
      }
    }
    if (type === 'word' && value === activeWord) return { color: 'orange' };
    return {};
  };

  const inputStyle = {
    width: '140px',
    padding: '4px 12px',
    fontSize: '14px',
    margin: '0 5px',
    border: '2px solid #3498db',
    borderRadius: '6px',
    outline: 'none',
    backgroundColor: '#ffffff',
    color: '#2c3e50',
    fontWeight: '500'
  };

  const handleSubmit = () => {
    if (isSubmitted) return toast.info("Siz allaqachon javob yuborgansiz!");
    if (!userName.trim()) return toast.error("Iltimos ismingizni kiriting!");

    const matchingRes = Object.entries(selections).map(([word, option]) => `${word} -> ${option}`);
    const t4Res = Object.entries(gapAnswers).filter(([_, v]) => v).map(([k, v]) => `T4 Q${k}: ${v}`);
    const t5Res = Object.entries(task5Answers).filter(([_, v]) => v).map(([k, v]) => `T5 Q${k}: ${v}`);
    const t6Res = Object.entries(task6Answers).map(([k, v]) => `T6 Q${k}: ${v}`);

    let telegramText = `🧑‍🎓 Test natijalari\n👤 Ism: ${userName}\n📘 Level: Literal\n\n` +
      `📝 Matching Tasks (T1, T2, T3):\n${matchingRes.join('\n') || 'Javob yo\'q'}\n\n` +
      `📝 Task 4:\n${t4Res.join('\n') || 'Javob yo\'q'}\n\n` +
      `📝 Task 5:\n${t5Res.join('\n') || 'Javob yo\'q'}\n\n` +
      `✅ Task 6:\n${t6Res.join('\n') || 'Javob yo\'q'}`;

    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);
    toast.success("Javoblar yuborildi");
    setIsSubmitted(true);
  };

  const t6Questions = [
    { q: "1. What was the attitude of Mr. Bosengate toward being summoned as a jury?", options: ["He finds it exciting", "He finds it annoying", "He feels honored", "He is nervous and unsure"] },
    { q: "2. What is the relationship between Kathleen and Bosengate?", options: ["She is his daughter", "She is his niece", "She is his wife", "She is his mistress"] },
    { q: "3. What is the accused man’s name in the story?", options: ["Owen Lewis", "Mr. Bosengate", "George", "Kathleen"] },
    { q: "4. What is Owen Lewis accused of?", options: ["He escaped from the army", "He committed suicide", "He attempted theft", "He trespassed the border"] },
    { q: "5. What was Owen Lewis's job before joining the army?", options: ["Hairdresser", "Carpenter", "Lawyer", "Teacher"] },
    { q: "6. What was the reason for Owen Lewis committing suicide?", options: ["He was afraid of going to the front line", "His commanding officer tormented him", "He was depressed because of the separation from his wife", "He had serious health problems"] },
    { q: "7. On what condition did Mr.Bosengate agree on signing the verdict?", options: ["Owen was declared not guilty", "The jury recommends mercy", "That the case be re-tried", "That the soldier is fined"] },
    { q: "8. What did Mr.Bosengate realize by the end of the story?", options: ["The laws of the government should be strict", "The laws should be strict", "Society needs to be kind and helpful to people", "Military service is more important to empathy"] }
  ];

  const task5Questions = [
    {q: "1. Mr. Bosengate is summoned as a ______.", b: "juror, judge, soldier, lawyer"},
    {q: "2. The defendant is a soldier named ______ ______.", b: "Owen Lewis, David Evans, William Jones"},
    {q: "3. He tried to commit _____ in the army.", b: "suicide, theft, desertion"},
    {q: "4. Bosengate found the courtroom atmosphere to be ______.", b: "drab, exciting, festive, chaotic"},
    {q: "5. The soldier's uniform was ______ and ill-fitting.", b: "worn, new, expensive, colorful"},
    {q: "6. Owen Lewis was a ______ by trade before the war.", b: "hairdresser, blacksmith, tailor"},
    {q: "7. The trial was held in a ______ building.", b: "courthouse, school, church, hospital"},
    {q: "8. The jury had to decide if the man was ______.", b: "guilty, innocent, heroic, insane"},
    {q: "9. Kathleen is Henry’s ______ who stays at home.", b: "wife, sister, mother, aunt"},
    {q: "10. The judge wore a ______ robe during the trial.", b: "black, red, white, blue"}
  ];

  return (
    <div data-aos="fade-left" className='tasks task-two'>
      <div className="tasktwo-card">
        
        {/* TASK 1 */}
        <div style={{ textAlign: 'left', marginBottom: '15px' }}>
          <h2 style={{ fontSize: '18px', display: 'inline-block', borderRight: '5px solid #27ae60', paddingRight: '15px' }}>
            Task 1. Match the words with their synonyms.
          </h2>
        </div>
        <section style={{ marginBottom: '30px', padding: '15px', background: '#f9f9f9', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <ul className='salom' style={{listStyle: 'none', padding: 0}}>
                    {['Wretched', 'Clamour', 'Composure', 'Effluvium', 'Shambling'].map(word => (
                        <li key={word} style={{...getTextColor('word', word), cursor: 'pointer', marginBottom: '8px'}} onClick={() => handleWordClick(word)}>{word}</li>
                    ))}
                </ul>
                <ul className='salom' style={{listStyle: 'none', padding: 0}}>
                    {[
                        { k: 'miserable', l: 'a) Cheerful; b) miserable; c) energetic' },
                        { k: 'noise', l: 'a) Silence; b) noise; c) whisper' },
                        { k: 'calmness', l: 'a) calmness; b) anxiety; c) restlessness' },
                        { k: 'stench', l: 'a) fragrance; b) stench; c) light breeze' },
                        { k: 'shuffling', l: 'a) shuffling; b) sprinting; c) gliding' }
                    ].map((item) => (
                        <li key={item.k} style={{...getTextColor('option', item.k), cursor: 'pointer', marginBottom: '8px'}} onClick={() => handleOptionClick(item.k)}>{item.l}</li>
                    ))}
                </ul>
            </div>
        </section>

        {/* TASK 2 */}
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '18px', display: 'inline-block', borderRight: '5px solid #3498db', paddingRight: '15px' }}>
            Task 2. Match the words with their definitions.
          </h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '30px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <section style={{ flex: '1', minWidth: '300px' }}>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
                <h1 style={{color: '#3498db', fontSize: '24px', borderBottom: '2px solid #3498db', display: 'inline-block'}}>PART 1</h1>
            </div>
            <div className="tasktwo-question display-flex" style={{justifyContent: 'space-around'}}>
              <ul className='salom' style={{listStyle: 'none', padding: 0}}>
                {['1. Wretched', '2. Indispensable', '3. Afflicted', '4. Yearning', '5. Shambling'].map(word => (
                  <li key={word} style={{...getTextColor('word', word), cursor: 'pointer', marginBottom: '5px'}} onClick={() => handleWordClick(word)}>{word}</li>
                ))}
              </ul>
              <ul className='salom' style={{listStyle: 'none', padding: 0}}>
                {['a', 'b', 'c', 'd', 'e'].map((key) => {
                  const labels = { a: 'a) slow/awkward', b: 'b) strong longing', c: 'c) necessary', d: 'd) very unhappy', e: 'e) suffering' };
                  return ( <li key={key} style={{...getTextColor('option', key), cursor: 'pointer', marginBottom: '5px'}} onClick={() => handleOptionClick(key)}>{labels[key]}</li> )
                })}
              </ul>
            </div>
          </section>
          <section style={{ flex: '1', minWidth: '300px' }}>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
                <h1 style={{color: '#3498db', fontSize: '24px', borderBottom: '2px solid #3498db', display: 'inline-block'}}>PART 2</h1>
            </div>
            <div className="tasktwo-question display-flex" style={{justifyContent: 'space-around'}}>
              <ul className='salom' style={{listStyle: 'none', padding: 0}}>
                {['1. Drab', '2. Hunched', '3. Underlip', '4. Muttering', '5. Foreman'].map(word => (
                  <li key={word} style={{...getTextColor('word', word), cursor: 'pointer', marginBottom: '5px'}} onClick={() => handleWordClick(word)}>{word}</li>
                ))}
              </ul>
              <ul className='salom' style={{listStyle: 'none', padding: 0}}>
                {['a2', 'b2', 'c2', 'd2', 'e2'].map((key) => {
                  const labels = { a2: 'a) speaking low', b2: 'b) dull color', c2: 'c) person in charge', d2: 'd) bending forward', e2: 'e) lower lip' };
                  return ( <li key={key} style={{...getTextColor('option', key), cursor: 'pointer', marginBottom: '5px'}} onClick={() => handleOptionClick(key)}>{labels[key]}</li> )
                })}
              </ul>
            </div>
          </section>
        </div>

        {/* TASK 3 */}
        <div style={{ textAlign: 'left', marginBottom: '15px' }}>
          <h2 style={{ fontSize: '18px', display: 'inline-block', borderRight: '5px solid #e67e22', paddingRight: '15px' }}>
            Task 3. Match the words with their antonyms.
          </h2>
        </div>
        <section style={{ marginBottom: '40px', padding: '15px', background: '#fffef4', borderRadius: '10px', border: '1px solid #f9e79f' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <ul className='salom' style={{listStyle: 'none', padding: 0}}>
                    {['Lustreless', 'Hunched', 'Brooding', 'Drab', 'Curtly'].map(word => (
                        <li key={word} style={{...getTextColor('word', word), cursor: 'pointer', marginBottom: '8px'}} onClick={() => handleWordClick(word)}>{word}</li>
                    ))}
                </ul>
                <ul className='salom' style={{listStyle: 'none', padding: 0}}>
                    {[
                        { k: 'shiny', l: 'a) shiny; b) dull; c) dim' },
                        { k: 'upbright', l: 'a) Upbright; b) bent; c) stooped' },
                        { k: 'carefree', l: 'a) reflective; b) carefree; c) worrying' },
                        { k: 'colourful', l: 'a) colourful; b) boring; c) gray' },
                        { k: 'politely', l: 'a) politely; b) abruptly; c) briefly' }
                    ].map((item) => (
                        <li key={item.k} style={{...getTextColor('option', item.k), cursor: 'pointer', marginBottom: '8px'}} onClick={() => handleOptionClick(item.k)}>{item.l}</li>
                    ))}
                </ul>
            </div>
        </section>

        {/* Task 4, 5, 6 - O'zgarishsiz qoldi */}
        <section style={{marginTop: '50px'}}>
          {/* ... qolgan kodlar o'zgarishsiz ... */}
          <h3>Task 4. Fill in the blanks</h3>
          <div style={{lineHeight: '2.5', marginBottom: '40px'}}>
            {[
              "1. To Mr. Henry Bosengate, jury service was an ______.",
              "2. He complained to his wife, “This business is ________.”",
              "3. Mr. Bosengate’s wife was named ______.",
              "4. His children, Kate and ______, waved to him.",
              "5. The soldier's name was ______ ______.",
              "6. He couldn’t stand the ______ from his wife.",
              "7. Owen Lewis had worked as a ________.",
              "8. Bosengate noticed a ______ around the man’s neck.",
              "9. Kathleen wished ______ could sit on juries.",
              "10. They recommend the prisoner to ______."
            ].map((q, i) => (
              <div key={i}>
                <span>{q.split('______')[0]}</span>
                <input type="text" className="inp" style={inputStyle} value={gapAnswers[i+1]} disabled={isSubmitted} onChange={e => setGapAnswers({...gapAnswers, [i+1]: e.target.value})} />
                <span>{q.split('______')[1]}</span>
              </div>
            ))}
          </div>

          <h3>Task 5. Word Bank</h3>
          {task5Questions.map((item, i) => (
            <div key={i} style={{marginBottom: '20px', padding: '15px', borderLeft: '4px solid #3498db', backgroundColor: '#f4faff', borderRadius: '4px'}}>
              <p>
                {item.q.split('______')[0]} 
                <input type="text" className="inp" style={inputStyle} value={task5Answers[i+1]} disabled={isSubmitted} onChange={e => setTask5Answers({...task5Answers, [i+1]: e.target.value})} /> 
                {item.q.split('______')[1]}
              </p>
              <small style={{color: '#2980b9'}}>Bank: {item.b}</small>
            </div>
          ))}

          <h3 style={{marginTop: '40px'}}>Task 6. Multiple Choice</h3>
          {t6Questions.map((item, qIndex) => (
            <div key={qIndex} style={{marginBottom: '25px'}}>
              <h4 style={{marginBottom: '10px'}}>{item.q}</h4>
              <ul className='salom' style={{listStyle: 'none', padding: '0'}}>
                {item.options.map((opt, oIndex) => {
                  const isSelected = task6Answers[qIndex+1] === opt;
                  return (
                    <li key={oIndex} onClick={() => handleTask6Select(qIndex+1, opt)} style={{ padding: '8px 15px', marginBottom: '5px', borderRadius: '5px', cursor: 'pointer', border: '1px solid #eee', backgroundColor: isSelected ? '#e3f2fd' : 'white', color: isSelected ? '#007bff' : 'inherit', fontWeight: isSelected ? 'bold' : 'normal' }}>
                      {String.fromCharCode(65 + oIndex)}) {opt}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </section>

        <div className="submit-box" style={{textAlign: 'center', marginTop: '40px', borderTop: '2px solid #eee', paddingTop: '20px'}}>
          <input type="text" className="inp" placeholder='Your name' value={userName} disabled={isSubmitted} onChange={(e) => setUserName(e.target.value)} />
          <button className='taskone-btn' onClick={handleSubmit} style={{ opacity: isSubmitted ? 0.7 : 1, display: 'block', margin: '20px auto' }}>
            {isSubmitted ? "Yuborildi" : "Yuborish"}
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Taskone;