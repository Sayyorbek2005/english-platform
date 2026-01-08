import './taskone1.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { sendToTelegram } from "../../../../telegram"; 
import { BOT_1 } from "../../../../telegramConfig"; 

const Taskone1 = () => {
    const [userName, setUserName] = useState('');
    const [allAnswers, setAllAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const task1Questions = [
        { id: 'T1_1', text: 'The story takes place on the evening of October 19, 1969.' },
        { id: 'T1_2', text: 'The husband and wife have two young daughters in the story.' },
        { id: 'T1_3', text: 'The world is ending because of a nuclear war in the story.' },
        { id: 'T1_4', text: 'The parents let their children stay up late instead of following their usual bedtime routine.' },
        { id: 'T1_5', text: 'The story clearly explains why the world is ending on that night.' }
    ];

    const task3Questions = [
        { id: 'T3_1', text: 'What question does the husband ask his wife at the beginning of the story?' },
        { id: 'T3_2', text: 'How does the husband realize that others have had the same dream about the world ending?' },
        { id: 'T3_3', text: 'What time do the husband and wife put their children to bed on the last night?' },
        { id: 'T3_4', text: 'What do the husband and wife do together after washing the dishes on the final evening?' },
        { id: 'T3_5', text: 'What final words do the husband and wife exchange before going to sleep?' }
    ];

    const task4Questions = [
        { 
            id: 'T4_1', 
            question: '1. What are the main characters doing at the beginning of the story?', 
            options: [
                { label: 'A', text: 'A. Reading by the fireplace' },
                { label: 'B', text: 'B. Drinking coffee while their children play' },
                { label: 'C', text: 'C. Watching television' },
                { label: 'D', text: 'D. Saying goodbye to neighbours' }
            ] 
        },
        { 
            id: 'T4_2', 
            question: '2. What does the husband reveal he experienced four nights ago?', 
            options: [
                { label: 'A', text: 'A. A phone call from an old friend' },
                { label: 'B', text: 'B. A dream about the world ending' },
                { label: 'C', text: 'C. A sudden illness' },
                { label: 'D', text: 'D. A power outage' }
            ] 
        },
        { 
            id: 'T4_3', 
            question: '3. How does the wife initially respond to the husband’s dream?', 
            options: [
                { label: 'A', text: 'A. She panics' },
                { label: 'B', text: 'B. She laughs it off' },
                { label: 'C', text: 'C. She’s surprised but calm' },
                { label: 'D', text: 'D. She accuses him of lying' }
            ] 
        },
        { 
            id: 'T4_4', 
            question: '4. What activity do the couple eventually decide to do after their discussion?', 
            options: [
                { label: 'A', text: 'A. Go outside for a walk and enjoy the time' },
                { label: 'B', text: 'B. Call their friends and have a small talk' },
                { label: 'C', text: 'C. Wash the dishes and put the children to bed' },
                { label: 'D', text: 'D. Write letters to family' }
            ] 
        },
        { 
            id: 'T4_5', 
            question: '5. What is the last thing the couple does before falling asleep?', 
            options: [
                { label: 'A', text: 'A. Say goodbye to the children' },
                { label: 'B', text: 'B. Turn off the radio' },
                { label: 'C', text: 'C. Share a laugh and say goodnight' },
                { label: 'D', text: 'D. Turn off the lights and lock the door' }
            ] 
        },
        { 
            id: 'T4_6', 
            question: '6. Who else had the same dream, according to the husband?', 
            options: [
                { label: 'A', text: 'A. His neighbors' },
                { label: 'B', text: 'B. His boss and coworkers' },
                { label: 'C', text: 'C. Everyone in his office' },
                { label: 'D', text: 'D. Only his wife and children' }
            ] 
        },
        { 
            id: 'T4_7', 
            question: '7. Which of the following best summarizes the couple’s emotional state?', 
            options: [
                { label: 'A', text: 'A. Anxious and afraid' },
                { label: 'B', text: 'B. Calm and accepting' },
                { label: 'C', text: 'C. Confused and angry' },
                { label: 'D', text: 'D. Excited and hopeful' }
            ] 
        },
        { 
            id: 'T4_8', 
            question: '8. What happens after the couple finishes their coffee?', 
            options: [
                { label: 'A', text: 'A. They go out to warn others' },
                { label: 'B', text: 'B. They fall asleep immediately' },
                { label: 'C', text: 'C. They reflect on life and prepare for bed' },
                { label: 'D', text: 'D. They write a letter to their children' }
            ] 
        }
    ];

    const handleData = (key, val) => {
        if (isSubmitted) return;
        setAllAnswers(prev => ({ ...prev, [key]: val }));
    }

    const handleSubmit = () => {
        if (isSubmitted) return toast.info("Siz allaqachon javob yuborgansiz.");
        if (!userName.trim()) return toast.error("Iltimos ismingizni kiriting!");
        
        let telegramText = `🧑‍🎓 Bradbury Quiz\n👤 Ism: ${userName}\n\n📊 Javoblar:\n`;
        Object.entries(allAnswers).sort().forEach(([key, val]) => {
            telegramText += `🔹 ${key}: ${val}\n`;
        });

        sendToTelegram(BOT_1.token, BOT_1.chatId, telegramText);
        setIsSubmitted(true);
        toast.success("Natijalar muvaffaqiyatli yuborildi!");
    }

    const taskBoxStyle = {
        background: '#ffffff',
        padding: '25px',
        borderRadius: '12px',
        border: '1px solid #e0e6ed',
        boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
        marginBottom: '30px'
    };

    return (
        <div data-aos="fade-left" className='task-cont'>
            <div className="tasks">
                <div className="taskone1-card" style={{ background: '#f8f9fa', padding: '30px' }}>
                    
                    <div className="mini-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
                    </div>

                    {/* TASK 1 */}
                    <div style={taskBoxStyle}>
                        <p className="task-instruction" style={{ fontSize: '16px', borderLeft: '4px solid #3498db', paddingLeft: '15px', marginBottom: '20px' }}>
                            <strong>Task 1.</strong> Decide whether each statement is <b>True (T)</b>, <b>False (F)</b>, or <b>Not Given (NG)</b>.
                        </p>
                        <table className="quiz-table" style={{ fontSize: '15px', background: 'white' }}>
                            <tbody>
                                {task1Questions.map((q, idx) => (
                                    <tr key={q.id}>
                                        <td width="40" className="text-center">{idx + 1}</td>
                                        <td>{q.text}</td>
                                        <td width="120">
                                            <input disabled={isSubmitted} className='table-inp' type="text" placeholder='T/F/NG' style={{ textAlign:'center' }} onChange={(e) => handleData(q.id, e.target.value)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* TASK 2 */}
                    <div style={taskBoxStyle}>
                        <p className="task-instruction" style={{ fontSize: '16px', borderLeft: '4px solid #e67e22', paddingLeft: '15px', marginBottom: '20px' }}>
                            <strong>Task 2.</strong> Complete each sentence with the appropriate word from the story.
                        </p>
                        <div style={{ fontSize: '14px', background: '#fff9f4', padding: '10px', borderRadius: '8px', color: '#d35400', marginBottom: '25px', textAlign: 'center', border: '1px solid #ffeada' }}>
                            <strong>Word Bank:</strong> 1969 | dream | coffee | daughters | book
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15.5px' }}>
                            <div style={{ lineHeight: '1.8' }}>1. The husband first learns about the impending event when he discovers that others shared the same <input placeholder="answer" disabled={isSubmitted} style={{ width: '110px', borderBottom: '2px solid #e67e22', borderTop:'none', borderLeft:'none', borderRight:'none', outline:'none', textAlign:'center', background:'transparent', fontWeight:'bold' }} onChange={(e) => handleData('T2_1', e.target.value)} /> he had about the world ending.</div>
                            <div style={{ lineHeight: '1.8' }}>2. The date identified as the last night of the world is October 19, <input placeholder="answer" disabled={isSubmitted} style={{ width: '90px', borderBottom: '2px solid #e67e22', borderTop:'none', borderLeft:'none', borderRight:'none', outline:'none', textAlign:'center', background:'transparent', fontWeight:'bold' }} onChange={(e) => handleData('T2_2', e.target.value)} />.</div>
                            <div style={{ lineHeight: '1.8' }}>3. The couple remain calm and follow their normal routine, even drinking <input placeholder="answer" disabled={isSubmitted} style={{ width: '110px', borderBottom: '2px solid #e67e22', borderTop:'none', borderLeft:'none', borderRight:'none', outline:'none', textAlign:'center', background:'transparent', fontWeight:'bold' }} onChange={(e) => handleData('T2_3', e.target.value)} /> together in the evening as usual.</div>
                            <div style={{ lineHeight: '1.8' }}>4. At 8:30 P.M. on the final night, they put their two young <input placeholder="answer" disabled={isSubmitted} style={{ width: '110px', borderBottom: '2px solid #e67e22', borderTop:'none', borderLeft:'none', borderRight:'none', outline:'none', textAlign:'center', background:'transparent', fontWeight:'bold' }} onChange={(e) => handleData('T2_4', e.target.value)} /> to bed, just as they do every night.</div>
                            <div style={{ lineHeight: '1.8' }}>5. The man describes the end of the world as being like “the closing of a <input placeholder="answer" disabled={isSubmitted} style={{ width: '110px', borderBottom: '2px solid #e67e22', borderTop:'none', borderLeft:'none', borderRight:'none', outline:'none', textAlign:'center', background:'transparent', fontWeight:'bold' }} onChange={(e) => handleData('T2_5', e.target.value)} />,” implying a quiet and simple finish.</div>
                        </div>
                    </div>

                    {/* TASK 3 */}
                    <div style={taskBoxStyle}>
                        <p className="task-instruction" style={{ fontSize: '16px', borderLeft: '4px solid #27ae60', paddingLeft: '15px', marginBottom: '20px' }}>
                            <strong>Task 3.</strong> Answer each question with a brief factual response based on the story.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {task3Questions.map((q, idx) => (
                                <div key={q.id}>
                                    <p style={{ fontSize: '15.5px', marginBottom: '8px', fontWeight: '500' }}>{idx + 1}. {q.text}</p>
                                    <textarea disabled={isSubmitted} placeholder="Your answer..." style={{ width: '100%', minHeight: '60px', padding: '12px', borderRadius: '8px', border: '1px solid #dcdde1', fontSize: '14.5px', outline: 'none' }} onChange={(e) => handleData(q.id, e.target.value)} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TASK 4 */}
                    <div style={taskBoxStyle}>
                        <p className="task-instruction" style={{ fontSize: '16px', borderLeft: '4px solid #8e44ad', paddingLeft: '15px', marginBottom: '20px' }}>
                            <strong>Task 4.</strong> Choose the most appropriate answer among the variants.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            {task4Questions.map((q) => (
                                <div key={q.id}>
                                    <p style={{ fontSize: '15.5px', fontWeight: '600', color: '#2c3e50', marginBottom: '15px' }}>{q.question}</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        {q.options.map((opt) => (
                                            <div 
                                                key={opt.label}
                                                onClick={() => handleData(q.id, opt.label)}
                                                style={{ 
                                                    padding: '12px 15px', 
                                                    borderRadius: '8px', 
                                                    border: allAnswers[q.id] === opt.label ? '2px solid #8e44ad' : '1px solid #eee',
                                                    background: allAnswers[q.id] === opt.label ? '#f3e5f5' : '#f9f9f9',
                                                    cursor: isSubmitted ? 'default' : 'pointer',
                                                    fontSize: '14.5px',
                                                    transition: '0.2s'
                                                }}
                                            >
                                                {opt.text}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SUBMIT SECTION */}
                    <div className="submit-section">
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