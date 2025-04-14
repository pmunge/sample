import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) setTasks([...tasks, { text: newTask, id: Date.now() }]);
    setNewTask('');
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl mb-2">ToDo List</h2>
      <div className="flex gap-2 mb-4">
        <input className="flex-1 p-2 border" value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Add task" />
        <button className="bg-purple-500 text-white px-3 py-1" onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <input
              className="border flex-1 p-1 mr-2"
              value={task.text}
              onChange={(e) => updateTask(task.id, e.target.value)}
            />
            <button className="bg-pink-500 text-white px-2 py-1" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}