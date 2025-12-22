import '../../test.css'
import './tasktwo.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Tasktwo = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [selections, setSelections] = useState({});
  const [activeWord, setActiveWord] = useState(null);

  // To'g'ri javoblar kaliti (tekshirish uchun yoki shunchaki struktura uchun)
  const correctPairs = {
    'Wretched': 'd', 'Indispensable': 'c', 'Afflicted': 'e', 'Yearning': 'b', 'Shambling': 'a',
    'Drab': 'b2', 'Hunched': 'd2', 'Underlip': 'e2', 'Muttering': 'a2', 'Foreman': 'c2'
  };

  const handleWordClick = (word) => {
    setActiveWord(word);
  };

  const handleOptionClick = (optionKey) => {
    if (activeWord) {
      setSelections(prev => ({ ...prev, [activeWord]: optionKey }));
      setActiveWord(null);
    } else {
      alert("Avval yuqori qismdan so'zni tanlang!");
    }
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

  const handleSubmit = () => {
    if (!userName.trim()) {
      alert("Iltimos ismingizni kiriting!");
      return;
    }

    // Tanlangan barcha juftliklarni matn ko'rinishiga keltirish
    const finalAnswers = Object.entries(selections).map(
      ([word, option]) => `${word} -> ${option.replace('2', '').toUpperCase()}`
    );

    const finalData = {
      user: userName,
      answers: finalAnswers,
      level: 'Reorganization', // Darajasi: Reorganization
      taskType: 'Task 1',      // Bo'lim: Task 1 answers (Taskone bilan bir xil joyga tushadi)
      date: new Date().toLocaleString()
    };

    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push(finalData);
    localStorage.setItem('allTests', JSON.stringify(oldData));

    toast.success("Natijalar Task 1 (Reorganization) bo'limiga yuborildi!");
    navigate('/teacherPage');
  };

  return (
    <div data-aos="fade-left" className='tasks task-two'>
      <div className="tasktwo-card">
        <h2 style={{textAlign: 'center', color: '#2c3e50'}}>Vocabulary Matching (Task 1.2)</h2>
        <p style={{textAlign: 'center', color: '#7f8c8d'}}>Click a word, then click its definition</p>
        
        {/* PART 1 */}
        <div className="tasktwo-question display-flex" style={{marginBottom: '30px', justifyContent: 'space-around'}}>
          <ul className='salom'>
            {['1. Wretched', '2. Indispensable', '3. Afflicted', '4. Yearning', '5. Shambling'].map(word => (
              <li key={word} style={getTextColor('word', word)} onClick={() => handleWordClick(word)}>{word}</li>
            ))}
          </ul>
          <ul className='salom'>
            <li style={getTextColor('option', 'a')} onClick={() => handleOptionClick('a')}>a) moving in a slow, awkward way</li>
            <li style={getTextColor('option', 'b')} onClick={() => handleOptionClick('b')}>b) a strong longing</li>
            <li style={getTextColor('option', 'c')} onClick={() => handleOptionClick('c')}>c) absolutely necessary</li>
            <li style={getTextColor('option', 'd')} onClick={() => handleOptionClick('d')}>d) very unhappy</li>
            <li style={getTextColor('option', 'e')} onClick={() => handleOptionClick('e')}>e) suffering from</li>
          </ul>
        </div>

        {/* PART 2 */}
        <div className="tasktwo-question display-flex" style={{justifyContent: 'space-around'}}>
          <ul className='salom'>
            {['1. Drab', '2. Hunched', '3. Underlip', '4. Muttering', '5. Foreman'].map(word => (
              <li key={word} style={getTextColor('word', word)} onClick={() => handleWordClick(word)}>{word}</li>
            ))}
          </ul>
          <ul className='salom'>
            <li style={getTextColor('option', 'a2')} onClick={() => handleOptionClick('a2')}>a) speaking in a low voice</li>
            <li style={getTextColor('option', 'b2')} onClick={() => handleOptionClick('b2')}>b) dull and without color</li>
            <li style={getTextColor('option', 'c2')} onClick={() => handleOptionClick('c2')}>c) person in charge of workers</li>
            <li style={getTextColor('option', 'd2')} onClick={() => handleOptionClick('d2')}>d) bending forward</li>
            <li style={getTextColor('option', 'e2')} onClick={() => handleOptionClick('e2')}>e) the lower lip</li>
          </ul>
        </div>

        <div className="submit-box" style={{marginTop: '30px', textAlign: 'center'}}>
          <input 
            type="text" 
            className="inp" 
            placeholder='Your name' 
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className='tasktwo-btn' onClick={handleSubmit}>Yuborish</button>
        </div>
      </div>
    </div>
  )
}

export default Tasktwo;