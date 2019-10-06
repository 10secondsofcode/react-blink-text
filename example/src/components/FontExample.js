import React from 'react';
import Blink from 'react-blink-text';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function FontExample() {
  return (
    <div>
      <h2>Font</h2>
      <SyntaxHighlighter language="javascript" style={nord}>
        &lt;Blink text='Blinking Text with Font Size 30' fontSize='30'/&gt;
        </SyntaxHighlighter>
      Output:<br />
      <Blink text='Blinking Text with Font Size 30' fontSize='30' />
    </div>
  );
}

export default FontExample;
