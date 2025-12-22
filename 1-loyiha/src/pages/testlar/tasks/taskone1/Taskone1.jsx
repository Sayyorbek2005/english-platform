import './taskone1.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Taskone1 = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [allAnswers, setAllAnswers] = useState({});

    const [answers] = useState([
        {
            id: 1,
            task1: 'Task1. Decide whether each statement is True, False, or Not Given based on the story.',
            questionA: 'The story takes place on the evening of October 19, 1969. (True/False/Not Given)',
            questionB: 'The husband and wife have two young daughters in the story. (True/False/Not Given)',
            questionC: 'The world is ending because of a nuclear war in the story. (True/False/Not Given)',
            questionD: 'The parents let their children stay up late instead of following their usual bedtime routine. (True/False/Not Given)',
            questionE: 'The story clearly explains why the world is ending on that night. (True/False/Not Given)'
        }
    ])
    const [answerstwo] = useState([
        {
            id: 1,
            fill: 'Fill-in-the-Gaps Questions',
            task2: 'Complete each sentence with the appropriate word from the story. Use the word bank below if needed.',
            word: 'Word Bank: 1969, dream, coffee, daughters, book',
            questionA: 'The husband first learns about the impending event when he discovers that others shared the same _______ he had about the world ending.',
            questionB: 'The date identified as the last night of the world is October 19, _______.',
            questionC: 'The couple remain calm and follow their normal routine, even drinking _______ together in the evening as usual.',
            questionD: 'At 8:30 P.M. on the final night, they put their two young _______ to bed, just as they do every night.',
            questionE: 'The man describes the end of the world as being like “the closing of a _______,” implying a quiet and simple finish.'
        }
    ])
    const [answersthree] = useState([
        {
            id: 1,
            short: 'Short Answer Questions',
            task3: 'Answer each question with a brief factual response based only on details from the story.',
            questionA: 'What question does the husband ask his wife at the beginning of the story?',
            questionB: 'How does the husband realize that others have had the same dream about the world ending?',
            questionC: 'What time do the husband and wife put their children to bed on the last night?',
            questionD: 'What do the husband and wife do together after washing the dishes on the final evening?',
            questionE: 'What final words do the husband and wife exchange before going to sleep?'
        }
    ])
    const [answersfour] = useState([
        { id: 1, question: 'What are the main characters doing at the beginning of the story? ', optionA: 'Reading by the fireplace', optionB: 'Drinking coffee while their children play ', optionC: 'Watching television ', optionD: 'Saying goodbye to neighbours' },
        { id: 2, question: 'What does the husband reveal he experienced four nights ago? ', optionA: 'A phone call from an old friend', optionB: 'A dream about the world ending', optionC: 'A sudden illness', optionD: 'A power outage' },
        { id: 3, question: 'How does the wife initially respond to the husband’s dream? ', optionA: 'She panics ', optionB: 'She laughs it off ', optionC: 'She’s surprised but calm', optionD: 'She accuses him of lying' },
        { id: 4, question: 'What activity do the couple eventually decide to do after their discussion? ', optionA: 'Go outside for a walk and enjoy the time', optionB: 'Call their friends and have a small talk', optionC: 'Wash the dishes and put the children to bed', optionD: 'Write letters to family' },
        { id: 5, question: 'What is the last thing the couple does before falling asleep? ', optionA: 'Say goodbye to the children', optionB: 'Turn off the radio ', optionC: 'Share a laugh and say goodnight ', optionD: 'Turn off the lights and lock the door' },
        { id: 6, question: 'Who else had the same dream, according to the husband?', optionA: 'His neighbors', optionB: 'His boss and coworkers', optionC: 'Everyone in his office', optionD: 'Only his wife and children' },
        { id: 7, question: 'Which of the following best summarizes the couple’s emotional state?', optionA: 'Anxious and afraid ', optionB: 'Calm and accepting ', optionC: 'Confused and angry ', optionD: 'Excited and hopeful' },
        { id: 8, question: 'What happens after the couple finishes their coffee?', optionA: 'They go out to warn others ', optionB: 'They fall asleep immediately', optionC: 'They reflect on life and prepare for bed ', optionD: 'They write a letter to their children' }
    ])

    const handleData = (key, val) => {
        setAllAnswers(prev => ({ ...prev, [key]: val }));
    }

    const handleSubmit = () => {
        if (!userName.trim()) return alert("Ismingizni kiriting!");
        
        const finalData = {
            user: userName,
            answers: allAnswers, // TeacherPage'dagi Object.entries mantiqi uchun obyekt shaklida qoldirdik
            level: 'Literal', 
            // TeacherPage'dagi item.taskType?.includes("Task 1.") shartini bajarish uchun:
            taskType: 'Task 1.1', 
            date: new Date().toLocaleString()
        };

        const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
        oldData.push(finalData);
        localStorage.setItem('allTests', JSON.stringify(oldData));
        toast.success("Natijalar Task 2 bo'limiga yuborildi!");
        navigate('/teacherPage');
    }

    return (
        <div data-aos="fade-left" className='tasks taskone1'>
            <div className="taskone1-card">
                {/* PART 1 */}
                {answers.map((item, index) => (
                    <div key={index} className="taskone1-question">
                        <div>
                            <h1>{item.task1}</h1>
                            <div className='answer-1'>
                                <h3>1. {item.questionA}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P1-Q1', e.target.value)} />
                                <h3>2. {item.questionB}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P1-Q2', e.target.value)} />
                                <h3>3. {item.questionC}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P1-Q3', e.target.value)} />
                                <h3>4. {item.questionD}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P1-Q4', e.target.value)} />
                                <h3>5. {item.questionE}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P1-Q5', e.target.value)} />
                            </div>
                        </div>
                    </div>
                ))}

                {/* PART 2 */}
                {answerstwo.map((itemtwo, indextwo) => (
                    <div key={indextwo} className="taskone1-question">
                        <div>
                            <h1>{itemtwo.fill}</h1>
                            <h1>{itemtwo.task2}</h1>
                            <div className='answer-1'>
                                <h3 style={{color: 'green'}}>{itemtwo.word}</h3>
                                <h3>1. {itemtwo.questionA}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P2-Q1', e.target.value)} />
                                <h3>2. {itemtwo.questionB}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P2-Q2', e.target.value)} />
                                <h3>3. {itemtwo.questionC}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P2-Q3', e.target.value)} />
                                <h3>4. {itemtwo.questionD}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P2-Q4', e.target.value)} />
                                <h3>5. {itemtwo.questionE}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P2-Q5', e.target.value)} />
                            </div>
                        </div>
                    </div>
                ))}

                {/* PART 3 */}
                {answersthree.map((itemthree, indexthree) => (
                    <div key={indexthree} className="taskone1-question">
                        <div>
                            <h1>{itemthree.short}</h1>
                            <h1>{itemthree.task3}</h1>
                            <div className='answer-1'>
                                <h3>1. {itemthree.questionA}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P3-Q1', e.target.value)} />
                                <h3>2. {itemthree.questionB}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P3-Q2', e.target.value)} />
                                <h3>3. {itemthree.questionC}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P3-Q3', e.target.value)} />
                                <h3>4. {itemthree.questionD}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P3-Q4', e.target.value)} />
                                <h3>5. {itemthree.questionE}</h3>
                                <input className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P3-Q5', e.target.value)} />
                            </div>
                        </div>
                    </div>
                ))}

                {/* PART 4 */}
                <h1 style={{marginTop: '30px'}}>Multiple choice questions</h1>
                {answersfour.map((itemfour, indexfour) => (
                    <div key={indexfour} className="taskone1-question">
                        <div>
                            <h2>{itemfour.question}</h2>
                            <ul>
                                <div>
                                    <li 
                                        style={{ cursor: 'pointer', color: allAnswers[`P4-Q${itemfour.id}`] === 'A' ? '#007bff' : '' }} 
                                        onClick={() => handleData(`P4-Q${itemfour.id}`, 'A')}
                                    >A. {itemfour.optionA}</li>
                                    <li 
                                        style={{ cursor: 'pointer', color: allAnswers[`P4-Q${itemfour.id}`] === 'B' ? '#007bff' : '' }} 
                                        onClick={() => handleData(`P4-Q${itemfour.id}`, 'B')}
                                    >B. {itemfour.optionB}</li>
                                </div>
                                <div>
                                    <li 
                                        style={{ cursor: 'pointer', color: allAnswers[`P4-Q${itemfour.id}`] === 'C' ? '#007bff' : '' }} 
                                        onClick={() => handleData(`P4-Q${itemfour.id}`, 'C')}
                                    >C. {itemfour.optionC}</li>
                                    <li 
                                        style={{ cursor: 'pointer', color: allAnswers[`P4-Q${itemfour.id}`] === 'D' ? '#007bff' : '' }} 
                                        onClick={() => handleData(`P4-Q${itemfour.id}`, 'D')}
                                    >D. {itemfour.optionD}</li><br />
                                </div>
                            </ul>
                        </div>
                    </div>
                ))}

                <div style={{marginTop: '30px'}}>
                  <input 
                      type="text" 
                      className="inp" 
                      placeholder='What is your name ?' 
                      value={userName} 
                      onChange={(e) => setUserName(e.target.value)} 
                  />
                  <button 
                      className='taskone1-btn' 
                      onClick={handleSubmit}
                      style={{ display: 'block', margin: '20px auto 0 auto' }}
                  >
                      Yuborish
                  </button>
                </div>
            </div>
        </div>
    )
}

export default Taskone1;