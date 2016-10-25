import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import { useRouterHistory } from 'react-router';        // added
import { createHashHistory } from 'history';            // added

import Detail from './pages/Detail';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false});

ReactDOM.render(
    <Router history={appHistory}
        onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ Detail } />
    </Router>,
    document.getElementById('app')
);

// Required for hot reload
module.hot.accept();
