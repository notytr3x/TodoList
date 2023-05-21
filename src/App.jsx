import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };
  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks.length > 0 && <TaskList tasks={tasks} />}
    </div>
  );
}
