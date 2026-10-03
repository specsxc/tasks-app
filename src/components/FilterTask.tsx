import type { FilterTaskProps } from "../types/types";

export default function FilterTask({ filter, setFilter }: FilterTaskProps) {
  return (
    <div className="mb-3 flex gap-6 px-2">
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
  );
}
