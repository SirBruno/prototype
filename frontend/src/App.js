import React, { useState, useCallback } from 'react';
import './App.css';
import Hello from './Hello';

function App() {

  const [name, setName] = useState('Bruno');

  const changeName = useCallback((x) => {
    setName(x);
  }, [setName]);

  return (
    <div className="App">
      <p>Hello {name}</p>
      <Hello changeName={changeName} />
    </div>
  );
}

export default App;