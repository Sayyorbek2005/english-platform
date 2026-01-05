import '../../test.css'
import './taskthree.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram";
import { BOT_1 } from "../../../../telegramConfig";

const Taskthree = () => {
  const [userName, setUserName] = useState('');
  const [allAnswers, setAllAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- DATA SECTIONS ---
  const characterList = [
    { key: 'a', name: 'Kathleen – Owen (the soldier)' },
    { key: 'b', name: 'Other Jurors – Owen' },
    { key: 'c', name: 'Judge – Owen' },
    { key: 'd', name: 'Bosengate – Judge' },
    { key: 'e', name: 'Bosengate – Opposing Juror(s)' },
    { key: 'f', name: 'Commercial Traveler (Juror) – Trial' },
    { key: 'g', name: 'Bosengate – Kathleen' },
    { key: 'h', name: 'A Certain Juror – Owen' }
  ];

  const descriptions = [
    { id: 1, text: "No direct interaction; Kathleen feels empathy for Owen through Bosengate’s feelings." },
    { id: 2, text: "Negative attitude; they consider him a coward." },
    { id: 3, text: "By sending Owen back to his regiment instead of prison, the Judge shows little mercy toward him." },
    { id: 4, text: "Bosengate remains formally respectful but shows passive disagreement with the judge’s decision." },
    { id: 5, text: "A confrontational dynamic over the verdict, as Bosengate argues for leniency for the soldier." },
    { id: 6, text: "He is focused on his personal comfort, not deeply engaging with the moral questions of the case." },
    { id: 7, text: "Warm and supportive; they show mutual empathy in personal conversations and in discussing the trial." },
    { id: 8, text: "Initially judgmental (calls Owen a coward) but becomes apathetic after hearing Owen’s full story." }
  ];

  const inferences = [
    "a rigid, unforgiving view of duty", "pitiful, exhausted, and out of place", "assistance",
    "the jury also recommends mercy", "tension, discomfort, and impatience", "dismissing his feelings as cowardice",
    "a compromise between punishment and understanding", "troubled and disillusioned",
    "empathy for Owen’s longing for family", "neglect and hardship"
  ];

  const task2Questions = [
    { id: 1, text: "The initial impression of Bosengate about the soldier is ___________" },
    { id: 2, text: "During the discussions about the verdict, Bosengate rejects to vote “guilty”, unless ___________" },
    { id: 3, text: "Contrary to the soldier’s feelings about the separation from his wife, some jurors react by ___________" },
    { id: 4, text: "After the sentence is announced, Bosengate thinks over the day and feels ___________" },
    { id: 5, text: "Owen’s torn and shabby clothes can be a symbol of ___________ within the larger framework of the war." },
    { id: 6, text: "Bosengate’s recall of his children during the court suggests ___________" },
    { id: 7, text: "The final sentence by the judge to send Owen back to the army, instead of prison indicates ___________" },
    { id: 8, text: "The commercial traveler’s constant fidgeting and wiping his brow imply ___________" },
    { id: 9, text: "Bosengate’s empathy towards other people, thinking that “all people should be kind to each other” reveals his ___________" },
    { id: 10, text: "Another juror blaming Owen for being “a coward, using his wife as an excuse” reflects ___________" }
  ];

  const dialogues = [
    { id: 1, content: "Dialogue 1.\nJuror: While deserters are being executed at the front, how can this soldier be released?\nAnother juror: Showing mercy to the soldier can be a good example showing that the other soldiers can get away with the same.”\nBosengate: Eyes don’t lie. Look at his eyes. You wouldn’t be so quick to judge. You can see fear and hopelessness in his eyes.", questions: ["What can be inferred from the dialogue? What kind of emotion is Bosengate trying to promote in the other jurors?", "If we describe this dialogue as a moral conflict among jurors, how does it emphasize the tension between justice and compassion?"] },
    { id: 2, content: "Dialogue 2.\nOwen Lewis (in a weak voice): I couldn’t resist it any longer. I was separated from my wife, and during these sleepless nights, I thought my heart would stop from beating.\nBosengate (within inner voice): What made me take part in that judgment on this poor soldier? How can we compare his condition with ours, while we are sitting with all comforts and wearing our warm coats?", questions: ["What is Bosengate questioning here?", "What does Bosengate’s private reflection reveal according to the dialogue?"] },
    { id: 3, content: "Dialogue 3.\nJuror: The incidence is clear. The convicted person violated the law by attempting suicide in a uniform.\nBosengate: The law and human suffering are different issues. If the law doesn’t consider the human’s fate, it is too rigid.\nJuror: What we have been discussing may have dangerous consequences. We are not here to change the law.\nBosengate: We are here to fight for justice. The law should serve for justice.", questions: ["How can this dialogue represent the limitations of human rights and the legal system during wartime?", "How does the jurors’ discussion reveal a controversy between legal obligation and moral judgment?"] },
    { id: 4, content: "Dialogue 4.\nKathleen: What is the reason for your silence? Did you find the trial unpleasant for you?\nBosengate: Not unpleasant …. but a bit unsettling. I can’t forget the man’s face expression. It was yelling for justice.\nBosengate: He attempted suicide as he missed his wife.\nKatleen: Oh… how pathetic… was he punished?\nBosengate: He was found to be guilty. But I objected to the final verdict by offering mercy.\nKathleen: What you did is worth an appraisal. I am proud of you.\nBosengate: Maybe … but I am always in wonder what sort of world encourages people to such despair.", questions: ["How can the emotional state of Bosengate be described according to this dialogue?", "What can be inferred from the dialogue’s last rhetorical question by Bosengate?"] }
  ];

  const symbolsTable = [
    { id: 'a', title: "Shabby boots", interpretation: "Symbolize hardship, poverty, and the toll of war on the individual." },
    { id: 'b', title: "Bosengate’s removal of his glove", interpretation: "Signifies shedding social formalities and confronting the case on a personal, human level." },
    { id: 'c', title: "The courtroom’s air", interpretation: "Represents moral duty, authority, and the heavy atmosphere of judgment surrounding the trial." },
    { id: 'd', title: "Owen’s staring at Bosengate", interpretation: "Acts as a plea for understanding and a reminder of the moral pressure on the judicial system (his eyes beg for mercy)." },
    { id: 'e', title: "The mahogany jury table", interpretation: "Stands for authority, strictness, and the tradition of the justice system." },
    { id: 'f', title: "The judge’s gavel", interpretation: "Embodies the final decision, ultimate authority, and the determination of a man’s fate." },
    { id: 'g', title: "Bosengate’s fireplace at home", interpretation: "Contrasts warmth and safety with the soldier’s suffering, highlighting the paradox of Bosengate’s comfortable life versus Owen’s misery." },
    { id: 'h', title: "The courtroom windows", interpretation: "Suggest glimpses of freedom (light) beyond the dark, oppressive atmosphere of the trial." },
    { id: 'i', title: "The clock in the jury room", interpretation: "Reflects the slow passage of time during the difficult deliberation process." },
    { id: 'j', title: "Owen’s neck bandage", interpretation: "Serves as a stark reminder of his personal sufferings and the human toll of the war." }
  ];

  const predictionsList = [
    { id: 'a', title: "Owen Lewis’s fate", question: "What will be the fate of Owen Lewis after rejoining his regiment? Will he recover from his mental disorder?" },
    { id: 'b', title: "Bosengate’s transformation", question: "How might Bosengate’s personality have transformed? How does it influence his family and social life?" },
    { id: 'c', title: "Owen’s marriage if reunited", question: "If Owen were to be reunited with his wife, how could their relationship change? Would any challenges remain?" },
    { id: 'd', title: "The other jurors’ reflection", question: "How would the other jurors react if they considered Bosengate’s suggestions about lighter punishment?" },
    { id: 'e', title: "Wider impact of the war", question: "How does the story imply the massive influence of war on ordinary people and future society?" }
  ];

  const predictionsKey = [
    "After returning to his regiment, Owen likely remains mentally fragile. His desperation could grow stronger – he may struggle to recover, and there is a possibility that his despair leads to another breakdown.",
    "Bosengate has undergone a profound change; he is now more compassionate and aware of injustice. This would make him a kinder family man and a more socially conscious individual sensitive to suffering.",
    "If Owen reunites with his wife, initial joy would be tempered by lasting challenges. Wartime trauma and guilt would likely strain their relationship – they would need to work through emotional scars together.",
    "The other jurors would probably be divided. Some might feel a twinge of regret or sympathy, realizing they were too harsh, while others would remain convinced that they upheld their legal duty.",
    "The story makes it clear that war has a destructive influence on ordinary people. Galsworthy suggests society must confront the human cost – likely pushing for a future with more empathy and humanity in justice."
  ];

  const handleInputChange = (key, val) => {
    if (isSubmitted) return;
    setAllAnswers(prev => ({ ...prev, [key]: val }));
  };

  const handleSubmit = () => {
    if (isSubmitted) return toast.info("Siz allaqachon javob yuborgansiz.");
    if (!userName.trim()) return toast.error("Iltimos ismingizni kiriting!");

    let telegramText = `🧑‍🎓 Test natijalari\n👤 Ism: ${userName}\n📘 Level: Inferential\n\n📊 JAVOBLAR:\n`;
    Object.entries(allAnswers).forEach(([key, val]) => {
      telegramText += `${key}: ${val}\n`;
    });

    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);
    toast.success("Barcha topshiriqlar yuborildi!");
    setIsSubmitted(true);
  };

  return (
    <div data-aos="fade-left" className='tasks taskthree'>
      <div className="taskthree-card">

        {/* --- TASK 1 --- */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#3498db', borderBottom: '2px solid', paddingBottom: '10px' }}>Task 1. Character Relationship Mapping</h2>
          <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px', fontSize: '13px' }}>
              {characterList.map(c => <div key={c.key}><strong>{c.key})</strong> {c.name}</div>)}
            </div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {descriptions.map((item, i) => (
                <tr key={i}>
                  <td style={{ padding: '12px', border: '1px solid #ddd' }}>{item.text}</td>
                  <td style={{ padding: '12px', border: '1px solid #ddd', width: '90px' }}>
                    <input type="text" maxLength="1" style={{ width: '45px', padding: '8px', textAlign: 'center', textTransform: 'uppercase', border: '2px solid #3498db', borderRadius: '4px' }} value={allAnswers[`T1_Q${i + 1}`] || ''} onChange={(e) => handleInputChange(`T1_Q${i + 1}`, e.target.value)} disabled={isSubmitted} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* --- TASK 2 --- */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#3498db', borderBottom: '2px solid', paddingBottom: '10px' }}>Task 2. Fill in the Blanks</h2>
          <div style={{ backgroundColor: '#eef7ff', padding: '15px', borderRadius: '8px', margin: '20px 0' }}>
            <h4 style={{ marginBottom: '10px', color: '#2980b9' }}>Possible Inferences:</h4>
            <ul style={{ fontSize: '14px', columns: '2', paddingLeft: '20px' }}>
              {inferences.map((inf, i) => <li key={i}>{inf}</li>)}
            </ul>
          </div>
          {task2Questions.map((q, i) => (
            <div key={i} style={{ marginBottom: '25px', padding: '15px', borderLeft: '4px solid #3498db', backgroundColor: '#fff' }}>
              <p style={{ fontSize: '15px', fontWeight: '500' }}>{q.text.split('___________')[0]}</p>
              <input type="text" placeholder="Type inference..." style={{ width: '100%', padding: '10px', marginTop: '10px', border: '1px solid #ddd', borderRadius: '5px' }} value={allAnswers[`T2_Q${i + 1}`] || ''} onChange={(e) => handleInputChange(`T2_Q${i + 1}`, e.target.value)} disabled={isSubmitted} />
              <p style={{ display: 'inline', fontSize: '15px', fontWeight: '500' }}>{q.text.split('___________')[1]}</p>
            </div>
          ))}
        </section>

        {/* --- TASK 3 --- */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#3498db', borderBottom: '2px solid', paddingBottom: '10px' }}>Task 3. Dialogue Interpretation</h2>
          {dialogues.map((d, di) => (
            <div key={di} style={{ marginBottom: '40px', padding: '15px', backgroundColor: '#fcfcfc', border: '1px solid #eee', borderRadius: '8px' }}>
              <p style={{ whiteSpace: 'pre-line', fontStyle: 'italic', marginBottom: '20px', color: '#555', fontSize: '14px' }}>{d.content}</p>
              {d.questions.map((q, qi) => (
                <div key={qi} style={{ marginBottom: '15px' }}>
                  <p style={{ fontWeight: '500', fontSize: '15px' }}>{q}</p>
                  <textarea placeholder="Your interpretation..." style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', minHeight: '80px' }} value={allAnswers[`T3_D${di + 1}_Q${qi + 1}`] || ''} onChange={(e) => handleInputChange(`T3_D${di + 1}_Q${qi + 1}`, e.target.value)} disabled={isSubmitted} />
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* --- TASK 4 --- */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#3498db', borderBottom: '2px solid', paddingBottom: '10px' }}>Task 4. Symbol/Image Matching</h2>
          <div style={{ backgroundColor: '#fcf8e3', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <h4 style={{ marginBottom: '10px' }}>Interpretations:</h4>
            <ul style={{ fontSize: '13px' }}>{symbolsTable.map((s, i) => <li key={i} style={{marginBottom: '5px'}}>{s.interpretation}</li>)}</ul>
          </div>
          {symbolsTable.map((sq, i) => (
            <div key={i} style={{ marginBottom: '25px', padding: '15px', borderLeft: '4px solid #f39c12', backgroundColor: '#fff' }}>
              <p style={{ fontWeight: '600' }}>{sq.id}. {sq.title}</p>
              <input type="text" placeholder="Match the interpretation..." style={{ width: '100%', padding: '10px', marginTop: '10px', border: '1px solid #ddd', borderRadius: '5px' }} value={allAnswers[`T4_Q${i + 1}`] || ''} onChange={(e) => handleInputChange(`T4_Q${i + 1}`, e.target.value)} disabled={isSubmitted} />
            </div>
          ))}
        </section>

        {/* --- TASK 5 --- */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: '#3498db', borderBottom: '2px solid', paddingBottom: '10px' }}>Task 5. Predictions (Post-Verdict Inferences)</h2>
          <div style={{ backgroundColor: '#e8f5e9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <h4 style={{ marginBottom: '10px', color: '#2e7d32' }}>Inference Key Clues:</h4>
            <ul style={{ fontSize: '13px', color: '#333' }}>{predictionsKey.map((key, i) => <li key={i} style={{marginBottom: '5px'}}>{key}</li>)}</ul>
          </div>
          {predictionsList.map((item, i) => (
            <div key={i} style={{ marginBottom: '30px', padding: '20px', borderLeft: '5px solid #27ae60', backgroundColor: '#fdfdfd' }}>
              <h4 style={{ color: '#27ae60', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ fontSize: '15px', marginBottom: '12px' }}>{item.question}</p>
              <textarea placeholder="Write your inference based on the key clues..." style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px', minHeight: '100px', fontFamily: 'inherit' }} value={allAnswers[`T5_Q${i + 1}`] || ''} onChange={(e) => handleInputChange(`T5_Q${i + 1}`, e.target.value)} disabled={isSubmitted} />
            </div>
          ))}
        </section>

        {/* --- SUBMIT BOX --- */}
        <div className="submit-box" style={{ textAlign: 'center', borderTop: '2px solid #eee', paddingTop: '30px' }}>
          <input type="text" className="inp" placeholder='What is your name?' style={{  }} value={userName} onChange={(e) => setUserName(e.target.value)} disabled={isSubmitted} />
          <button className='taskthree-btn' onClick={handleSubmit} style={{ display: 'block', margin: '25px auto', backgroundColor: isSubmitted ? '#bdc3c7' : '#3498db', color: 'white', padding: '12px 50px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            {isSubmitted ? "Yuborildi" : "Yuborish"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Taskthree;