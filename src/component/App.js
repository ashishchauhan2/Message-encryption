import React from "react";

import "./App.css";
import  Encrypt from './Encrypt'

export default class App extends React.Component {
  render() {
    return (
      <div className="component-app">
          <Encrypt/>
      </div>
    );
  }
}
