/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import './Add.scss';

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('');

  return (
    <label htmlFor="tasks">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="add-input"
        placeholder="Add Task"
      />
      <button
        type="button"
        onClick={() => {
          if (text === '') return;
          onAddTask(text);
          setText('');
        }}
        className="add-btn"
      >
        <MdOutlineAddCircleOutline />
      </button>
    </label>
  );
};

export default AddTask;
