import { connect } from 'react-redux';

import LoginComponent from './component';

import { runLogin } from '../../actions/uistate';

const mapDispatchToProps = dispatch => ({
    onLogin: username => {
        dispatch(runLogin(username));
    },
});

const LoginContainer = connect(null, mapDispatchToProps)(LoginComponent);
export default LoginContainer;
