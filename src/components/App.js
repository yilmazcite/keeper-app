import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

const App = () => {
  const [notesArr, setNotesArr] = useState([]);

  const addNote = (newNote) => {
    setNotesArr((prevNotes) => {
      return [...prevNotes, newNote];
    });
    //console.log(notesArr);
  };

  const deleteNote = (id) => {
    setNotesArr((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notesArr.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.newTitle}
            content={noteItem.newContent}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
