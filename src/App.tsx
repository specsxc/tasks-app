import "./index.css";
import TaskList from "./components/TaskList";
import { NavLink } from "react-router";

function App() {
  return (
    <div className="flex min-h-screen flex-col gap-2 p-2">
      <header className="flex items-center justify-between p-15">
        <h1 className="text-3xl">Task Manager</h1>
        <NavLink
          to="addtask"
          className="rounded-2xl border border-white px-2 py-2"
        >
          + Add task
        </NavLink>
      </header>
      {/* 
      <section>Search</section>

      <section>Filtrowanie</section> */}

      <section className="text-center">
        <h2>Lista tasków</h2>
        <TaskList></TaskList>
      </section>
    </div>
  );
}

export default App;
