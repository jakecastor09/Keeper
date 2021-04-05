import React from 'react';

const Note = props => {
  const onButtonClick = index => {
    const newNotes = props.notes.filter((_, i) => index !== i);
    props.setNote(newNotes);
  };
  const note = props.notes.map((noteValue, i) => {
    return (
      <div className="note" key={i}>
        <h2 className="note__title">{noteValue.title}</h2>
        <p className="note__paragraph">{noteValue.note}</p>
        <button className="btn-delete" onClick={() => onButtonClick(i)}>
          DELETE
        </button>
      </div>
    );
  });
  return <div className="note_container container">{note}</div>;
};

export default Note;
