import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos } from "../features/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { AddTodo } from "./addTodo";

const AllTodos = () => {
  const [flag, setFlag] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleDelete = (todoId) => {
    dispatch(removeTodos(todoId));
  };
  const handleEdit = (todo) => {
    setFlag(true);
    setEditTodo(todo);
  };
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
      <ul className="space-y-4">
        {flag ? <AddTodo flag={flag} editTodo={editTodo} setFlag={setFlag}/> : <AddTodo />}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm"
          >
            <span className="text-lg">{todo.text}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit({ id: todo.id, text: todo.text })}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTodos;
