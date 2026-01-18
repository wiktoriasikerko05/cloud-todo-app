import { useState, useEffect } from 'react';
import { db } from './firebase';
import { 
  collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc, query, orderBy 
} from 'firebase/firestore';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 1. SYNC
  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data().item,
        completed: doc.data().completed
      })));
    });
    return () => unsubscribe();
  }, []);

  // 2. ADD
  const addTodo = async (e) => {
    e.preventDefault();
    if (input === '') return;
    await addDoc(collection(db, 'todos'), {
      item: input,
      completed: false,
      timestamp: new Date()
    });
    setInput('');
  };

  // 3. UPDATE
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    });
  };

  // 4. DELETE
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div className="container">
      <h1>☁️ Cloud To-Do List</h1>
      <form onSubmit={addTodo} className="form">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Write a task..." 
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div className="text-group" onClick={() => toggleComplete(todo)}>
              <input type="checkbox" checked={todo.completed} readOnly />
              <span>{todo.item}</span>
            </div>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
