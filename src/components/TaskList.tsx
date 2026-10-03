import type { Task } from "../types/types";
import { useState, useEffect } from "react";
import { NavLink } from "react-router";

export default function TaskList() {
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const taskList = JSON.parse(localStorage.getItem("myTasks") || "");
  const [tasks, setTasks] = useState(taskList);

  useEffect(() => {
    console.log(tasks);
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(id: number | null) {
    if (id === null) return;
    const filterTask = tasks.filter((task: Task) => task.id !== id);
    setTasks(filterTask);
    setOpen(false);
  }

  function showModal(id: number) {
    setOpen(true);
    setDeleteId(id);
  }

  function changeStatus(id: number) {
    const updatedTasks = tasks.map((task: Task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks &&
        tasks.map((task: Task) => (
          <div
            className="flex items-center rounded-xl border border-white px-4 py-2"
            key={task.id}
          >
            <input
              type="checkbox"
              name="status"
              defaultChecked={task.completed}
              className="mr-2"
              onChange={() => changeStatus(task.id)}
            />

            <p className="w-3/5 text-left">{task.title}</p>
            <p
              className={`w-1/5 ${task.completed ? "text-green-700" : "text-red-700"}`}
            >
              {task.completed ? "Completed" : "Active"}
            </p>
            <NavLink
              to={`/task/${task.id}`}
              className="w-1/5 cursor-pointer hover:text-green-600"
            >
              Edit
            </NavLink>
            <button
              onClick={() => showModal(task.id)}
              className="w-1/5 cursor-pointer hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="z-20 rounded-xl border border-white bg-gray-900 p-8">
            <h2>Are you sure?</h2>
            <div className="mt-4 flex gap-6">
              <button
                className="cursor-pointer rounded-xl border border-white px-3 py-2 hover:text-red-700"
                onClick={() => deleteTask(deleteId)}
              >
                Delete
              </button>
              <button
                className="cursor-pointer rounded-xl border border-white px-3 py-2 hover:text-yellow-600"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
