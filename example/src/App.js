import React from 'react';
import './App.css';
import BasicExample from './components/BasicExample';
import ColorExample from './components/ColorExample';
import FontExample from './components/FontExample';

function App() {
  return (
    <div className="App">
      <h1>Demo for React Blink Text</h1>
      <BasicExample />
      {/* <ColorExample />
      <FontExample /> */}
    </div >
  );
}

export default App;
