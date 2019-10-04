# React Blink 

This reusable React component will manage to blink any text and changing the text color and font size if we need.

`Blink` takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.

## Example 

```
import React, { Component } from "react";
import Blink from 'react-blink-text';

function Application(){
    return (
      <div className="Application">
        <Blink color='blue' text='TestReactApp' fontSize='20'>
          Testing the Blink
        </Blink> 
      </div>
    );
}
export default Application;
```

## Features
1. Supports all html tags : H1, H2, h3,..,etc., Span, Div, A Href tag.
2. Supports all different types of colors
3. Supports server-side rendering.

## Installation

### Yarn:
```
yarn add react-blink-text
```

### npm:
```
npm install --save react-blink-text
```
