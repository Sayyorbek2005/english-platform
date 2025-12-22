import '../../test.css'
import './taskthree.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Taskthree = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  
  // Part 1 va Part 2 javoblarini bitta ob'ektda saqlaymiz
  const [allAnswers, setAllAnswers] = useState({});

  const [answers] = useState([
    { id: 1, partA:'Part-1', question: '1.Words from the story-Antonym choices "Lustreless"', optionsA: 'Upbright', optionsB: 'bent', optionsC: 'stooped' },
    { id: 2, question: '2.Words from the story-Antonym choices "Hunched"', optionsA: 'shiny', optionsB: 'dull', optionsC: 'dim' },
    { id: 3, question: '3.Words from the story-Antonym choices "Brooding"', optionsA: 'reflective', optionsB: 'carefree', optionsC: 'worrying' },
    { id: 4, question: '4.Words from the story-Antonym choices "Drab"', optionsA: 'colorful', optionsB: 'gray', optionsC: 'boring' },
    { id: 5, question: '5.Words from the story-Antonym choices "Curtly"', optionsA: 'politely', optionsB: 'abruptly', optionsC: 'briefly' },
  ]);

  const [questions] = useState([
    { id: 2.1, partB: "Part-2", question: 'Put the words in the blanks of the text. ', optionA: "Mercy", optionB: "Women", optionC: "Hairdresser", optionD: "Separation", optionE: "Owen Lewis", optionF: "Harry", optionG: "Kathleen" },
  ]);

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

  // Part 1 tanlash funksiyasi
  const handlePart1 = (qId, variant) => {
    setAllAnswers(prev => ({ ...prev, [`P1-Q${qId}`]: variant }));
  };

  // Part 2 input o'zgarishi
  const handlePart2 = (tId, val) => {
    setAllAnswers(prev => ({ ...prev, [`P2-T${tId}`]: val }));
  };

  const handleSubmit = () => {
    if (!userName.trim()) {
      alert("Iltimos ismingizni kiriting!");
      return;
    }

    // TeacherPage uchun javoblarni formatlash
    const formattedAnswers = Object.entries(allAnswers).map(([key, val]) => `${key}: ${val}`);

    const resultData = {
      user: userName,
      answers: formattedAnswers, // results emas, answers
      level: 'Inferential',       // Darajasi: Inferential
      taskType: 'Task 1',         // Saqlash joyi: Task 1 answers
      date: new Date().toLocaleString()
    };

    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push(resultData);
    localStorage.setItem('allTests', JSON.stringify(oldData));

    toast.success("Natijalar Task 1 (Inferential) bo'limiga yuborildi!");
    navigate('/teacherPage');
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
                  <li 
                    className='a' 
                    onClick={() => handlePart1(item.id, 'a')}
                    style={{ color: allAnswers[`P1-Q${item.id}`] === 'a' ? '#007bff' : '', cursor: 'pointer' }}
                  >a. {item.optionsA}</li>
                  <li 
                    className='b' 
                    onClick={() => handlePart1(item.id, 'b')}
                    style={{ color: allAnswers[`P1-Q${item.id}`] === 'b' ? '#007bff' : '', cursor: 'pointer' }}
                  >b. {item.optionsB}</li>
                </div>
                <div>
                  <li 
                    className='c' 
                    onClick={() => handlePart1(item.id, 'c')}
                    style={{ color: allAnswers[`P1-Q${item.id}`] === 'c' ? '#007bff' : '', cursor: 'pointer' }}
                  >c. {item.optionsC}</li>
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
                      onChange={(e) => handlePart2(num, e.target.value)}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <input 
          type="text" 
          className="inp" 
          placeholder='What is your name ?' 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className='taskthree-btn' onClick={handleSubmit}>Yuborish</button>
      </div>
    </div>
  )
}

export default Taskthree;