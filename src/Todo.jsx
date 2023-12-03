import { useState } from "react";
import EditTodo from "./EditTodo";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// List task (single line of task per row)

const Todo = ({ todo, toggleTodo, deleteTodo, editTodo, handleStartStop }) => {
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

  const handlePlayTimer = () => {
    handleStartStop(); // Trigger the timer in the App component
  };

  return (
    //Code will affect CSS Component
    <li className={todo.completed ? "completed" : "incomplete"}>
      {isEditing ? (
        <EditTodo todo={todo} updateTodo={editTodo} cancelEdit={cancelEdit} />
      ) : (
        <>
          <div className="individualtask-area">
            <label className="task">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: "15px", transform: "scale(1.3)" }}
              />
              {todo.title}
            </label>
            <div>
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  color: "white",
                  border: "2px solid #e1f5fe",
                }}
                onClick={handleEdit}
              >
                Edit
                <EditIcon />
              </Button>
            </div>
            <div>
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  color: "white",
                  border: "2px solid #e1f5fe",
                }}
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
                <DeleteIcon />
              </Button>
            </div>
            {/* <button onClick={handleEdit}>Edit</button> */}
            {/* <button onClick={() => deleteTodo(todo.id)}>Delete</button> */}
          </div>
        </>
      )}
    </li>
  );
};

export default Todo;
