import { useState, useEffect } from "react";

export default function useTasks() {
  const saved = localStorage.getItem("myTasks");
  const taskList = saved ? JSON.parse(saved) : [];
  const [tasks, setTasks] = useState(taskList);

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);
  return { tasks, setTasks };
}
