import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="resume" component={Resume}/>
            <Route path="courses" component={Courses}/>
            <Route path="projects" component={Projects}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>
);

ReactDOM.render(
  router,
  document.body
);
