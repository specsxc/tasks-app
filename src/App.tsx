import "./index.css";
import TaskList from "./components/TaskList";
import { NavLink } from "react-router";
import { useState } from "react";
import SearchTask from "./components/SearchTask";
import type { Task, Priority } from "./types/types";
import FilterTask from "./components/FilterTask";
import useTasks from "./hooks/useTasks";

function App() {
  const { tasks, setTasks } = useTasks();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<"All" | Priority>("All");

  const filteredTasks = tasks.filter((task: Task) => {
    const query = search.toLowerCase();

    const searchMatch = !search
      ? true
      : task.title.toLowerCase().includes(query) ||
        task.description?.toLowerCase().includes(query);

    const statusMatch =
      filter === "all"
        ? true
        : filter === "completed"
          ? task.completed === true
          : task.completed === false;

    const priorityMatch =
      priorityFilter === "All"
        ? true
        : priorityFilter === "Low"
          ? task.priority === "Low"
          : priorityFilter === "Medium"
            ? task.priority === "Medium"
            : priorityFilter === "High" && task.priority === "High";

    return searchMatch && statusMatch && priorityMatch;
  });

  return (
    <div className="flex min-h-screen flex-col gap-2 p-2">
      <header className="my-2 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h1 className="text-3xl text-nowrap">Task Manager</h1>
        <NavLink
          to="addtask"
          className="rounded-2xl border border-white px-2 py-2"
        >
          + Add task
        </NavLink>
      </header>

      <SearchTask search={search} setSearch={setSearch}></SearchTask>

      <FilterTask
        filter={filter}
        setFilter={setFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      ></FilterTask>

      <section className="text-center">
        <TaskList
          filteredTasks={filteredTasks}
          tasks={tasks}
          setTasks={setTasks}
        ></TaskList>
      </section>
    </div>
  );
}

export default App;
