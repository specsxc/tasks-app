import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="my-2 flex flex-1 flex-col items-center justify-between gap-4 sm:flex-row">
      <h1 className="text-3xl text-nowrap">Task Manager</h1>
      <NavLink
        to="addtask"
        className="rounded-2xl border border-white px-2 py-2"
      >
        + Add task
      </NavLink>
    </header>
  );
}
