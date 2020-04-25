import React, { useRef } from 'react';
import useCountRenders from './useCountRenders';

const Hello = React.memo(({changeName}) => {

  useCountRenders();
  const nameInput = useRef(null);

  return (
    <div>
      <input ref={nameInput} placeholder="Insert Name" />
      <button onClick={() => changeName(nameInput.current.value)}>change Name!!!</button>
    </div>
  );
});

export default Hello;