import type { Task, Priority } from "../types/types";
import type { SubmitEvent } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import useTasks from "../hooks/useTasks";

export default function EditTask() {
  const { id } = useParams();
  const { tasks, setTasks } = useTasks();
  const task = tasks.find((task: Task) => task.id === id) || "";
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority || "Medium");
  const navigate = useNavigate();

  function editTask(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!task || !tasks) return;
    const editedTasks = tasks.map((task: Task) => {
      if (task.id === id) {
        return { ...task, title, description, priority };
      }
      return task;
    });
    setTasks(editedTasks);
    navigate("/");
  }

  return (
    <div className="flex min-h-screen w-11/12 flex-col gap-2">
      {!tasks || !task ? (
        <div className="my-6 text-center text-3xl">Task not found.</div>
      ) : (
        <form onSubmit={editTask}>
          <div className="my-4 rounded-2xl px-4 py-2 text-3xl">Edit task</div>
          <div className="mx-4 flex flex-col gap-3 rounded-2xl border border-white bg-gray-700 p-6">
            <h1 className="text-center text-xl">Edit task</h1>
            <h2>
              <label className="flex flex-wrap items-center">
                <span>Title:</span>
                <input
                  type="text"
                  name="title"
                  required
                  defaultValue={task.title}
                  className="ml-2 flex-1 rounded-2xl bg-gray-900 px-2"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
            </h2>
            <label className="flex flex-wrap items-center">
              <span>Description:</span>
              <input
                type="text"
                name="description"
                defaultValue={task.description}
                className="ml-2 flex-1 rounded-2xl bg-gray-900 px-2"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <div className="mt-2 flex flex-wrap items-center justify-between">
              <label className="rounded-2xl border border-white px-3 py-1 hover:border-blue-500 hover:text-blue-500 has-checked:border-blue-500 has-checked:text-blue-500">
                <input
                  type="radio"
                  name="priority"
                  onChange={(e) => setPriority(e.target.value as Priority)}
                  checked={priority === "Low"}
                  value="Low"
                  className="sr-only"
                />
                <span>Low</span>
              </label>
              <label className="rounded-2xl border border-white px-3 py-1 hover:border-blue-500 hover:text-blue-500 has-checked:border-blue-500 has-checked:text-blue-500">
                <input
                  type="radio"
                  name="priority"
                  onChange={(e) => setPriority(e.target.value as Priority)}
                  checked={priority === "Medium"}
                  value="Medium"
                  className="sr-only"
                />
                <span>Medium</span>
              </label>
              <label className="rounded-2xl border border-white px-3 py-1 hover:border-blue-500 hover:text-blue-500 has-checked:border-blue-500 has-checked:text-blue-500">
                <input
                  type="radio"
                  name="priority"
                  onChange={(e) => setPriority(e.target.value as Priority)}
                  checked={priority === "High"}
                  value="High"
                  className="sr-only"
                />
                <span>High</span>
              </label>
            </div>
            <div className="mt-2 flex justify-around gap-4">
              <button
                type="submit"
                className="mt-3 w-1/2 cursor-pointer rounded-2xl border border-white py-2 hover:text-green-700"
              >
                Edit
              </button>
              <NavLink
                to="/"
                className="mt-3 w-1/2 cursor-pointer rounded-2xl border border-white py-2 text-center hover:text-red-700"
              >
                Cancel
              </NavLink>
            </div>
          </div>
        </form>
      )}
      <NavLink
        to="/"
        className="align-center mx-4 mt-auto mb-4 flex justify-center rounded-2xl border border-white px-4 py-2 text-center text-2xl"
      >
        Back to main page
      </NavLink>
    </div>
  );
}
