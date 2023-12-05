import { useEffect, useState } from "react";
import TodoList from "./Todolist.jsx";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

export default function TodoMain() {
  const [todos, setTodos] = useState(getLocalStorage());
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos([
      ...todos,
      { id: Date.now(), title, completed: false, isEditing: false },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        // creates a new object with the same properties as the current todo, except it toggles the <completed> value
        // toggle the completed status of the todo
        // if it's true, make it false; if it's false, make it true
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, title) => {
    setTodos(
      todos.map((todo) =>
        // if it's true, make it false; if it's false, make it true
        todo.id === id ? { ...todo, isEditing: !todo.isEditing, title } : todo
      )
    );
  };

  //prevent form to refresh
  const handleSubmit = (e) => {
    e.preventDefault();
    // check string is not empty, if true add task.
    if (newItem.trim()) {
      console.log("Adding todo:", newItem.trim());
      addTodo(newItem.trim());
      setNewItem("");
    }
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="todo-title">Tasks</h1>
        <form onSubmit={handleSubmit}>
          <div className="text-area">
            <TextField
              id="outlined-basic"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              placeholder="Add new task"
              sx={{ width: 550 }}
              InputLabelProps={{ className: "textfield" }}
              InputProps={{
                className: "textfield-bg",
              }}
            />
            <Button
              variant="outlined"
              type="submit"
              style={{ color: "white", border: "2px solid #e1f5fe" }}
            >
              Add Task <AddIcon />
            </Button>
          </div>
        </form>
        <div className="task-area">
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </>
  );
}
