import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const editNote = (id, updatedNote) => {
    setNotes(notes.map(note => (note.id === id ? updatedNote : note)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
