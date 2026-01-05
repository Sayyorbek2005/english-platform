import '../../test.css'
import './tasktwo.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"
import { BOT_1 } from "../../../../telegramConfig"

const Tasktwo = () => {
  const [userName, setUserName] = useState('');
  const [task1Sequence, setTask1Sequence] = useState('');
  const [task2Sequence, setTask2Sequence] = useState('');
  const [task3Sequence, setTask3Sequence] = useState('');
  const [task4Sequence, setTask4Sequence] = useState('');
  const [task5Sequence, setTask5Sequence] = useState('');
  const [task6Sequence, setTask6Sequence] = useState('');
  const [task7Answers, setTask7Answers] = useState(Array(12).fill(''));
  const [task8Answers, setTask8Answers] = useState(
    Array(9).fill({ character: '', trait: '', attitude: '' })
  );
  // Task 9 uchun state
  const [task9Answers, setTask9Answers] = useState(Array(11).fill(''));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTask7Change = (index, value) => {
    const newAnswers = [...task7Answers];
    newAnswers[index] = value;
    setTask7Answers(newAnswers);
  };

  const handleTask8Change = (index, field, value) => {
    const newAnswers = [...task8Answers];
    newAnswers[index] = { ...newAnswers[index], [field]: value };
    setTask8Answers(newAnswers);
  };

  // Task 9 uchun handle funksiya
  const handleTask9Change = (index, value) => {
    const newAnswers = [...task9Answers];
    newAnswers[index] = value;
    setTask9Answers(newAnswers);
  };

  const task1Events = [
    "After arriving at the courthouse, Mr. Bosengate takes his place in the jury box and starts observing the judge and his jurors, with the feeling of indifference towards the mix of men beside him.",
    "In the middle of the trial, the main witness doesn’t come, which causes the judge to cancel the case until the following day. It gives Bosengate a good chance to go home early that afternoon.",
    "On the morning of the court law, Bosengate leaves his country estate in his motor car; His wife Kathleen and children wave goodbye, and he promises he won’t be home late.",
    "After introducing the third case, the accused man, a young soldier named Owen Lewis, stands in the courtroom, convicted of attempting to take his own life. The reason for suicide is that he couldn’t bear being separated from his wife. Bosengate shows an interest to this unusual charge.",
    "The first two cases of the day end quickly with guilty verdicts, so there is no need for the jury to leave. This almost makes Bosengate fall asleep until the next case is called.",
    "A London stroke broker and volunteering officer is called to work as a juror at the local courts and considers the call as a desperate waste of his valuable time."
  ];

  const task2Events = [
    "When the night approaches, Bosengate opens the door to his wife’s bedroom with the desire to share his thoughts and explain the reason for his troubles. But he hesitates and goes back without a word.",
    "When the sun goes down, Bosengate feels uncomfortable and tired. While he is taking a stroll through his rose garden and doing small chores, he can’t help thinking about the sorrowful soldier.",
    "Thanks to the postponement of the court, Mr. Bosengate returns home early in the afternoon. His daughter, the little girl named Kit, meets him at the staircase, sliding down the banister, and announces that the dinner is ready.",
    "Sitting alone at his window that night, Bosengate contemplates the events of the day, feeling surrendered by a bleak sense of life’s misery and feeling pain as he eventually goes to sleep.",
    "Bosengate and his wife start a conversation at the summer house, first about children’s daytime adventures by Kathleen, then about the soldier’s trial by Bosengate. He explains to his wife that the soldier tried to kill himself because he didn’t want to be apart from his wife. Kathleen’s response to these events was a deep sigh, “OH dear.”"
  ];

  const task3Events = [
    "The next morning, after returning to the jury box, Bosengate is surprised to see the injured and frail-looking soldier standing again in the courtroom. This scene is shocking for Bosengate, as he had seen exactly this haunted face in his mind the night before.",
    "At the previous session of the court, the convicted soldier Owen Lewis gives an ardent speech on how the separation from his wife made him desperately unhappy, a plea that deeply affect Bosengate.",
    "During the discussion, almost all jurors found him to be guilty. However, Bosengate’s emotions, which led him to believe he was innocent, pushed him back from agreeing to the verdict. Despite one jury’s harsh judgmental attitude towards the soldier, Bosengate claims that they attach a recommendation of mercy.",
    "Eventually, the jury finds Owen Lewis guilty, but calls for a lighter sentence. The judge sends the soldier back to the service, instead of to prison, warning him to return to duty with a better spirit.",
    "That evening after the trial, Bosengate wants to rely on Kathleen about the profound lesson in compassion he has learned. He thinks that he has never openly expressed his concerns and thoughts to her before, and longs for her understanding.",
    "When Bosengate reaches Kathleen’s bedroom to share his new understanding, he finds it difficult to express his emotions. Kathleen easily realizes that her husband is longing for emotional support, causing him to lose his resolve and fall silent.",
    "Later that night, lost in his thoughts, Bosengate contemplates the paradoxes of life. He realizes that although he hasn’t undergone a full transformation, he is no longer the same as before, and he understands that people must “be kind, and help one another”, rather than judge each other harshly."
  ];

  const task4Dialogue = [
    { id: 'A', text: "“Consider all the facts. Did the soldier deliberately attempt to do suicide?”" },
    { id: 'B', text: "“I couldn’t bear being away from my wife. I beg you not to send me back to prison. I was out of control”." },
    { id: 'C', text: "“He must be suffering from an emotional disorder, like panic or claustrophobia”." },
    { id: 'D', text: "“What he had done is a complete nonsense! He is a betrayer, using his wife as an excuse. It is disgraceful,” protests another juror angrily." },
    { id: 'E', text: "“The soldiers’ emotional condition is completely natural”, Bosengate mutters quietly." },
    { id: 'F', text: "“I don’t approve the decision of sending this man back to prison,” Bosengate declares firmly." },
    { id: 'G', text: "“Alright, in case we plead mercy for him, we’ll say he’s guilty,” Bosengate confirms finally." },
    { id: 'H', text: "“Deserters are put to death at the front lines! This fellow can’t be let away”, objects a juror strongly." }
  ];

  const task5Dialogue = [
    { id: 1, name: "Kathleen", text: "“I guess the reason for your worries is a soldier. What did he do?”" },
    { id: 2, name: "Kathleen", text: "“Oh… how pathetic. Was he punished?”" },
    { id: 3, name: "Kathleen", text: "“That was kind of you. I’m glad you did that.”" },
    { id: 4, name: "Kathleen", text: "“Henry, Why are you worried? How was the trial? It seems not pleasant for you.”" },
    { id: 5, name: "Bosengate", text: "“Kind? Perhaps. But I am wondering what leads the people to such despair”." },
    { id: 6, name: "Bosengate", text: "“He was found to be guilty… but I made sure we asked for mercy.”" },
    { id: 7, name: "Bosengate", text: "“Attempted suicide. And the reason is that he missed his wife.”" },
    { id: 8, name: "Bosengate", text: "“It was a bit unsettling for me…The expression of the man’s face won’t leave my mind.”" }
  ];

  const task6Dialogue = [
    { id: 'a', jury: "Jury 1", text: "Challenges and hardships are common for soldiers. My brother is in the frontline ditches. He hasn’t tried anything like this." },
    { id: 'b', jury: "Jury 2", text: "Or we might be saving a life. Justice isn’t weakened with mercy and kindness. It makes it human." },
    { id: 'c', jury: "Jury 3", text: "Rules are a different matter. Look at him. What he did is not a crime. He desperately lost himself." },
    { id: 'd', jury: "Jury 4", text: "If we relieve the punishment, we might be encouraging weakness" },
    { id: 'e', jury: "Jury 5", text: "The pains can’t be compared to one another. We never know what people hide in their hearts." },
    { id: 'f', jury: "Jury 6", text: "The man violated army rules – committed suicide. It can’t be just ignored." }
  ];

  const task7Themes = ["Justice and Law", "Compassion and Mercy", "Effects of war", "Moral dilemmas"];
  const task7Statements = [
    "Bosengate claiming mercy for the soldier",
    "Owen Lewis’s strong desire to return to his wife",
    "Juror’s discussion about the leniency",
    "Description of the soldier’s desperation, exhausted look",
    "Bosengate’s contemplations: “Why should I attend judgement on that poor beggar?”",
    "Another juror saying: “The suicide he attempted can’t be whitewashed”.",
    "Owen’s explanations that his life became unbearable after separation from his wife.",
    "Another juror blaming the soldier: “A coward using his wife as an excuse”",
    "Bosengate’s recall of his own children, while hearing the case.",
    "The judge’s sentence to send Owen to his regiment instead of prison.",
    "The soldier’s shabby, poorly fitting uniform in court.",
    "Bosengate’s dilemma between obeying the law and showing humanity."
  ];

  const task8Quotes = [
    "“I will only agree, on condition that we plead mercy”",
    "“he is just a coward making his wife as an excuse”",
    "“Observes the soldier from head to foot, paying attention to the soldier’s worn, ill-fitting uniform and feels pity”",
    "“I couldn’t bear the separation from his wife.”",
    "“The suicide he attempted can’t be whitewashed.”",
    "Remembers his own children, while Owen was telling his story.",
    "Seems desperate and nervous in the courtroom.",
    "Tries to avoid direct conflict with others, but mutters complaints.",
    "“Why should I take part in the judgment on that poor soldier?”"
  ];

  const task9Symbols = [
    "The soldier’s worn, shabby clothes",
    "Mahogany jury table",
    "The way how Owen looked at Bosengate",
    "Black robe of judge",
    "The way Owen wants to return to his wife.",
    "The heated discussion among juries",
    "Bosengate remembering his children",
    "The soldier’s desperate and tired appearance",
    "The soldier being returned to regiment, instead of prison.",
    "The courtroom full of people",
    "Insomnia Bosengate experienced after the trial."
  ];

  const handleSubmit = () => {
    if (isSubmitted) {
      toast.info("Siz allaqachon javob yuborgansiz!");
      return;
    }
    
    if (!userName.trim()) {
      toast.error("Iltimos ismingizni kiriting!");
      return;
    }

    const task8Formatted = task8Answers.map(ans => `${ans.character}|${ans.trait}|${ans.attitude}`).join('; ');

    const telegramText = `
🧑‍🎓 Test natijalari
👤 Ism: ${userName}
📘 Level: Reorganization
📅 Sana: ${new Date().toLocaleString()}

📊 Task 1: ${task1Sequence}
📊 Task 2: ${task2Sequence}
📊 Task 3: ${task3Sequence}
📊 Task 4: ${task4Sequence}
📊 Task 5: ${task5Sequence}
📊 Task 6: ${task6Sequence}
📊 Task 7: ${task7Answers.join('-')}
📊 Task 8: ${task8Formatted}
📊 Task 9: ${task9Answers.join('-')}
    `.trim();

    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);
    toast.success("Javoblar yuborildi");
    setIsSubmitted(true);
  };

  const sectionStyle = { marginBottom: '30px', padding: '0 20px' };
  const inputContainerStyle = { textAlign: 'center', backgroundColor: '#f4faff', padding: '15px', borderRadius: '8px', marginBottom: '30px', border: '1px dashed #3498db' };

  return (
    <div data-aos="fade-left" className='tasks task-two'>
      <div className="tasktwo-card">
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h1 style={{color: '#3498db', fontSize: '28px', borderBottom: '3px solid #3498db', display: 'inline-block', textTransform: 'uppercase', paddingBottom: '5px'}}>Reorganization Level</h1>
        </div>

        {/* TASK 1 */}
        <div style={{textAlign: 'center', marginBottom: '15px'}}><h2 style={{color: '#2c3e50', fontSize: '20px', fontWeight: 'bold'}}>Task 1. Start of the Story</h2></div>
        <section style={sectionStyle}>
          {task1Events.map((event, index) => (
            <div key={index} style={{display: 'flex', gap: '10px', marginBottom: '10px'}}><span style={{fontWeight: 'bold', color: '#3498db', minWidth: '20px'}}>{index + 1}.</span><p style={{margin: 0, fontSize: '14.5px', color: '#34495e'}}>{event}</p></div>
          ))}
        </section>
        <div style={inputContainerStyle}><input type="text" className="inp" placeholder="e.g. 1-4-2-6-5-3" style={{width: '220px', textAlign: 'center'}} value={task1Sequence} disabled={isSubmitted} onChange={(e) => setTask1Sequence(e.target.value)} /></div>

        {/* TASK 2 */}
        <div style={{textAlign: 'center', marginBottom: '15px', marginTop: '40px'}}><h2 style={{color: '#2c3e50', fontSize: '20px', fontWeight: 'bold'}}>Task 2. Middle of the Story</h2></div>
        <section style={sectionStyle}>
          {task2Events.map((event, index) => (
            <div key={index} style={{display: 'flex', gap: '10px', marginBottom: '10px'}}><span style={{fontWeight: 'bold', color: '#e67e22', minWidth: '20px'}}>{index + 1}.</span><p style={{margin: 0, fontSize: '14.5px', color: '#34495e'}}>{event}</p></div>
          ))}
        </section>
        <div style={inputContainerStyle}><input type="text" className="inp" placeholder="e.g. 1-3-2-5-4" style={{width: '220px', textAlign: 'center'}} value={task2Sequence} disabled={isSubmitted} onChange={(e) => setTask2Sequence(e.target.value)} /></div>

        {/* TASK 3 */}
        <div style={{textAlign: 'center', marginBottom: '15px', marginTop: '40px'}}><h2 style={{color: '#2c3e50', fontSize: '20px', fontWeight: 'bold'}}>Task 3. Ending of the Story</h2></div>
        <section style={sectionStyle}>
          {task3Events.map((event, index) => (
            <div key={index} style={{display: 'flex', gap: '10px', marginBottom: '10px'}}><span style={{fontWeight: 'bold', color: '#27ae60', minWidth: '20px'}}>{index + 1}.</span><p style={{margin: 0, fontSize: '14.5px', color: '#34495e'}}>{event}</p></div>
          ))}
        </section>
        <div style={inputContainerStyle}><input type="text" className="inp" placeholder="e.g. 2-1-3-5-4-6-7" style={{width: '220px', textAlign: 'center'}} value={task3Sequence} disabled={isSubmitted} onChange={(e) => setTask3Sequence(e.target.value)} /></div>

        {/* TASK 4 */}
        <div style={{textAlign: 'center', marginBottom: '15px', marginTop: '40px'}}><h2 style={{color: '#2c3e50', fontSize: '20px', fontWeight: 'bold'}}>Task 4. Reorder the dialogue</h2></div>
        <section style={sectionStyle}>
          {task4Dialogue.map((item) => (
            <div key={item.id} style={{display: 'flex', gap: '10px', marginBottom: '10px'}}><span style={{fontWeight: 'bold', color: '#9b59b6', minWidth: '25px'}}>({item.id})</span><p style={{margin: 0, fontSize: '14.5px', color: '#34495e'}}>{item.text}</p></div>
          ))}
        </section>
        <div style={inputContainerStyle}><input type="text" className="inp" placeholder="e.g. B-E-A-H-C-D-F-G" style={{width: '250px', textAlign: 'center'}} value={task4Sequence} disabled={isSubmitted} onChange={(e) => setTask4Sequence(e.target.value)} /></div>

        {/* TASK 5 */}
        <div style={{textAlign: 'center', marginBottom: '15px', marginTop: '40px'}}><h2 style={{color: '#2c3e50', fontSize: '20px', fontWeight: 'bold'}}>Task 5. Dialogue: Bosengate and Kathleen</h2></div>
        <section style={sectionStyle}>
          {task5Dialogue.map((item) => (
            <div key={item.id} style={{display: 'flex', gap: '10px', marginBottom: '10px'}}><span style={{fontWeight: 'bold', color: '#e74c3c', minWidth: '20px'}}>{item.id}.</span><p style={{margin: 0, fontSize: '14.5px', color: '#34495e'}}><span style={{color: item.name === "Kathleen" ? "#e67e22" : "#2980b9", fontWeight: 'bold'}}>{item.name}:</span> {item.text}</p></div>
          ))}
        </section>
        <div style={inputContainerStyle}><input type="text" className="inp" placeholder="e.g. 4-8-1-7-2-6-3-5" style={{width: '250px', textAlign: 'center'}} value={task5Sequence} disabled={isSubmitted} onChange={(e) => setTask5Sequence(e.target.value)} /></div>

        {/* TASK 6 */}
        <div style={{textAlign: 'center', marginBottom: '15px', marginTop: '40px'}}><h2 style={{color: '#2c3e50', fontSize: '20px', fontWeight: 'bold'}}>Task 6. Dialogue among the jurors</h2></div>
        <section style={sectionStyle}>
          {task6Dialogue.map((item) => (
            <div key={item.id} style={{display: 'flex', gap: '10px', marginBottom: '10px'}}><span style={{fontWeight: 'bold', color: '#16a085', minWidth: '25px'}}>({item.id})</span><p style={{margin: 0, fontSize: '14.5px', color: '#34495e'}}><span style={{fontWeight: 'bold', color: '#7f8c8d'}}>{item.jury}:</span> {item.text}</p></div>
          ))}
        </section>
        <div style={inputContainerStyle}><input type="text" className="inp" placeholder="e.g. f-a-d-c-e-b" style={{width: '250px', textAlign: 'center'}} value={task6Sequence} disabled={isSubmitted} onChange={(e) => setTask6Sequence(e.target.value)} /></div>

        {/* TASK 7 */}
        <div style={{textAlign: 'center', marginBottom: '15px', marginTop: '40px'}}><h2 style={{color: '#2c3e50', fontSize: '20px', fontWeight: 'bold'}}>Task 7. Match statements to themes</h2></div>
        <section style={sectionStyle}>
          <div style={{backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px', marginBottom: '20px', border: '1px solid #ddd'}}>
            <p style={{fontWeight: 'bold', marginBottom: '8px', color: '#2c3e50'}}>Themes (Enter the number):</p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '14px'}}>
              {task7Themes.map((theme, i) => (<div key={i}><strong>{i + 1}.</strong> {theme}</div>))}
            </div>
          </div>
          {task7Statements.map((text, index) => (
            <div key={index} style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', borderBottom: '1px solid #f0f0f0', paddingBottom: '8px'}}>
              <span style={{fontWeight: 'bold', minWidth: '25px', color: '#e67e22'}}>{index + 1}.</span>
              <p style={{margin: 0, fontSize: '14px', flex: 1}}>{text}</p>
              <input type="text" className="inp" style={{width: '40px', height: '30px', textAlign: 'center'}} value={task7Answers[index]} disabled={isSubmitted} onChange={(e) => handleTask7Change(index, e.target.value)} />
            </div>
          ))}
        </section>

        {/* TASK 8 */}
        <div style={{textAlign: 'center', marginBottom: '15px', marginTop: '40px'}}><h2 style={{color: '#2c3e50', fontSize: '20px', fontWeight: 'bold'}}>Task 8. Character Analysis Table</h2></div>
        <section style={sectionStyle}>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '12px'}}>
              <thead>
                <tr style={{backgroundColor: '#3498db', color: '#fff'}}>
                  <th style={{border: '1px solid #ddd', padding: '10px'}}>Quote/Action</th>
                  <th style={{border: '1px solid #ddd', padding: '10px'}}>Character</th>
                  <th style={{border: '1px solid #ddd', padding: '10px'}}>Trait</th>
                  <th style={{border: '1px solid #ddd', padding: '10px'}}>Attitude</th>
                </tr>
              </thead>
              <tbody>
                {task8Quotes.map((quote, idx) => (
                  <tr key={idx}>
                    <td style={{border: '1px solid #ddd', padding: '8px', fontStyle: 'italic', width: '40%'}}>{quote}</td>
                    <td style={{border: '1px solid #ddd'}}><input type="text" style={{width: '100%', border: 'none', padding: '5px'}} value={task8Answers[idx].character} disabled={isSubmitted} onChange={(e) => handleTask8Change(idx, 'character', e.target.value)} /></td>
                    <td style={{border: '1px solid #ddd'}}><input type="text" style={{width: '100%', border: 'none', padding: '5px'}} value={task8Answers[idx].trait} disabled={isSubmitted} onChange={(e) => handleTask8Change(idx, 'trait', e.target.value)} /></td>
                    <td style={{border: '1px solid #ddd'}}><input type="text" style={{width: '100%', border: 'none', padding: '5px'}} value={task8Answers[idx].attitude} disabled={isSubmitted} onChange={(e) => handleTask8Change(idx, 'attitude', e.target.value)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* TASK 9 - YANGI QO'SHILGAN QISM */}
        <div style={{textAlign: 'center', marginBottom: '15px', marginTop: '40px'}}><h2 style={{color: '#2c3e50', fontSize: '20px', fontWeight: 'bold'}}>Task 9. Symbol Identification Task</h2></div>
        <section style={sectionStyle}>
          <div style={{backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px', marginBottom: '20px', border: '1px solid #ddd'}}>
            <p style={{fontWeight: 'bold', marginBottom: '8px', color: '#2c3e50'}}>Categories:</p>
            <p style={{fontSize: '14px', margin: '5px 0'}}>Justice symbolism, War symbolism, Human connection symbolism</p>
          </div>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '12px'}}>
              <thead>
                <tr style={{backgroundColor: '#2ecc71', color: '#fff'}}>
                  <th style={{border: '1px solid #ddd', padding: '10px'}}>Symbol/action/description</th>
                  <th style={{border: '1px solid #ddd', padding: '10px', width: '40%'}}>Category</th>
                </tr>
              </thead>
              <tbody>
                {task9Symbols.map((symbol, idx) => (
                  <tr key={idx}>
                    <td style={{border: '1px solid #ddd', padding: '8px', color: '#34495e'}}>{symbol}</td>
                    <td style={{border: '1px solid #ddd'}}>
                      <input 
                        type="text" 
                        style={{width: '100%', border: 'none', padding: '5px'}} 
                        value={task9Answers[idx]} 
                        disabled={isSubmitted} 
                        onChange={(e) => handleTask9Change(idx, e.target.value)} 
                        
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SUBMIT */}
        <div className="submit-box" style={{textAlign: 'center', marginTop: '50px', borderTop: '2px solid #eee', paddingTop: '30px'}}>
          <input type="text" className="inp" placeholder='Enter your full name' value={userName} disabled={isSubmitted} onChange={(e) => setUserName(e.target.value)} />
          <button className='tasktwo-btn' onClick={handleSubmit} style={{ opacity: isSubmitted ? 0.7 : 1, display: 'block', margin: '20px auto' }}>{isSubmitted ? "Yuborildi" : "Yuborish"}</button>
        </div>
      </div>
    </div>
  )
}

export default Tasktwo;