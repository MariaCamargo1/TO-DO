
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask, toggleTaskStatus } from './Slice';

const Tododetail = () => {
  const tasks = useSelector(state => state.todos.tasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const dispatch = useDispatch();

  const handleCheckboxChange = taskId => {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter(id => id !== taskId));
    } else {
      setCompletedTasks([...completedTasks, taskId]);
    }
    dispatch(toggleTaskStatus(taskId));
  };

  return (
    <div>
      <h1 className='detalletarea'>Detalles de la Tarea</h1>
      {tasks.map(task => (
        <div key={task.id}>
          <div>
            <strong className='titulodetalle'>TITULO: {task.title}</strong> 
          </div>
          <div>
            <strong className='fechadetalle'>FECHA:{task.date}</strong> 
          </div>
          <div>
            <strong className='descripdetalle'>DESCRIPCION:{task.description}</strong>
          </div>

          <div>
            <label className='completada'>
              Completada:
              <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(task.id)} />
            </label>
          </div>

          <div>
            <button className='eliminar' onClick={() => dispatch(deleteTask(task.id))}>Eliminar</button>
            <hr />
          </div>
        </div>
      ))}
      <div>
        <Link className='volver' to="/">TO DO list</Link>
      </div>
    </div>
  );
};

export default Tododetail;
