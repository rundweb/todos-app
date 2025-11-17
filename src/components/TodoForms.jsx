import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const TodoForms = ({ addTodos }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodos(input);

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center relative">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-white p-2.5 px-4 pr-12 placeholder:text-slate-400 text-slate-500 tracking-wide outline-none text-lg rounded-xl shadow-md"
        placeholder="Input todos ..."
      />
      <button type="submit" className="absolute right-3 text-2xl text-slate-500"><IoMdAdd/></button>
    </form>
  );
};

export default TodoForms;
