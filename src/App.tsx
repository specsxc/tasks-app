import "./index.css";
import TaskList from "./components/TaskList";
import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import SearchTask from "./components/SearchTask";
import type { Task } from "./types/types";
import FilterTask from "./components/FilterTask";

function App() {
  const saved = localStorage.getItem("myTasks");
  const taskList = saved ? JSON.parse(saved) : [];
  const [tasks, setTasks] = useState(taskList);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  let filterTasks;

  if (tasks) {
    filterTasks = tasks.filter((task: Task) => {
      const query = search.toLowerCase();

      const searchMatch =
        !search || search.length < 3
          ? true
          : task.title.toLowerCase().includes(query) ||
            task.description?.toLowerCase().includes(query);

      const statusMatch =
        filter === "all"
          ? true
          : filter === "completed"
            ? task.completed === true
            : task.completed === false;

      return searchMatch && statusMatch;
    });
  }

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

      <SearchTask search={search} setSearch={setSearch}></SearchTask>

      <FilterTask filter={filter} setFilter={setFilter}></FilterTask>

      <section className="text-center">
        <TaskList
          filterTasks={filterTasks}
          tasks={tasks}
          setTasks={setTasks}
        ></TaskList>
      </section>
    </div>
  );
}

export default App;
