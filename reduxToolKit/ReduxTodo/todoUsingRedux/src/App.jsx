import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { AddTodo } from "./components/addTodo";
import AllTodos from "./components/allTodos";
import {store} from "./app/store"
import { Provider } from "react-redux";

function App() {
  return (
    <>
    <Provider store = {store}>
    
 <AllTodos/>
    </Provider>
    </>
  );
}

export default App;
