import { NavLink } from "react-router";
import { useState } from "react";
import type { Task } from "../types/types";
import type { SubmitEvent } from "react";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTask(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title) return;
    const tasks = JSON.parse(localStorage.getItem("myTasks") || "");
    const task: Task = {
      id: tasks.length,
      title,
      description,
      completed: false,
    };
    tasks.push(task);
    localStorage.setItem("myTasks", JSON.stringify(tasks));
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <div className="my-4 rounded-2xl px-4 py-2 text-3xl">Add new task</div>

      <section className="mx-4 flex flex-col gap-2 rounded-2xl bg-gray-700 p-8">
        <h2 className="text-center text-xl">Add new task</h2>
        <form className="flex flex-col" onSubmit={addTask}>
          <label className="my-3">
            Task title:
            <input
              type="text"
              placeholder="Fix bugs"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="ml-2"
              required
            />
          </label>

          <label>
            Task description:
            <input
              type="text"
              placeholder="Ticket #321"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="ml-2"
            />
          </label>
          <div className="mt-2 flex justify-around gap-4">
            <button
              type="submit"
              className="mt-3 w-1/2 cursor-pointer rounded-2xl border border-white py-2 hover:text-green-700"
            >
              Add
            </button>
            <NavLink
              to="/"
              className="mt-3 w-1/2 cursor-pointer rounded-2xl border border-white py-2 text-center hover:text-red-700"
            >
              Cancel
            </NavLink>
          </div>
        </form>
      </section>

      <NavLink
        to="/"
        className="align-center mx-4 mt-auto mb-4 flex justify-center rounded-2xl border border-white px-4 py-2 text-center text-2xl"
      >
        Back to main page
      </NavLink>
    </>
  );
}
