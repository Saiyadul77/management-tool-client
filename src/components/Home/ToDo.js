import React, { useEffect, useState } from 'react';
import ToDoTask from './ToDoTask';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const url = `https://remembrance-bunnyhug-48402.herokuapp.com/task`
    fetch(url)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, [])
  return (
    <div>
      <h1 className='text-center text-2xl font-bold text-primary my-5'>To Do List</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

        {
          tasks.map(task => <ToDoTask key={task._id}
            task={task}
          ></ToDoTask>)
        }
      </div>
    </div>
  );
};

export default ToDo;