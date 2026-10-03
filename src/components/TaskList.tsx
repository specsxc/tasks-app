import type { Task } from "../types/types";
import { useState } from "react";

export default function TaskList() {
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const taskList = JSON.parse(localStorage.getItem("myTasks") || "");
  console.log(taskList);

  function editTask(id: number) {
    console.log(id);
  }

  function deleteTask(id: number | null) {
    if (id === null) return;
    const filterTask = taskList.filter((task: Task) => task.id !== id);
    localStorage.setItem("myTasks", JSON.stringify(filterTask));
    setOpen(false);
  }

  function showModal(id: number) {
    setOpen(true);
    setDeleteId(id);
  }

  return (
    <div className="flex flex-col gap-3">
      {taskList &&
        taskList.map((task: Task) => (
          <div
            className="flex rounded-xl border border-white px-4 py-2"
            key={task.id}
          >
            <p className="w-3/5 text-left">{task.title}</p>
            <p className="w-1/5">{task.completed ? "Completed" : "X"}</p>
            <button
              className="w-1/5 cursor-pointer"
              onClick={() => editTask(task.id)}
            >
              Edit
            </button>
            <button
              onClick={() => showModal(task.id)}
              className="w-1/5 cursor-pointer"
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
                className="cursor-pointer rounded-xl border border-white px-3 py-2 hover:text-green-600"
                onClick={() => deleteTask(deleteId)}
              >
                Delete
              </button>
              <button
                className="cursor-pointer rounded-xl border border-white px-3 py-2 hover:text-red-700"
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
