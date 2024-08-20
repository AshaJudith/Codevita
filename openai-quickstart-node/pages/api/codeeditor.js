import React, { useState } from 'react';
import { getGptResponse } from '../api/api';

function CodeEditor(props) {
  const [code, setCode] = useState('');

  async function handleRunCode() {
    const response = await getGptResponse(code);
    props.setGptOutput(response);
  }

  return (
    <div>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} rows="10" cols="50" />
      <button onClick={handleRunCode}>Run Code</button>
    </div>
  );
}

export default CodeEditor;