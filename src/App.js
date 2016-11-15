import React, { Component } from 'react';
import './styles/app.scss';

export default class App extends Component {
  render = () => (
    <div className="app">

      {this.props.children}
    </div>
  );
}

      // <Header/>
