import { useState } from "react";
import EditTodo from "./EditTodo.jsx";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
                className="task-addbtn"
                sx={{ marginLeft: 2 }}
                onClick={handleEdit}
              >
                <span className="hidden">Edit</span>
                <EditIcon />
              </Button>
            </div>
            <div>
              <Button
                variant="outlined"
                type="submit"
                className="task-addbtn"
                sx={{ marginLeft: 2 }}
                onClick={() => deleteTodo(todo.id)}
              >
                <span className="hidden">Delete</span>
                <DeleteIcon />
              </Button>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default Todo;
