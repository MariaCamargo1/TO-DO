// App.jsx
import  { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';
import Newtodo from './components/Newtodo';
import  Tododetail from './components/Tododetail';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Recuperar las tareas del almacenamiento local al cargar la página
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = task => {
    setTasks([...tasks, task]);
    updateLocalStorage([...tasks, task]);
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const updateLocalStorage = updatedTasks => {
    // Actualizar las tareas en el almacenamiento local
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Todolist tasks={tasks} deleteTask={deleteTask} />} />
        <Route path="/newtodo" element={<Newtodo addTask={addTask} />} />
        <Route path="/tododetail" element={<Tododetail tasks={tasks} deleteTask={deleteTask} />} />
      </Routes>
    </div>
  );
}


export default App;


