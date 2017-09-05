import styled from 'styled-components';
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ProjectsList from '../containers/Projects';
import DiaryContainer from '../containers/DiaryContainer';
import projectsReducer, { localStorageWrapper } from '../reducers/projects';
import uistateReducer from '../reducers/uistate';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const AppStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  font-family: 'Raleway', sans-serif;

  h1, h2, h3 {
    font-family: 'Zilla Slab', serif;
  }
`;

let store = createStore(
  combineReducers({
    projects: localStorageWrapper(projectsReducer),
    uistate: uistateReducer
  })
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <AppStyled>
            <ProjectsList />
            <DiaryContainer />
          </AppStyled>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
