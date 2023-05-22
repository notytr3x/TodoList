import { useState } from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";
import EditForm from './components/EditForm'

export default function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };
  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };


  const toggleTask= (id) =>{
    setTasks(prevState => prevState.map(t=>(t.id === id ? 
      {...t, checked: !t.checked} : t)))
  }
  return (
    <div className="container">
      <header>
        <EditForm/>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks.length > 0 && <TaskList tasks={tasks} deleteTask={deleteTask}
      toggleTask = {toggleTask}/>}
    </div>
  );
}
