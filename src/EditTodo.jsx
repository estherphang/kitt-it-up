import { useState } from "react";

const EditTodo = ({ todo, updateTodo, cancelEdit }) => {
  const [editedTask, setEditedTask] = useState(todo.title);

  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSave = () => {
    //check string is not empty, if true, updates the task
    if (editedTask.trim() !== "") {
      updateTodo(todo.id, editedTask);
      // exit "editing" stage after saving, set isEditting to false
      cancelEdit();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
    >
      <input type="text" value={editedTask} onChange={handleInputChange} />
      {/* disable save button if string is empty */}
      <button type="submit" disabled={!editedTask.trim()}>
        Save
      </button>
      <button onClick={cancelEdit}>Cancel</button>
    </form>
  );
};

export default EditTodo;
