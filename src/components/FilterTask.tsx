import type { FilterTaskProps } from "../types/types";

export default function FilterTask({
  filter,
  setFilter,
  priorityFilter,
  setPriorityFilter,
}: FilterTaskProps) {
  return (
    <>
      <div className="mb-2 flex flex-wrap gap-6 px-2">
        <p
          className={`cursor-pointer rounded-lg border border-white px-4 py-1 hover:text-blue-700 ${filter === "all" ? "border-blue-700 text-blue-700" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </p>
        <p
          className={`cursor-pointer rounded-lg border border-white px-4 py-1 hover:text-blue-700 ${filter === "active" ? "border-blue-700 text-blue-700" : ""}`}
          onClick={() => setFilter("active")}
        >
          Active
        </p>
        <p
          className={`cursor-pointer rounded-lg border border-white px-4 py-1 hover:text-blue-700 ${filter === "completed" ? "border-blue-700 text-blue-700" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </p>
      </div>

      <div className="mb-3 flex flex-wrap gap-6 px-2">
        <p
          className={`cursor-pointer rounded-lg border border-white px-4 py-1 hover:text-purple-800 ${priorityFilter === "All" ? "border-purple-800 text-purple-800" : ""}`}
          onClick={() => setPriorityFilter("All")}
        >
          All
        </p>
        <p
          className={`cursor-pointer rounded-lg border border-white px-4 py-1 hover:text-purple-800 ${priorityFilter === "Low" ? "border-purple-800 text-purple-800" : ""}`}
          onClick={() => setPriorityFilter("Low")}
        >
          Low
        </p>
        <p
          className={`cursor-pointer rounded-lg border border-white px-4 py-1 hover:text-purple-800 ${priorityFilter === "Medium" ? "border-purple-800 text-purple-800" : ""}`}
          onClick={() => setPriorityFilter("Medium")}
        >
          Medium
        </p>
        <p
          className={`cursor-pointer rounded-lg border border-white px-4 py-1 hover:text-purple-800 ${priorityFilter === "High" ? "border-purple-800 text-purple-800" : ""}`}
          onClick={() => setPriorityFilter("High")}
        >
          High
        </p>
      </div>
    </>
  );
}
