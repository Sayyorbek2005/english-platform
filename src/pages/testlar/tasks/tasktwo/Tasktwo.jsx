import '../../test.css'
import './tasktwo.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"
import { BOT_1 } from "../../../../telegramConfig"

const Tasktwo = () => {
  const [userName, setUserName] = useState('');
  const [selections, setSelections] = useState({});
  const [activeWord, setActiveWord] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      toast.warning("Avval yuqori qismdan so'zni tanlang!");
    }
  };

  const getTextColor = (type, value) => {
    for (let word in selections) {
      const option = selections[word];
      if (
        (type === 'word' && word === value) ||
        (type === 'option' && option === value)
      ) {
        return { color: '#007bff', fontWeight: 'bold' };
      }
    }
    if (type === 'word' && value === activeWord) {
      return { color: 'orange' };
    }
    return {};
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

    if (Object.keys(selections).length === 0) {
      toast.info("Iltimos, javoblarni belgilang!");
      return;
    }

    const finalAnswers = Object.entries(selections).map(
      ([word, option]) => `${word} -> ${option.replace('2', '').toUpperCase()}`
    );

    const finalData = {
      user: userName,
      answers: finalAnswers,
      level: 'Reorganization',
      taskType: 'Task 2',
      date: new Date().toLocaleString()
    };

    // LocalStorage
    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push(finalData);
    localStorage.setItem('allTests', JSON.stringify(oldData));

    // Telegram text
    let telegramText = `🧑‍🎓 Test natijalari
👤 Ism: ${userName}
📘 Level: Reorganization
📝 Task: Task 2
📅 Sana: ${new Date().toLocaleString()}

📊 Javoblar:
`;

    finalAnswers.forEach(ans => {
      telegramText += `\n${ans}`;
    });

    // Telegramga yuborish
    sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);

    toast.success("Javoblar yuborildi");
    setIsSubmitted(true);
  };

  return (
    <div data-aos="fade-left" className='tasks task-two'>
      <div className="tasktwo-card">
        <h2 style={{textAlign: 'center', color: '#2c3e50'}}>
          Vocabulary Matching (Task 1.2)
        </h2>
        <p style={{textAlign: 'center', color: '#7f8c8d'}}>
          Click a word, then click its definition
        </p>

        <div
          className="tasktwo-question display-flex"
          style={{marginBottom: '30px', justifyContent: 'space-around'}}
        >
          <ul className='salom'>
            {['1. Wretched', '2. Indispensable', '3. Afflicted', '4. Yearning', '5. Shambling']
              .map(word => (
                <li
                  key={word}
                  style={{ ...getTextColor('word', word), cursor: isSubmitted ? 'default' : 'pointer' }}
                  onClick={() => handleWordClick(word)}
                >
                  {word}
                </li>
              ))}
          </ul>

          <ul className='salom'>
            {['a', 'b', 'c', 'd', 'e'].map((key) => {
              const labels = {
                a: 'a) moving in a slow, awkward way',
                b: 'b) a strong longing',
                c: 'c) absolutely necessary',
                d: 'd) very unhappy',
                e: 'e) suffering from'
              };
              return (
                <li
                  key={key}
                  style={{ ...getTextColor('option', key), cursor: isSubmitted ? 'default' : 'pointer' }}
                  onClick={() => handleOptionClick(key)}
                >
                  {labels[key]}
                </li>
              )
            })}
          </ul>
        </div>

        <div
          className="tasktwo-question display-flex"
          style={{ justifyContent: 'space-around' }}
        >
          <ul className='salom'>
            {['1. Drab', '2. Hunched', '3. Underlip', '4. Muttering', '5. Foreman']
              .map(word => (
                <li
                  key={word}
                  style={{ ...getTextColor('word', word), cursor: isSubmitted ? 'default' : 'pointer' }}
                  onClick={() => handleWordClick(word)}
                >
                  {word}
                </li>
              ))}
          </ul>

          <ul className='salom'>
            {['a2', 'b2', 'c2', 'd2', 'e2'].map((key) => {
              const labels = {
                a2: 'a) speaking in a low voice',
                b2: 'b) dull and without color',
                c2: 'c) person in charge of workers',
                d2: 'd) bending forward',
                e2: 'e) the lower lip'
              };
              return (
                <li
                  key={key}
                  style={{ ...getTextColor('option', key), cursor: isSubmitted ? 'default' : 'pointer' }}
                  onClick={() => handleOptionClick(key)}
                >
                  {labels[key]}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="submit-box" style={{marginTop: '30px', textAlign: 'center'}}>
          <input
            type="text"
            className="inp"
            placeholder='Your name'
            value={userName}
            disabled={isSubmitted}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className='tasktwo-btn'
            onClick={handleSubmit}
            style={{
              opacity: isSubmitted ? 0.7 : 1,
              cursor: 'pointer',
              display: 'block',
              margin: '20px auto 0'
            }}
          >
            {isSubmitted ? "Yuborildi" : "Yuborish"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tasktwo;
