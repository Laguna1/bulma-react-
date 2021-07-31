import React, { Component } from 'react';
import './App.css';
import './App.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Bulma</h1>
<p className="subtitle">
  Modern CSS framework based on{' '}
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
    Flexbox
  </a>
</p>

<div className="field">
  <div className="control">
    <input className="input" type="text" placeholder="Input" />
  </div>
</div>

<div className="field">
  <p className="control">
    <span className="select">
      <select>
        <option>Select dropdown</option>
        <option>a</option>
        <option>b</option>
        <option>c</option>
      </select>
    </span>
  </p>
</div>

<div className="btns is-center">
  <button className="button is-primary">Primary</button>
  <button className="button is-link">Link</button>
</div>
      </div>
    );
  }
}

export default App;
