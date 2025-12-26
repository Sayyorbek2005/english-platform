import './taskone1.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"; // Telegram funksiyasi
import { BOT_1 } from "../../../../telegramConfig"; // Siz yaratgan BOT1

const Taskone1 = () => {
    const [userName, setUserName] = useState('');
    const [allAnswers, setAllAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

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

    // ... answerstwo, answersthree, answersfour o'zgarishsiz qoladi

    const handleData = (key, val) => {
        if (isSubmitted) return;
        setAllAnswers(prev => ({ ...prev, [key]: val }));
    }

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
            toast.warning("Iltimos, javoblarni to'ldiring!");
            return;
        }

        // 🔹 Telegramga yuborish matni
        let telegramText = `🧑‍🎓 Test natijalari
👤 Ism: ${userName}
📘 Level: Literal
📝 Task: Task 1.1
📅 Sana: ${new Date().toLocaleString()}

📊 Javoblar:\n`;

        Object.entries(allAnswers).forEach(([key, val]) => {
            telegramText += `${key}: ${val}\n`;
        });

        sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);

        // 🔹 LocalStorage ga saqlash
        const oldData = JSON.parse(localStorage.getItem('allTests') || '[]');
        oldData.push({
            user: userName,
            answers: allAnswers,
            level: 'Literal',
            taskType: 'Task 1.1',
            date: new Date().toLocaleString()
        });
        localStorage.setItem('allTests', JSON.stringify(oldData));

        toast.success("Natijalar yuborildi!");
        setIsSubmitted(true);
    }

    return (
        <div data-aos="fade-left" className='task-cont'>
            <div className="tasks">
                <div className="taskone1-card">
                    {/* PART 1 */}
                    {answers.map((item, index) => (
                        <div key={index} className="taskone1-question">
                            <div>
                                <h1>{item.task1}</h1>
                                <div className='answer-1'>
                                    <h3>1. {item.questionA}</h3>
                                    <input disabled={isSubmitted} className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P1-Q1', e.target.value)} />
                                    <h3>2. {item.questionB}</h3>
                                    <input disabled={isSubmitted} className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P1-Q2', e.target.value)} />
                                    <h3>3. {item.questionC}</h3>
                                    <input disabled={isSubmitted} className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P1-Q3', e.target.value)} />
                                    <h3>4. {item.questionD}</h3>
                                    <input disabled={isSubmitted} className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P1-Q4', e.target.value)} />
                                    <h3>5. {item.questionE}</h3>
                                    <input disabled={isSubmitted} className='taskone1-input' type="text" placeholder='Your answer' onChange={(e) => handleData('P1-Q5', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* PART 2, PART 3, PART 4 */}
                    {/* answerstwo, answersthree, answersfour kodlari o‘zgarmaydi, faqat handleData ishlaydi */}

                    <div style={{marginTop: '30px', textAlign: 'center'}}>
                      <input 
                          disabled={isSubmitted}
                          type="text" 
                          className="inp" 
                          placeholder='What is your name ?' 
                          value={userName} 
                          onChange={(e) => setUserName(e.target.value)} 
                      />
                      <button 
                          className='taskone1-btn' 
                          onClick={handleSubmit}
                          style={{ 
                              display: 'block', 
                              margin: '20px auto 0 auto',
                              opacity: isSubmitted ? 0.7 : 1,
                              cursor: 'pointer'
                          }}
                      >
                          {isSubmitted ? "Yuborildi" : "Yuborish"}
                      </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Taskone1;
