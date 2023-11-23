import { Task } from "./types";

//get
export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    cache: "no-store", //SSR 
    //cache: "force-cache" //SSG
  });
  const todos = res.json();

  return todos;
};

//add  追加するtodo(AddTaskの部分)
export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo), //JSON形式でtodo(apiデータ)の中身を返される
  });
  const newTodo = res.json();

  return newTodo;
};

//edit
export const editTodo = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: `PUT`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }), //JSON形式でtodo(apiデータ)の中身を返される
  });
  const updatedTodo = res.json();

  return updatedTodo;
};

// delet
export const deleteTodo = async (id: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: `DELETE`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deleteTodo = res.json();

  return deleteTodo;
};
