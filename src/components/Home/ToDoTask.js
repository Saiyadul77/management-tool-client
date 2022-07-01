import React from 'react';

const ToDoTask = ({ task }) => {
    const { name, description } = task;
    return (
        <div className='text-center sm:text-left'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <label class="label cursor-pointer">
                            <span class="label-text">Edit</span>
                            <input type="checkbox" checked="checked" class="checkbox" />
                        </label>
                </div>
            </div>
            
        </div>
    );
};

export default ToDoTask;