import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const AddNote = (props) => {
  const [newNote, setNewNote] = useState({
    newTitle: "",
    newContent: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  const handleNoteChange = (event) => {
    const { name, value } = event.target;

    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });

    /* 
    name === "title"
      ? setNewNote({ ...note, title: value })
      : setNewNote({ ...note, content: value });

      Alternative to ternary operator:
    if (name === "title") {
      setNewNote({
        ...note,
        title: value,
      });
    } else if (name === "content") {
      setNewNote({
        ...note,
        content: value,
      });
    }
    */
  };

  const submitNewNote = (event) => {
    props.onAdd(newNote);
    //Empty out the input and textarea fields once the button is clicked:
    setNewNote({
      newTitle: "",
      newContent: "",
    });
    event.preventDefault();
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="add-note">
        {isExpanded && (
          <input
            name="newTitle"
            type="text"
            placeholder="Title"
            value={newNote.newTitle}
            onChange={handleNoteChange}
          />
        )}

        <textarea
          name="newContent"
          type="text"
          placeholder="Take a note"
          rows={isExpanded ? 3 : 1}
          onClick={expand}
          value={newNote.newContent}
          onChange={handleNoteChange}
        />
        <button onClick={submitNewNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
};

export default AddNote;
