import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ProjectsList from '../containers/Projects';
import DiaryContainer from '../containers/DiaryContainer';
import projectsReducer, {localStorageWrapper} from '../reducers/projects';
import uistateReducer from '../reducers/uistate';

import '../styles/App.sass';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


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
          <div className="App">
            <ProjectsList />
            <DiaryContainer />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
