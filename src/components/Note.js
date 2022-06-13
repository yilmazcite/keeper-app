import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Note = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteOutlinedIcon />
      </button>
    </div>
  );
};

export default Note;
