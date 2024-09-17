import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos, editTodos } from "../features/todoSlice";

export const AddTodo = ({ flag, editTodo, setFlag }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = (event) => {
    event.preventDefault();
    dispatch(addTodos(input));
    setInput("");
  };
  useEffect(() => {
    if (flag) {
      setInput(editTodo.text);
    }
  }, [flag]);
  const updateTodos = () => {
    dispatch(
      editTodos({
        id: editTodo.id,
        text: input
      })
    );
    setInput("");
    setFlag(false);
  };
  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">To-dos</h1>
      <div className="flex space-x-4">
        <input
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`${flag ? "Edit" : "Add"} your todo...`}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={flag ? updateTodos : addTodo}
        >
          {flag ? "Edit" : "Add"} Todo
        </button>
      </div>
    </div>
  );
};
