import { createContext, useContext, useReducer, useEffect } from "react";
import taskReducer from "./TaskReducer";

const TaskContext = createContext(null);
const TaskDispatchContext = createContext(null);

const getSavedTask = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  return tasks || [];
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, getSavedTask());

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};

export const useDispatch = () => {
  return useContext(TaskDispatchContext);
};
