import React, { useState } from "react";
import TodoForms from "./components/TodoForms";
import TodoItems from "./components/TodoItems";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (text) => {
    if (text.trim() === "") return;

    setTodos([...todos, { id: Date.now(), text, complete: false }]);
  };

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="font-poppins flex items-center flex-col gap-6 h-5 p-5 py-16 w-full min-h-screen bg-slate-50">
      <div className="max-w-lg w-full">
        <TodoForms addTodos={addTodos} />
      </div>
      <div className="max-w-7xl w-full grid grid-cols-4 gap-6">
        {todos.map((item, i) => (
          <TodoItems deleteTodos={deleteTodos} todo={item} key={i} idnya = {i+1}/>
        ))}

        {todos.length == 0 && (
          <p className="col-span-4 text-center p-6 text-slate-500 font-medium text-lg">
            Todos Not Pounds
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
