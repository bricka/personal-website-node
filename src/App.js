import React, { Component } from 'react';
import './styles/app.scss';

export default class App extends Component {
  render = () => (
    <div className="app">
      <Header/>

      {this.props.children}
    </div>
  );
}
