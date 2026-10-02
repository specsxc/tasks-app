import type { Task } from "../types/types";

export default function TaskList() {
  // const task: Task = {
  //   id: 0,
  //   title: "Test title",
  //   description: "Test desciption",
  //   completed: false,
  // };
  // const task2: Task = {
  //   id: 1,
  //   title: "Test title2",
  //   description: "Test desciption2",
  //   completed: false,
  // };
  // localStorage.setItem("myTasks", JSON.stringify([task, task2]));
  const taskList = JSON.parse(localStorage.getItem("myTasks") || "");
  console.log(taskList);
  return (
    taskList &&
    taskList.map((task: Task) => <div key={task.id}>{task.title}</div>)
  );
}
