
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask } from './Slice';

const Todolist = () => {
  const tasks = useSelector(state => state.todos.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className='Todolist'>TO DO List</h1>
      {tasks.map(task => (
        <div key={task.id}>
          <h2 className='Titulo'>{task.title}</h2>
          <button className='equis' onClick={() => dispatch(deleteTask(task.id))}>Remove</button> 
        </div>
      ))}
      <div>
        <Link className='nuevatarea' to="/newtodo">TO DO</Link>
      </div>
    </div>
  );
};

export default Todolist;
