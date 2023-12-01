import { useState } from "react";
import TodoList from "./TodoList";

export default function TodoMain() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

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
      <h1>To-do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          placeholder="Add new task"
        />
        <button type="submit">Add</button>
      </form>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}
