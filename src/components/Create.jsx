/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Create.scss';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { GrEdit } from 'react-icons/gr';
import { FaTrashAlt } from 'react-icons/fa';

const AddTaskList = ({
  tasks, onToggleTask, onChangeTask, onDeleteTask,
}) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li key={task.id} className="task-item">
        <CreateTaskList
          task={task}
          onToggle={onToggleTask}
          onChange={onChangeTask}
          onDelete={onDeleteTask}
        />
      </li>
    ))}
  </ul>
);

const CreateTaskList = ({
  task, onChange, onToggle, onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  let TaskContent;

  if (isEditing) {
    TaskContent = (
      <div className="editing">
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button type="button" onClick={() => setIsEditing(false)}>
          <BsFillCheckCircleFill />
        </button>
      </div>
    );
  } else {
    TaskContent = (
      <div className="no-edit">
        {task.text}
        <button type="button" onClick={() => setIsEditing(true)}>
          <GrEdit />
        </button>
      </div>
    );
  }

  return (
    <label className="task-display" htmlFor="tasks">
      <input
        className="checkbox"
        type="checkbox"
        value={task.text}
        checked={task.done}
        onChange={(e) => {
          onToggle({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {TaskContent}
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        className="delete-btn"
      >
        <FaTrashAlt />
      </button>
    </label>
  );
};

export default AddTaskList;
