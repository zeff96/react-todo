import './Render.scss';
import { TaskProvider } from './Task';
import AddTask from './Add';
import AddTaskList from './Create';

const RenderTask = () => (
  <div className="wrapper">
    <TaskProvider>
      <h1>My Todo List</h1>
      <AddTask />
      <AddTaskList />
    </TaskProvider>
  </div>
);

export default RenderTask;
