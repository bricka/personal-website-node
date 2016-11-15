import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Courses from './courses';
import Home from './home';
import Resume from './resume';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="resume" component={Resume}/>
            <Route path="courses" component={Courses}/>
        </Route>
    </Router>
);

            // <Route path="projects" component={Projects}/>
            // <Route path="contact" component={Contact}/>

ReactDOM.render(
  router,
  document.body
);
