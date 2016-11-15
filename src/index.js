import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Home from './home';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
);

            // <Route path="resume" component={Resume}/>
            // <Route path="courses" component={Courses}/>
            // <Route path="projects" component={Projects}/>
            // <Route path="contact" component={Contact}/>

ReactDOM.render(
  router,
  document.body
);
