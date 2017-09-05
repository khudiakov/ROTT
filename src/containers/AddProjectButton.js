import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { addProject } from '../actions/projects';

class ButtonWithModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            text: ""
        };

        this.handleOpen = () => {
            this.setState({open: true, text: ""});
        };

        this.handleClose = () => {
            this.setState({open: false, text: ""});
        };
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Create"
                primary={true}
                onTouchTap={()=>{ 
                    this.handleClose(); 
                    this.props.onClick(this.state.text); 
                }}
            />,
        ];

        return (
            <div>
                <FlatButton label="Create Project" onTouchTap={this.handleOpen} fullWidth={true} secondary={true} />
                <Dialog
                    title="Create Project"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        fullWidth={true}
                        hintText="Title"
                        onChange = {(_, newValue) => this.setState({text: newValue})}
                    />
                </Dialog>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: title => {
            dispatch(addProject(title))
        }
    }

}

const AddProjectButton = connect(null, mapDispatchToProps)(ButtonWithModal);

export default AddProjectButton;