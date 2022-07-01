import React from 'react';
import AddTask from './AddTask';
import Calendar from './Calendar';
import TaskCompleted from './TaskCompleted';
import ToDo from './ToDo';

const Home = () => {
    return (
        <div>
            <AddTask></AddTask>
           <TaskCompleted></TaskCompleted>
           <ToDo></ToDo>
           <Calendar></Calendar> 
        </div>
    );
};

export default Home;