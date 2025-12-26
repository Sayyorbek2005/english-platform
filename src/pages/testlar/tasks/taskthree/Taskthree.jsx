import '../../test.css'
import './taskthree.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"; // Telegram funksiyasi
import { BOT_1 } from "../../../../telegramConfig"; // Siz yaratgan BOT1

const Taskthree = () => {
  const [userName, setUserName] = useState('');
  const [allAnswers, setAllAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- PART 1 ---
  const [answers] = useState([
    { id: 1, partA:'Part-1', question: '1.Words from the story-Antonym choices "Lustreless"', optionsA: 'Upbright', optionsB: 'bent', optionsC: 'stooped' },
    { id: 2, question: '2.Words from the story-Antonym choices "Hunched"', optionsA: 'shiny', optionsB: 'dull', optionsC: 'dim' },
    { id: 3, question: '3.Words from the story-Antonym choices "Brooding"', optionsA: 'reflective', optionsB: 'carefree', optionsC: 'worrying' },
    { id: 4, question: '4.Words from the story-Antonym choices "Drab"', optionsA: 'colorful', optionsB: 'gray', optionsC: 'boring' },
    { id: 5, question: '5.Words from the story-Antonym choices "Curtly"', optionsA: 'politely', optionsB: 'abruptly', optionsC: 'briefly' },
  ]);

  // --- PART 2 ---
  const [questions] = useState([
    { id: 2.1, partB: "Part-2", question: 'Put the words in the blanks of the text. ', optionA: "Mercy", optionB: "Women", optionC: "Hairdresser", optionD: "Separation", optionE: "Owen Lewis", optionF: "Harry", optionG: "Kathleen" },
  ]);

  // --- TEXT ---
  const [texts] = useState([
    {
      id: 2.2,
      optiontext1:'1. To Mr. Henry Bosengate, being summoned for jury service “was in the nature of an ______.”',
      optiontext2:'2. Before leaving, Mr. Bosengate complained to his wife, “This business is ________. There oughtn’t to be any crime in these days.”', 
      optiontext3:'3. Mr. Bosengate’s wife was named ______.',
      optiontext4:'4. As he set off, his two children, Kate and ______, ran out and waved to him from the garden wall.', 
      optiontext5:'5. The final case Mr. Bosengate heard was that of a soldier named ______ ______, who was charged with attempted suicide.', 
      optiontext6:'6. He claimed he acted because he couldn’t stand the ______ from his wife.', 
      optiontext7:'7. Before joining the army, Owen Lewis had worked as a ________.', 
      optiontext8:'8. When the accused was brought in, Mr. Bosengate noticed a ______ around the man’s neck from the self-inflicted wound.', 
      optiontext9:'9. Kathleen remarked that she wished ______ could sit on juries, as it “would be an experience.”', 
      optiontext10:'10. In the jury room, Mr. Bosengate finally agreed to a guilty verdict only on condition that they recommend the prisoner to ______.'
    }
  ]);

  const handlePart1 = (qId, variant) => {
    if (isSubmitted) return;
    setAllAnswers(prev => ({ ...prev, [`P1-Q${qId}`]: variant }));
  };

  const handlePart2 = (num, val) => {
    if (isSubmitted) return;
    setAllAnswers(prev => ({ ...prev, [`P2-T${num}`]: val }));
  };

  const handleSubmit = () => {
    if (isSubmitted) {
      toast.info("Siz allaqachon javob yuborgansiz.");
      return;
    }

    if (!userName.trim()) {
      toast.error("Iltimos ismingizni kiriting!");
      return;
    }

    if (Object.keys(allAnswers).length === 0) {
      toast.warning("Iltimos, javoblarni belgilang!");
      return;
    }

    // 🔹 Telegram matni tayyorlash
    let telegramText = `🧑‍🎓 Test natijalari
👤 Ism: ${userName}
📘 Level: Inferential
📝 Task: Task 3
📅 Sana: ${new Date().toLocaleString()}

📊 Javoblar:\n`;

    Object.entries(allAnswers).forEach(([key, val]) => {
      telegramText += `${key}: ${val}\n`;
    });

    // 🔹 Telegramga yuborish
    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);

    // 🔹 LocalStorage ga saqlash
    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push({
      user: userName,
      answers: allAnswers,
      level: 'Inferential',
      taskType: 'Task 3',
      date: new Date().toLocaleString()
    });
    localStorage.setItem('allTests', JSON.stringify(oldData));

    toast.success("Javoblar yuborildi");
    setIsSubmitted(true);
  };

  return (
    <div data-aos="fade-left" className='tasks taskthree'>
      <div className="taskthree-card">
        
        {/* --- PART 1 --- */}
        {answers.map((item, index) => (
          <div key={index} className="tasks-question taskthree-question">
            <div>
              {item.partA && <h2>{item.partA}</h2>}
              <h2>{item.question}</h2>
              <ul>
                <div>
                  <li className='a' onClick={() => handlePart1(item.id, 'a')}
                      style={{ color: allAnswers[`P1-Q${item.id}`] === 'a' ? '#007bff' : '', cursor: isSubmitted ? 'default' : 'pointer' }}>
                    a. {item.optionsA}
                  </li>
                  <li className='b' onClick={() => handlePart1(item.id, 'b')}
                      style={{ color: allAnswers[`P1-Q${item.id}`] === 'b' ? '#007bff' : '', cursor: isSubmitted ? 'default' : 'pointer' }}>
                    b. {item.optionsB}
                  </li>
                </div>
                <div>
                  <li className='c' onClick={() => handlePart1(item.id, 'c')}
                      style={{ color: allAnswers[`P1-Q${item.id}`] === 'c' ? '#007bff' : '', cursor: isSubmitted ? 'default' : 'pointer' }}>
                    c. {item.optionsC}
                  </li>
                </div>
              </ul>
            </div>
            <br /><hr />
          </div>
        ))}

        {/* --- PART 2 --- */}
        {questions.map((itemtwo, indextwo) => (
          <div key={indextwo} className='tasks-question'>
            <div>
              <h2>{itemtwo.partB}</h2>
              <h2>{itemtwo.question}</h2>
              <ul style={{display: 'flex', flexWrap: 'wrap', gap: '15px', listStyle: 'none'}}>
                <li>A. {itemtwo.optionA}</li>
                <li>B. {itemtwo.optionB}</li>
                <li>C. {itemtwo.optionC}</li>
                <li>D. {itemtwo.optionD}</li>
                <li>E. {itemtwo.optionE}</li>
                <li>F. {itemtwo.optionF}</li>
                <li>G. {itemtwo.optionG}</li>
              </ul>
            </div>
          </div>
        ))}

        {/* --- TEXT --- */}
        {texts.map((itemthree, indexthree) => (
          <div key={indexthree} className="option-text">
            <div>
              <ul>
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <div key={num} style={{marginBottom: '15px'}}>
                    <li>{itemthree[`optiontext${num}`]}</li>
                    <input 
                      className='taskthree-input' 
                      type="text" 
                      placeholder='Your answer'
                      value={allAnswers[`P2-T${num}`] || ''}
                      disabled={isSubmitted}
                      onChange={(e) => handlePart2(num, e.target.value)}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* --- SUBMIT BOX --- */}
        <div className="submit-box" style={{marginTop: '30px', textAlign: 'center'}}>
          <input 
            type="text" 
            className="inp" 
            placeholder='What is your name ?' 
            value={userName}
            disabled={isSubmitted}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button 
            className='taskthree-btn' 
            onClick={handleSubmit}
            style={{ display: 'block', margin: '20px auto 0', opacity: isSubmitted ? 0.7 : 1, cursor: 'pointer' }}
          >
            {isSubmitted ? "Yuborildi" : "Yuborish"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Taskthree;
