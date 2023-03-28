/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import './Add.scss';
import { useDispatch } from './Task';

let nextId = 0;

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

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
          dispatch({
            type: 'added_task',
            id: (nextId += 1),
            text,
          });
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
