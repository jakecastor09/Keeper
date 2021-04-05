import React, { useState } from 'react';

const CreateArea = props => {
  const [title, setTitleValue] = useState('');
  const [note, setNoteValue] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    props.setNote([...props.notes, { title, note }]);

    setTitleValue('');
    setNoteValue('');
  };

  return (
    <div className="createArea">
      <form className="form" onSubmit={onFormSubmit}>
        <input
          className="form__input"
          value={title}
          placeholder="Title"
          onChange={e => setTitleValue(e.target.value)}
        />
        <input
          className="form__input"
          value={note}
          placeholder="Take a note..."
          onChange={e => setNoteValue(e.target.value)}
        />
        <button className="btn">Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
