import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import projectsReducer, { localStorageWrapper } from '../reducers/projects';
import uistateReducer from '../reducers/uistate';

import Root from '../pages';

let store = createStore(
    combineReducers({
        projects: projectsReducer,
        uistate: uistateReducer,
    }),
    applyMiddleware(thunk)
);

const App = () => (
    <Provider store={store}>
        <Root />
    </Provider>
);

export default App;
