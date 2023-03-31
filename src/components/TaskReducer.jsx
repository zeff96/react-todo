const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "added_task": {
      return tasks.concat({
        id: action.id,
        text: action.text,
        done: false,
      });
    }
    case "toggle_task": {
      return tasks.map((t) => {});
    }
    case "changed_task": {
      return tasks.map((t) => {
        return t.id === action.task.id ? action.task : t;
      });
    }
    case "deleted_task": {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error(`unknown action${action.type}`);
    }
  }
};

export default taskReducer;
