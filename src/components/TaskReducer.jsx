const taskReducer = (tasks, action) => {
  switch (action.type) {
    case 'added_task': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'toggle_task': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });
    }
    case 'changed_task': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });
    }
    case 'deleted_task': {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error(`unknown action${action.type}`);
    }
  }
};

export default taskReducer;
