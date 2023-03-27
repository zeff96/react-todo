import { useEffect, useReducer } from 'react';
import './Render.scss';
import AddTask from './Add';
import taskReducer from './TaskReducer';
import AddTaskList from './Create';

let nextId = 0;

const getSavedTask = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  return tasks || [];
};

const RenderTask = () => {
  const [tasks, dispatch] = useReducer(taskReducer, getSavedTask());

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (text) => {
    dispatch({
      type: 'added_task',
      id: (nextId += 1),
      text,
    });
  };

  const handleToggleTask = (task) => {
    dispatch({
      type: 'toggle_task',
      task,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: 'changed_task',
      task,
    });
  };

  const handleDeleteTask = (id) => {
    dispatch({
      type: 'deleted_task',
      id,
    });
  };

  return (
    <div className="wrapper">
      <AddTask onAddTask={handleAddTask} />
      <AddTaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default RenderTask;
