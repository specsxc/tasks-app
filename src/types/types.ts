import type { Dispatch, SetStateAction } from "react";

export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export type TasksListProps = {
  filterTasks: Task[];
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
};
