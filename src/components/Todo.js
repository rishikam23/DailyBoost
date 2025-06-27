import { useState, useEffect } from 'react';
import './styles.css';

function Todo() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const newTask = { text: 'New Task', done: false };
    setTasks([...tasks, newTask]);
    setEditingIndex(tasks.length);
    setEditText(newTask.text);
  };

  const updateTask = (index, newText) => {
    const updated = [...tasks];
    updated[index].text = newText;
    setTasks(updated);
  };

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div id="todo">
    <h2 className = "todo-title" >To-Do List</h2>
    <ul className="list-group">
        {tasks.map((task, index) => (
            <li className="list-group-item" key={index}>
            <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleDone(index)}
            />
            {editingIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => {
                  if (editText.trim() !== '') {
                    updateTask(index, editText.trim());
                  }
                  setEditingIndex(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') e.target.blur();
                }}
                autoFocus
              />
            ) : (
              <span style={{
                textDecoration: task.done ? 'line-through' : 'none',
                opacity: task.done ? 0.6 : 1,
              }}
              onDoubleClick={() => {
                setEditingIndex(index);
                setEditText(task.text);
              }}
               >{task.text}</span> )
            }
            <button className="delete-task" 
              onClick={() => deleteTask(index)}
              style={{ marginLeft: '8px' }}
            >X
            </button>
          </li>
        ))}
      </ul>
      <button className="add-task" onClick={addTask}>+ Add Task</button>
    </div>
  );
}

export default Todo;