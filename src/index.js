import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Courses from './courses';
import Home from './home';
import MipsVimHighlightlingProject from './projects/mips_vim';
import Projects from './projects';
import Resume from './resume';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { addLocaleData } from 'react-intl';
import de from 'react-intl/locale-data/de';

addLocaleData([ ...de ]);

const router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="resume" component={Resume}/>
            <Route path="courses" component={Courses}/>
            <Route path="projects" component={Projects}/>
            <Route path="projects/mips-vim" component={MipsVimHighlightlingProject}/>
        </Route>
    </Router>
);

            // <Route path="contact" component={Contact}/>

ReactDOM.render(
  router,
  document.body
);
