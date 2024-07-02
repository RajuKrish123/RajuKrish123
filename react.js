import React, { useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import Prism CSS for styling
import { Highlight, defaultProps } from 'prism-react-renderer';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div style={{ position: 'relative' }}>
      <textarea
        value={code}
        onChange={handleChange}
        spellCheck="false"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          color: 'transparent',
          background: 'transparent',
          caretColor: 'black',
          zIndex: 1,
          border: 'none',
          outline: 'none',
          resize: 'none',
          padding: '16px',
          fontFamily: 'monospace',
          fontSize: '14px',
        }}
      />
      <pre
        aria-hidden="true"
        style={{
          margin: 0,
          pointerEvents: 'none',
          padding: '16px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          fontFamily: 'monospace',
          fontSize: '14px',
        }}
      >
        <Highlight {...defaultProps} code={code} language="javascript">
          {({ tokens, getLineProps, getTokenProps }) => (
            <React.Fragment>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </React.Fragment>
          )}
        </Highlight>
      </pre>
    </div>
  );
};

export default CodeEditor;
import React from 'react';
import './App.css';
import CodeEditor from './CodeEditor';

function App() {
  return (
    <div className="App">
      <h1>Simple Code Editor</h1>
      <CodeEditor />
    </div>
  );
}

export default App;
.App {
  font-family: sans-serif;
  text-align: center;
}

textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  width: 80%;
  height: 400px;
  margin-top: 20px;
}
import React, { useState, ChangeEvent } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { Highlight, defaultProps } from 'prism-react-renderer';

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setCode(event.target.value);
  };

  return (
    <div style={{ position: 'relative' }}>
      <textarea
        value={code}
        onChange={handleChange}
        spellCheck="false"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          color: 'transparent',
          background: 'transparent',
          caretColor: 'black',
          zIndex: 1,
          border: 'none',
          outline: 'none',
          resize: 'none',
          padding: '16px',
          fontFamily: 'monospace',
          fontSize: '14px',
        }}
      />
      <pre
        aria-hidden="true"
        style={{
          margin: 0,
          pointerEvents: 'none',
          padding: '16px',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          fontFamily: 'monospace',
          fontSize: '14px',
        }}
      >
        <Highlight {...defaultProps} code={code} language="javascript">
          {({ tokens, getLineProps, getTokenProps }) => (
            <React.Fragment>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </React.Fragment>
          )}
        </Highlight>
      </pre>
    </div>
  );
};

export default CodeEditor;
