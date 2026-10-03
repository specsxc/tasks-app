import type { Task } from "../types/types";
import type { SubmitEvent } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function EditTask() {
  const { id } = useParams();
  const taskList = JSON.parse(localStorage.getItem("myTasks") || "");
  const task = taskList.find((task: Task) => task.id === Number(id));
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const navigate = useNavigate();

  function editTask(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const editedTask = { ...task, title: title, description: description };
    const newTasks = taskList.map((task: Task) => {
      if (task.id === Number(id)) {
        return editedTask;
      }
      return task;
    });
    localStorage.setItem("myTasks", JSON.stringify(newTasks));
    navigate("/");
  }

  return (
    <>
      <form onSubmit={editTask}>
        <div className="m-4 mt-12 flex flex-col gap-3 rounded-2xl border border-white p-6">
          <h2>
            <label>
              Title:
              <input
                type="text"
                name="title"
                required
                defaultValue={task.title}
                className="ml-2"
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </h2>
          <label>
            Description:
            <input
              type="text"
              name="description"
              defaultValue={task.description}
              className="ml-2"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
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
      <NavLink
        to="/"
        className="align-center mx-4 mt-auto mb-4 flex justify-center rounded-2xl border border-white px-4 py-2 text-center text-2xl"
      >
        Back to main page
      </NavLink>
    </>
  );
}
