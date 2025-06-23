import { useState } from 'react';

import { useDate } from './useDate';
import { usePersistentState } from './usePersistentState';

function App() {
  const [time] = useDate();
  const [text, setText] = usePersistentState('jt-text', '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  if (isEditing) {
    return (
      <form onSubmit={handleSave}>
        <TextArea value={text} onChange={handleChange} />
        <button>Save</button>
      </form>
    );
  }

  return (
    <>
      <p>Ora corrente: <strong>{time}</strong></p>
      {text !== "" && text.split("\n").map((item, key) => (
        <p key={key}>{item}</p>
      ))}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
}

function TextArea({ value, onChange }) {
  return (
    <textarea
      value={value}
      rows={5}
      cols={50}
      onChange={onChange}
    />
  );
}

export default App;
