import React, { Component } from 'react';
import './styles/app.scss';

export default class App extends Component {
  render = () => (
    <div className="app">
      <div className="app-header">
        <h2>Welcome to React</h2>
      </div>

      <p className="app-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}
