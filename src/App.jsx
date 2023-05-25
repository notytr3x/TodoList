import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [previousFocousEl, setPreviousFocousEl] = useState(null);
  const [isEdittng, setIsEdittng] = useState(false);
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };
  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );

    closeEditMode();
  };

  const closeEditMode = () =>{
    setIsEdittng(false);
    // TODO:previous state focus
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEdittng(true)
    // TODO: set set focus back toorigional
    setPreviousFocousEl(document.activeElement);
  };
  return (
    <div className="container">
      <header>
        {isEdittng && (
          <EditForm editedTask={editedTask} updateTask={updateTask} />
        )}

        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks.length > 0 && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}
