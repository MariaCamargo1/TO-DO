
import { Link } from 'react-router-dom';

export const Todolist = ({ tasks, deleteTask }) => {
  return (
    <div>
      <h1 className='Todolist'>TO DO List</h1>
      {tasks.map(task => (
        <div key={task.id}>
          <h2 className='Titulo'>{task.title}</h2>
          <button className='equis' onClick={() => deleteTask(task.id)}>Remove</button> 
        </div>
        
      ))}
      <div>
      <Link className='nuevatarea' to="/newtodo">TO DO</Link>
      </div>
    </div>
  );
};

export default Todolist;

