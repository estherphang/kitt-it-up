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
            placeholder="Edit task"
            sx={{
              width: 440,
              input: {
                color: "white",
                fontSize: "18px",
                borderBottom: "white",
              },
            }}
          />
          {/* disable save button if string is empty */}
          <div>
            <Button
              variant="outlined"
              type="submit"
              style={{
                color: "white",
                border: "2px solid #e1f5fe",
              }}
              disabled={!editedTask.trim()}
            >
              Save <SaveIcon />
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              type="submit"
              style={{
                color: "white",
                border: "2px solid #e1f5fe",
              }}
              onClick={cancelEdit}
            >
              Cancel
              <CancelIcon />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
