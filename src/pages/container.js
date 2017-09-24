import { connect } from 'react-redux';

import RootComponent from './component';

import { fetchProjects } from '../actions/projects';

const mapStateToProps = state => ({ loggedIn: state.uistate.loggedIn });

const mapDispatchToProps = dispatch => ({
    fetchProjects: () => {
        dispatch(fetchProjects());
    },
});

const Root = connect(mapStateToProps, mapDispatchToProps)(RootComponent);

export default Root;
