import React, { Component } from 'react';
import './styles/app.scss';

import Header from './header';

export default class App extends Component {
  render = () => (
    <div className="app">
      <Header/>

      <div className="body">
        {this.props.children}
      </div>
    </div>
  );
}
