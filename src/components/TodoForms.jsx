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
    <form onSubmit={handleSubmit} className="w-full flex items-center  relative">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className=" bg-white p-2.5 px-4 pr-12 w-full rounded-xl outline-none tracking-wide font-medium placeholder:text-gray-400 placeholder:font-normal text-slate-600 shadow-md"
        placeholder="Input todos ..."
      />
      <button type="submit" className="absolute right-3 text-2xl text-slate-500"><IoMdAdd/></button>
    </form>
  );
};

export default TodoForms;
