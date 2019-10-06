import React from 'react';
import Blink from 'react-blink-text';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ColorExample() {
  return (
    <div>
      <h2>Color</h2>
      <SyntaxHighlighter language="javascript" style={nord}>
        &lt;Blink text='Colored Blinking Text' color='blue'/&gt;
        </SyntaxHighlighter>
      Output:<br />
      <Blink text='Colored Blinking Text' color='blue' />
    </div>
  );
}

export default ColorExample;
