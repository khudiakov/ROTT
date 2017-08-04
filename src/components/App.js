import React, {Component} from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ProjectsList from '../containers/Projects';
import ContentContainer from '../containers/ContentContainer';
import projectsReducer from '../reducers/projects';
import uistateReducer from '../reducers/uistate';

import '../styles/App.sass';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


let store = createStore(
  combineReducers({
    projects: projectsReducer, 
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
            <ContentContainer />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
