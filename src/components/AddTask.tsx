import { NavLink } from "react-router";
import { useState } from "react";
import type { Task } from "../types/types";
import type { SubmitEvent } from "react";
import { useNavigate } from "react-router";
import useTasks from "../hooks/useTasks";

export default function AddTask() {
  const { setTasks } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function addTask(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!title) return;
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
    };
    setTasks((prev: Task[]) => [...prev, newTask]);
    setTitle("");
    setDescription("");
    navigate("/");
  }

  return (
    <>
      <div className="my-4 rounded-2xl px-4 py-2 text-3xl">Add new task</div>

      <section className="mx-4 flex flex-col gap-2 rounded-2xl border border-white bg-gray-700 p-8">
        <h1 className="text-center text-xl">Add new task</h1>
        <form className="flex flex-col" onSubmit={addTask}>
          <label className="my-3 flex flex-wrap items-center">
            <span>Task title:</span>
            <input
              type="text"
              placeholder="Fix bugs"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="ml-2 flex-1 rounded-2xl bg-gray-900 px-2"
              required
            />
          </label>

          <label className="flex flex-wrap items-center">
            <span>Task description:</span>
            <input
              type="text"
              placeholder="Ticket #321"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="ml-2 flex-1 rounded-2xl bg-gray-900 px-2"
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
