import { Task } from "@/types";
import React, { useEffect } from "react";
import Todo from "./Todo";

//型定義(TypeScript)
interface TodolistProps {
  todos: Task[];
}

//todos=api.tsから取得してきたapiのデータ
const TodoList = ({ todos }: TodolistProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
