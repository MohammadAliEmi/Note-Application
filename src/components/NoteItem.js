import React from 'react';

const NoteItem = ({ note, editNote, deleteNote }) => {
  return (
    <div className="note-item">
      <p>{note.content}</p>
      <button onClick={() => editNote(note.id)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
