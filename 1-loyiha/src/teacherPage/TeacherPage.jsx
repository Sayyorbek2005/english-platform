import { useEffect, useState } from 'react';
import "./teacherPage.css";

const TeacherPage = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('allTests') || '[]');
    setResults(data);
  }, []);

  const handleClear = () => {
    if (window.confirm("Haqiqatdan ham o'chirmoqchimisiz?")) {
      localStorage.removeItem('allTests');
      setResults([]);
    }
  };

  // FILTRLASH MANTIQI:
  // Task 1 Answers bo'limiga "Task 1." so'zi YO'Q bo'lganlar tushadi (Task 1, Task 2, Task 5 kabilar)
  const task1Results = results.filter(item => !item.taskType?.includes("Task 1."));
  // Task 2 Answers bo'limiga "Task 1." so'zi BOR bo'lganlar tushadi (Task 1.1, Task 1.2 kabilar)
  const task2Results = results.filter(item => item.taskType?.includes("Task 1."));

  const renderCards = (data) => (
    <div className="t-p-test-cards">
      {data.map((res, i) => (
        <div key={i} className="result-card" style={{ border: '1px solid #ccc', margin: '15px 0', padding: '15px', borderRadius: '10px', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>O'quvchi: {res.user}</h3>
            <span style={{ fontWeight: 'bold', color: '#e67e22' }}>{res.level}</span>
          </div>
          <p>Vaqt: {res.date} | <small>Bo'lim: {res.taskType}</small></p>
          <hr />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
            <strong>Javoblar: </strong>
            {res.answers && typeof res.answers === 'object' ? (
              Object.entries(res.answers).map(([qId, ans]) => (
                <span key={qId} style={{ background: '#f0f0f0', padding: '4px 10px', borderRadius: '4px', fontSize: '14px' }}>
                  {qId}: <b>{String(ans)}</b>
                </span>
              ))
            ) : (
              <span>{String(res.answers)}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div data-aos="fade-left"  className='teacher-page' style={{ padding: '20px', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{color: '#2c3e50'}}>Teacher Control Panel</h1>
        <button onClick={handleClear} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          Tozalash
        </button>
      </div>

      {/* TASK 1 BLOCK */}
      <div className="task-container" style={{ border: '2px solid #3498db', borderRadius: '15px', padding: '20px', marginBottom: '40px', background: '#fff' }}>
        <h2 style={{ marginTop: 0, color: '#3498db' }}>Task 1 Answers (General Tasks)</h2>
        {task1Results.length === 0 ? <p>Hozircha natijalar yo'q.</p> : renderCards(task1Results)}
      </div>

      {/* TASK 2 BLOCK */}
      <div className="task-container" style={{ border: '2px solid #2ecc71', borderRadius: '15px', padding: '20px', background: '#fff' }}>
        <h2 style={{ marginTop: 0, color: '#2ecc71' }}>Task 2 Answers (Sub-tasks 1.x)</h2>
        {task2Results.length === 0 ? <p>Hozircha natijalar yo'q.</p> : renderCards(task2Results)}
      </div>
    </div>
  );
};

export default TeacherPage;