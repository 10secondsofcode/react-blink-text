import React from 'react';
import Blink from 'react-blink-text';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function BasicExample() {
  return (
    <div>
      <h2>Basic Example</h2>
      <SyntaxHighlighter language="javascript" style={nord}>
        &lt;Blink text='Basic Blinking Text' /&gt;
        </SyntaxHighlighter>
      Output:<br />
      <Blink text='Basic Blinking Text' />
    </div>
  );
}

export default BasicExample;
