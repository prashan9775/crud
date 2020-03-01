import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "./store/store";
import initialState from './store/initialState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import AddNoteMain from "./AddNoteMain";
import * as serviceWorker from './serviceWorker';

const store = configureStore(initialState);

ReactDOM.hydrate(
    <Provider store={store}>
        <Router >
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/create" component={AddNoteMain} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
