import type { Dispatch, SetStateAction } from "react";

export type Priority = "Low" | "Medium" | "High";

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
};

export type TasksListProps = {
  filteredTasks: Task[];
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

export type SearchTaskProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export type FilterTaskProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  priorityFilter: "All" | Priority;
  setPriorityFilter: Dispatch<SetStateAction<"All" | Priority>>;
};
