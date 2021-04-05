import React, { useState } from 'react';

import Header from './MainPage/Header';
import CreateArea from './MainPage/CreateArea';
import Note from './MainPage/Note';

const App = () => {
  const [notes, setNote] = useState([]);

  return (
    <main className="main">
      <Header />
      <div className="container">
        <CreateArea setNote={setNote} notes={notes} />
        <Note notes={notes} setNote={setNote} />
      </div>
    </main>
  );
};

export default App;
