import React, { useRef, useState } from 'react';



function App(props) {

  const [notes, setNotes] = useState(props.notes);
  const [newNoteContent, setNewNoteContent] = useState('');

  const newNoteContentRef = useRef(null);
  return (
    <div>
      <h1>Notes</h1>

      <ul>
        {
          notes.map(note =>
            <li key={note.id}>{ note.content }</li>
          )
        }
      </ul>
      <hr></hr>
      <h2>Add a New Note</h2>
      <form>
        <label>
          content: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type='text'
            ref={newNoteContentRef}
            value={newNoteContentRef}
            onChange={e => setNewNoteContent(e.target.value)}
          />
        </label>
      </form>
    </div>
  )
}

export default App;
