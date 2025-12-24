import '../../test.css'
import './taskfour.css'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Taskfour = () => {
  const [userName, setUserName] = useState('');
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [answers] = useState([
    {
      id: 1,
      question: 'Fill in the blanks in the tasks with the words from the word bank.',
      questionA: 'During the Great War, Mr. Henry Bosengate is summoned to serve as a ______ at the local assizes (court), which he feels is an annoying waste of his time.',
      optionA: 'juror, judge, soldier, lawyer',
      questionB: 'Mr. Bosengate’s wife, named ______, stands under the porch in a lilac linen dress to see him off on the morning of the trial.',
      optionB: 'Kathleen, Margaret, Elizabeth, Jane',
      questionC: 'His two young children, Kate and ______, run along the garden wall and wave goodbye to him as he drives away in his car.',
      optionC: 'Harry, William, Michael, Henry ',
      questionD: 'The defendant in the trial is a nervous young Welsh soldier named ______ ______, who is brought before the court in his ill-fitting uniform',
      optionD: 'Owen Lewis, David Evans, William Jones, Robert Lewis',
      questionE: 'In court, the soldier was desperately unhappy and explains to the audience that he had to commit suicide, as he couldn’t bear being separated from his  ______.',
      optionE: 'wife, regiment, children, parents',
      questionF: 'The soldier’s previous job was _______ before he was called up to the army',
      optionF: 'hairdresser, mechanic, farmer, teacher ',
      questionG: 'During the Process of verdict discussion, Mr. Bosengate claims recommending_______ for the soldier before he confirms the jury’s deliberations. ',
      optionG: 'mercy, punishment, conviction, discharge',
      questionH: 'The soldier was convicted because he tried to commit_____ when he served in the army, which was considered a serious offense.',
      optionH: 'suicide, theft, desertion, mutiny',
      questionI: 'Once the decision was announced, the soldier was instructed to return to the_______ and serve for the country, instead of being sent to prison. ',
      optionI: 'regiment, home, prison, office ',
      questionJ: 'Judging by the events, Mr. Bosengate had experienced, he concluded that people should be kind and _______ each other.  ',
      optionJ: 'help, obey, judge, admire  '
    },
  ]);

  const handleChange = (qKey, value) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [qKey]: value }));
  };

  const handleSubmit = () => {
    // 1. Allaqachon yuborilganini tekshirish
    if (isSubmitted) {
      toast.info("Siz allaqachon javob yuborgansiz.");
      return;
    }

    // 2. Ism tekshiruvi
    if (!userName.trim()) {
      toast.error("Iltimos ismingizni kiriting!");
      return;
    }

    // 3. Bo'sh javoblar tekshiruvi
    if (Object.keys(userAnswers).length === 0) {
      toast.warning("Iltimos, javoblarni to'ldiring!");
      return;
    }

    const formattedAnswers = Object.entries(userAnswers).map(
      ([key, val]) => `${key}: ${val}`
    );

    const finalData = {
      user: userName,
      answers: formattedAnswers,
      level: 'Evaluative',
      taskType: 'Task 1',
      date: new Date().toLocaleString()
    };

    const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
    oldData.push(finalData);
    localStorage.setItem('allTests', JSON.stringify(oldData));

    toast.success("Javoblar yuborildi!");
    setIsSubmitted(true);
  };

  return (
    <div data-aos="fade-left" className='tasks taskfour'>
      <div className="taskfour-card">
        {answers.map((item, index) => (
          <div key={index} className="taskfour-question">
            <div>
              <h2 style={{color: '#2c3e50', textAlign: 'center'}}>{item.question}</h2><br />
              <ul>
                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((letter, idx) => (
                  <div key={letter} style={{marginBottom: '20px'}}>
                    <li>{idx + 1}. {item[`question${letter}`]}</li>
                    <li style={{color: '#7f8c8d', fontSize: '14px', fontStyle: 'italic'}}>
                      Word bank: {item[`option${letter}`]}
                    </li>
                    <input 
                      className='taskfour-input' 
                      type="text" 
                      placeholder='Your answer'
                      value={userAnswers[`Q${idx + 1}`] || ''}
                      disabled={isSubmitted}
                      onChange={(e) => handleChange(`Q${idx + 1}`, e.target.value)}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
        <div className="submit-box" style={{textAlign: 'center', marginTop: '30px'}}>
          <input 
            type="text" 
            className="inp" 
            placeholder='What is your name ?' 
            value={userName}
            disabled={isSubmitted}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button 
            className='taskfour-btn' 
            onClick={handleSubmit}
            style={{ 
              display: 'block', 
              margin: '20px auto 0',
              opacity: isSubmitted ? 0.7 : 1,
              cursor: 'pointer'
            }}
          >
            {isSubmitted ? "Yuborildi" : "Yuborish"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Taskfour;