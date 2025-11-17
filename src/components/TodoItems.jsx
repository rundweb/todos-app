import React from "react";
import { GoTrash } from "react-icons/go";

const TodoItems = ({ deleteTodos, todo, idnya }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4">
      <h1 className="text-slate-900 capitalize font-medium tracking-wide">{todo.text}</h1>
      <div className="flex items-center justify-between">
        <span className="text-slate-900 font-medium">{idnya}</span>
        <div onClick={() => deleteTodos(todo.id)} className="cursor-pointer">
        <GoTrash  className="text-xl text-red-500"/>
      </div>
      </div>
    </div>
  );
};

export default TodoItems;
