import type { Task, TasksListProps } from "../types/types";
import { useState } from "react";
import { NavLink } from "react-router";

export default function TaskList({
  tasks,
  filteredTasks,
  setTasks,
}: TasksListProps) {
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  function deleteTask(id: string | null) {
    if (id === null) return;
    const filterTask = tasks.filter((task: Task) => task.id !== id);
    setTasks(filterTask);
    setOpen(false);
  }

  function showModal(id: string) {
    setOpen(true);
    setDeleteId(id);
  }

  function changeStatus(id: string) {
    const updatedTasks = tasks.map((task: Task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  if (tasks.length === 0)
    return <div>No tasks yet. Create your first task!</div>;
  else if (filteredTasks.length === 0) return <div>No tasks found.</div>;

  return (
    <div className="flex w-full flex-col justify-center gap-3">
      {filteredTasks &&
        filteredTasks.map((task: Task) => (
          <div
            className="flex flex-col items-center rounded-xl border border-white px-2 py-2"
            key={task.id}
          >
            <div className="flex w-11/12 flex-col sm:flex-row sm:items-center">
              <div className="flex flex-col">
                <p>{task.title}</p>
                <p>{task.description}</p>
              </div>
              {task.priority && (
                <div className="w-36 shrink-0 sm:ml-auto">
                  <p className="py-1 sm:px-3">
                    Priority:
                    <span
                      className={`ml-4 ${task.priority === "High" ? "text-red-700" : task.priority === "Medium" ? "text-orange-400" : "text-blue-700"}`}
                    >
                      {task.priority}
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div className="my-3 flex w-11/12 items-center gap-3">
              <label
                className={`w-fit rounded-xl border border-white px-3 py-1 ${task.completed ? "text-green-700" : "text-red-700"}`}
              >
                <input
                  type="checkbox"
                  name="status"
                  checked={task.completed}
                  className="mr-2"
                  onChange={() => changeStatus(task.id)}
                />
                {task.completed ? "Completed" : "Active"}
              </label>
              <div className="ml-auto">
                <NavLink
                  to={`/task/${task.id}`}
                  className="mr-3 cursor-pointer hover:text-green-600"
                >
                  Edit
                </NavLink>
                <button
                  onClick={() => showModal(task.id)}
                  className="cursor-pointer hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="z-20 rounded-xl border border-white bg-gray-700 p-8">
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
