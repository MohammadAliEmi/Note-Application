import React, { useState } from 'react';

const NoteForm = ({ addNote, editNote, noteToEdit }) => {
  const [note, setNote] = useState(noteToEdit ? noteToEdit.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteToEdit) {
      editNote(noteToEdit.id, { ...noteToEdit, content: note });
    } else {
      addNote({
        id: Date.now(),
        content: note,
      });
    }
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <button type="submit">{noteToEdit ? 'Update Note' : 'Add Note'}</button>
    </form>
  );
};

export default NoteForm;
