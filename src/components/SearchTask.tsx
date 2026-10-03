import type { SearchTaskProps } from "../types/types";

export default function SearchTask({ search, setSearch }: SearchTaskProps) {
  return (
    <div className="my-4 flex">
      <input
        type="text"
        className="w-full rounded-2xl p-2 pl-4"
        value={search}
        name="search"
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
