import { useState } from "react";
import "./Create.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";
import { useTask } from "./Task";
import { useDispatch } from "./Task";

const AddTaskList = () => {
  const tasks = useTask();

  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <CreateTaskList task={task} />
        </li>
      ))}
    </ul>
  );
};

const CreateTaskList = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  let TaskContent;

  if (isEditing) {
    TaskContent = (
      <div className="editing">
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed_task",
              task: {
                ...task,
                text: e.target.value,
              },
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
          dispatch({
            type: "toggle_task",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {TaskContent}
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "deleted_task",
            id: task.id,
          })
        }
        className="delete-btn"
      >
        <FaTrashAlt />
      </button>
    </label>
  );
};

export default AddTaskList;
