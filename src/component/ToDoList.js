import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from "./toDosSlice";


export default function ToDoList() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" value={text} onChange={e => { setText(e.target.value) }} />{" "}
      <button onClick={() => { dispatch(addTodo(text)); setText(""); }} >Add Todo </button>{" "}
      <ul>
        {" "}
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}{" "}           
            <button onClick={() => dispatch(updateTodo(todo.id))}> update</button>{" "} 
            <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  )
}
