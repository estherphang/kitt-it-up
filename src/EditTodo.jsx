import { useState } from "react";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

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
    <div className="text-area">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className="individualtask-area">
          <Input
            value={editedTask}
            onChange={handleInputChange}
            type="text"
            sx={{
              width: "200%",
              fontSize: "18px",
              borderBottom: {
                xs: "1px solid white", // Border thickness for extra-small screens
                sm: "1.5px solid white", // Border thickness for small screens
                md: "2px solid white", // Border thickness for medium screens and up
              },
              color: "white", // Text color
            }}
            placeholder="Edit task"
          />
          {/* disable save button if string is empty */}
          <div>
            <Button
              variant="outlined"
              type="submit"
              className="task-addbtn"
              sx={{ marginLeft: 2 }}
              disabled={!editedTask.trim()}
            >
              <span className="hidden">Save </span>
              <SaveIcon />
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              type="submit"
              className="task-addbtn"
              sx={{ marginLeft: 2 }}
              onClick={cancelEdit}
            >
              <span className="hidden">Cancel </span>
              <CancelIcon />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
