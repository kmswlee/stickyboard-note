import React from 'react';
import ReactDOM from 'react-dom';
import MEDitor from '@uiw/react-md-editor';
// No import is required in the WebPack.
// import "@uiw/react-md-editor/dist/markdown-editor.css";

const mkdStr = `# Markdown Editor for React

**Hello world!!!**

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MEDitor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}
\`\`\`
`;

function Test() {
    const [value, setValue] = React.useState(mkdStr);
    return (
        <div className="container">
            <MEDitor height={'100%'} value={value} onChange={setValue} />
            <div style={{ padding: '50px 0 0 0' }} />
            <MEDitor.Markdown source={value} />
        </div>
    );
}

export default Test;
