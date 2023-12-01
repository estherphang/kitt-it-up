import { useState } from "react";
import EditTodo from "./EditTodo";

// List task (single line of task per row)

const Todo = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  // Edit button
  const handleEdit = () => {
    editTodo(todo.id, todo.title);
    setIsEditing(true);
  };

  //Cancel Button
  //change back to defacult value
  const cancelEdit = () => {
    setIsEditing(false);
  };

  return (
    //Code will affect CSS Component
    <li className={todo.completed ? "completed" : "incomplete"}>
      {isEditing ? (
        <EditTodo todo={todo} updateTodo={editTodo} cancelEdit={cancelEdit} />
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.title}
          </label>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Todo;
