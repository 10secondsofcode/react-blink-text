import React, { useState } from "react";
import Blink from "react-blink-text";
// import Blink from "../../../lib/ReactBlinkText";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

function BasicExample() {
  const [state, setState] = useState({
    blinkTime: 1,
    textAlign: "left",
    fontWeight: "bolder",
    textTransform: "none",
    textDecoration: "none",
    letterSpacing: "2px"
  });
  const handler = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h2 className="App-link">Basic Example</h2>
      <label>
        Blink Time
        <input type="number" name="blinkTime" onChange={handler}></input>
        {" sec"}
      </label>
      <br></br>
      <label>
        Choose text Alignment
        <select name="textAlign" id="text-Align" onChange={handler}>
          <option value="">--Please choose an option--</option>
          <option value="left">left</option>
          <option value="right">right</option>
          <option value="center">center</option>
        </select>
      </label>
      <br></br>
      <label>
        Choose text fontWeight
        <select name="fontWeight" id="fontWeight" onChange={handler}>
          <option value="">--Please choose an option--</option>
          <option value="normal">normal</option>
          <option value="bold">bold</option>
        </select>
      </label>
      <br></br>
      <label>
        Choose text transform
        <select name="textTransform" id="textTransform" onChange={handler}>
          <option value="">--Please choose an option--</option>
          <option value="none">none</option>
          <option value="uppercase">uppercase</option>
          <option value="lowercase">lowercase</option>
          <option value="capitalize">capitalize</option>
          <option value="full-width">full-width</option>
        </select>
      </label>
      <br></br>
      <label>
        Choose text decoration
        <select name="textDecoration" id="textDecoration" onChange={handler}>
          <option value="">--Please choose an option--</option>
          <option value="none">none</option>
          <option value="underline">underline</option>
          <option value="overline">overline</option>
          <option value="cline-through">line-through</option>
        </select>
      </label>
      <br />
      <label>
        letterSpacing
        <input type="number" name="letterSpacing" onChange={handler}></input>
      </label>
      <SyntaxHighlighter language="javascript" style={nord}>
        &lt;Blink text='Basic Blinking Text' /&gt;
        </SyntaxHighlighter>
      Output:

      <Blink
        text="Basic Blinking Text"
        textAlign={state.textAlign}
        blinkTime={state.blinkTime}
        fontWeight={state.fontWeight}
        textTransform={state.textTransform}
        textDecoration={state.textDecoration}
        letterSpacing={state.letterSpacing + "px"}
      />
    </div>
  );
}

export default BasicExample;
