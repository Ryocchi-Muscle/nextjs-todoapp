import Image from "next/image";
import AddTask from "./compornents/AddTask";
import TodoList from "./compornents/TodoList";
import { getAllTodos } from "@/api";

export default async function Home() {
  const todos = await getAllTodos();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-300">
      <h1 className="text-4xl font-bold -mt-32">Nextjs 13 todo app</h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full bg-white shadow-md px-8 py-6 rounded-lg">
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
