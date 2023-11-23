"use client"; //useState等はクライアント側で動く為、この記述が必要
import { addTodo } from "@/api";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    //e: FormEvent = handleSubmitを押下した際のページ更新阻止の為、必要
    e.preventDefault();

    await addTodo({ id: uuidv4(), text: taskTitle }); //uuidv4=関数 → ()が必要
    settaskTitle("");
  };
  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border px-4 py-2 rounded-lg"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          settaskTitle(e.target.value)
        }
        value={taskTitle}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded tranform hover:bg-blue-400 hover:scale-95 duration-200">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
