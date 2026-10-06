import "./index.css";
import TaskList from "./components/TaskList";
import { useState } from "react";
import SearchTask from "./components/SearchTask";
import type { Task, Priority } from "./types/types";
import FilterTask from "./components/FilterTask";
import useTasks from "./hooks/useTasks";
import Header from "./components/Header";

function App() {
  const { tasks, setTasks } = useTasks();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [priorityFilter, setPriorityFilter] = useState<"All" | Priority>("All");

  const filteredTasks = tasks.filter((task: Task) => {
    const query = search.toLowerCase().trim();

    const searchMatch =
      !query ||
      task.title.toLowerCase().includes(query) ||
      task.description?.toLowerCase().includes(query);

    const statusMatch =
      filter === "all" ||
      (filter === "completed" ? task.completed : !task.completed);

    const priorityMatch =
      priorityFilter === "All" || priorityFilter === task.priority;

    return searchMatch && statusMatch && priorityMatch;
  });

  return (
    <div className="m-4 flex w-11/12 flex-col gap-2">
      <Header></Header>

      <SearchTask search={search} setSearch={setSearch}></SearchTask>

      <FilterTask
        filter={filter}
        setFilter={setFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      ></FilterTask>

      <TaskList
        filteredTasks={filteredTasks}
        tasks={tasks}
        setTasks={setTasks}
      ></TaskList>
    </div>
  );
}

export default App;
